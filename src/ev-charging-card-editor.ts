import { LitElement, html, css, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';

import { EDITOR_TYPE } from './const';
import type { EvChargingCardConfig } from './types';

const SCHEMA = [
  { name: 'name', selector: { text: {} } },
  {
    name: 'state_of_charge',
    required: true,
    selector: { entity: { domain: ['sensor'], device_class: 'battery' } },
  },
  {
    name: 'charge_limit',
    selector: { entity: { domain: ['sensor', 'input_number', 'number'] } },
  },
  {
    name: 'power',
    selector: { entity: { domain: ['sensor'], device_class: 'power' } },
  },
  {
    name: 'energy_added',
    selector: { entity: { domain: ['sensor'], device_class: 'energy' } },
  },
  {
    name: 'time_remaining',
    selector: { entity: { domain: ['sensor'] } },
  },
  {
    name: 'charging_state',
    selector: { entity: { domain: ['binary_sensor', 'sensor'] } },
  },
  {
    name: 'charging_type',
    selector: { entity: { domain: ['sensor'] } },
  },
  { name: 'title_override', selector: { text: {} } },
] as const;

@customElement(EDITOR_TYPE)
export class EvChargingCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: EvChargingCardConfig;

  public setConfig(config: EvChargingCardConfig): void {
    this._config = config;
  }

  static override styles = css`
    :host { display: block; }
    ha-form { display: block; }
  `;

  protected override render(): TemplateResult | typeof nothing {
    if (!this.hass || !this._config) return nothing;

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _computeLabel = (s: { name: string }): string => {
    const labels: Record<string, string> = {
      name: 'Card title (optional override)',
      state_of_charge: 'State of charge (%)',
      charge_limit: 'Charge limit (%)',
      power: 'Charging power (kW)',
      energy_added: 'Energy added (kWh)',
      time_remaining: 'Time remaining',
      charging_state: 'Charging active sensor',
      charging_type: 'Charging type sensor (for dynamic title)',
      title_override: 'Title override (static)',
    };
    return labels[s.name] ?? s.name;
  };

  private _valueChanged(ev: CustomEvent): void {
    const detail = ev.detail as { value: EvChargingCardConfig };
    const event = new CustomEvent('config-changed', {
      detail: { config: detail.value },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TYPE]: EvChargingCardEditor;
  }
}
