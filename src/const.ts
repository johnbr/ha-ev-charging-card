export const CARD_VERSION = '0.2.0';

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

// Decimal places shown for the current state-of-charge label (e.g. 19.2%).
export const DEFAULT_SOC_PRECISION = 1;

export const ACTIVE_CHARGING_STATES = new Set([
  'on',
  'true',
  'charging',
  'starting',
]);

export const UNAVAILABLE_STATES = new Set(['unavailable', 'unknown', 'none', '']);
