export const CARD_VERSION = '0.1.0';

export const CARD_TYPE = 'ev-charging-card';
export const EDITOR_TYPE = 'ev-charging-card-editor';

export const DEFAULT_TITLE_MAP: Record<string, string> = {
  Supercharger: 'Supercharging',
  Fast: 'Supercharging',
  CHAdeMO: 'DC Fast Charging',
  Combo: 'DC Fast Charging',
  GB: 'DC Fast Charging',
  AC: 'Charging',
  default: 'Charging',
};

export const DEFAULT_IDLE_TITLE = 'Not Plugged In';

export const ACTIVE_CHARGING_STATES = new Set([
  'on',
  'true',
  'charging',
  'starting',
]);

export const UNAVAILABLE_STATES = new Set(['unavailable', 'unknown', 'none', '']);
