import { LitElement, html, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant, LovelaceCard, LovelaceCardEditor } from 'custom-card-helpers';

import { CARD_TYPE, CARD_VERSION, EDITOR_TYPE } from './const';
import { cardStyles } from './styles';
import type { EvChargingCardConfig } from './types';
import {
  clampPercent,
  formatDuration,
  formatEnergy,
  formatPower,
  isCharging,
  readEntity,
  resolveTitle,
} from './utils';

const BOLT_SVG = html`
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M13 2L4.5 13.5h6L9 22l8.5-11.5h-6L13 2z"
    />
  </svg>
`;

(window as unknown as { customCards?: unknown[] }).customCards =
  (window as unknown as { customCards?: unknown[] }).customCards ?? [];
((window as unknown as { customCards: unknown[] }).customCards).push({
  type: CARD_TYPE,
  name: 'EV Charging Card',
  description:
    'Compact card showing an EV charging session — power, energy added, SoC, limit, ETA.',
  preview: true,
  documentationURL: 'https://github.com/johnbr/ha-ev-charging-card',
});

console.info(
  `%c EV-CHARGING-CARD %c v${CARD_VERSION} `,
  'color: white; background: #2c5282; font-weight: 700;',
  'color: #2c5282; background: white; font-weight: 700;',
);

@customElement(CARD_TYPE)
export class EvChargingCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: EvChargingCardConfig;

  static override styles = cardStyles;

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import('./ev-charging-card-editor');
    return document.createElement(EDITOR_TYPE) as LovelaceCardEditor;
  }

  public static getStubConfig(
    _hass: HomeAssistant,
    entities: string[],
  ): Partial<EvChargingCardConfig> {
    const soc = entities.find((e) => e.startsWith('sensor.') && /battery/.test(e));
    return {
      type: `custom:${CARD_TYPE}`,
      state_of_charge: soc ?? '',
    };
  }

  public setConfig(config: EvChargingCardConfig): void {
    if (!config) throw new Error('Invalid configuration');
    if (!config.state_of_charge) {
      throw new Error('`state_of_charge` entity is required');
    }
    this._config = config;
  }

  public getCardSize(): number {
    return 1;
  }

  protected override render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) return nothing;

    const socRead = readEntity(this.hass, this._config.state_of_charge);
    if (!socRead || !socRead.available) {
      return html`
        <ha-card>
          ${this._renderTitle()}
          <hui-warning>State of charge unavailable</hui-warning>
        </ha-card>
      `;
    }

    const soc = clampPercent(socRead.numeric);
    const limitRead = readEntity(this.hass, this._config.charge_limit);
    const limit = limitRead && limitRead.available ? clampPercent(limitRead.numeric) : null;

    const chargingRead = readEntity(this.hass, this._config.charging_state);
    const active = isCharging(chargingRead);

    const power = active ? formatPower(readEntity(this.hass, this._config.power)) : null;
    const energy = active ? formatEnergy(readEntity(this.hass, this._config.energy_added)) : null;
    const eta = active ? formatDuration(readEntity(this.hass, this._config.time_remaining)) : null;

    const metrics = [
      `${soc.toFixed(0)}%`,
      power,
      energy,
      eta ? `ETA ${eta}` : null,
    ].filter(Boolean).join('  ·  ');

    return html`
      <ha-card>
        ${this._renderTitle()}
        <div class="row">
          <div class="bolt" data-active="${active}">${BOLT_SVG}</div>
          <div
            class="bar"
            role="progressbar"
            aria-valuenow="${soc}"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="fill" data-full="${soc >= 99.5}" style="width: ${soc}%">
              <div class="shimmer" data-active="${active}"></div>
            </div>
            <div class="metrics">${metrics}</div>
            ${limit != null
              ? html`<div class="limit-marker" style="left: ${limit}%"></div>`
              : nothing}
          </div>
        </div>
      </ha-card>
    `;
  }

  private _renderTitle(): TemplateResult | typeof nothing {
    if (!this._config) return nothing;
    const title = this._config.name ?? resolveTitle(this._config, this.hass);
    if (!title) return nothing;
    return html`<div class="title">${title}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TYPE]: EvChargingCard;
  }
}
