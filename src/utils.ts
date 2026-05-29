import type { HomeAssistant } from 'custom-card-helpers';
import {
  ACTIVE_CHARGING_STATES,
  DEFAULT_IDLE_TITLE,
  DEFAULT_TITLE_MAP,
  UNAVAILABLE_STATES,
} from './const';
import type { EvChargingCardConfig } from './types';

export interface EntityRead {
  available: boolean;
  state: string;
  numeric: number | null;
  unit?: string;
}

export function readEntity(
  hass: HomeAssistant | undefined,
  entityId: string | undefined,
): EntityRead | null {
  if (!hass || !entityId) return null;
  const s = hass.states[entityId];
  if (!s) return null;
  const raw = s.state;
  const available = !UNAVAILABLE_STATES.has(String(raw).toLowerCase());
  const numeric = available ? parseFloat(raw) : NaN;
  return {
    available,
    state: raw,
    numeric: Number.isFinite(numeric) ? numeric : null,
    unit: s.attributes?.unit_of_measurement,
  };
}

export function clampPercent(n: number | null | undefined): number {
  if (n == null || !Number.isFinite(n)) return 0;
  if (n < 0) return 0;
  if (n > 100) return 100;
  return n;
}

export function isCharging(read: EntityRead | null): boolean {
  if (!read || !read.available) return false;
  return ACTIVE_CHARGING_STATES.has(String(read.state).toLowerCase());
}

export function formatPower(read: EntityRead | null): string | null {
  if (!read || !read.available || read.numeric == null) return null;
  const unit = (read.unit ?? 'kW').toString();
  const value = unit.toLowerCase() === 'w' ? read.numeric / 1000 : read.numeric;
  const decimals = Math.abs(value) >= 10 ? 0 : 1;
  return `${value.toFixed(decimals)} kW`;
}

export function formatEnergy(read: EntityRead | null): string | null {
  if (!read || !read.available || read.numeric == null) return null;
  const unit = (read.unit ?? 'kWh').toString();
  const value = unit.toLowerCase() === 'wh' ? read.numeric / 1000 : read.numeric;
  return `${value.toFixed(1)} kWh`;
}

export function formatDuration(read: EntityRead | null): string | null {
  if (!read || !read.available) return null;
  const minutes = parseMinutes(read);
  if (minutes == null || minutes <= 0) return null;
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

function parseMinutes(read: EntityRead): number | null {
  if (read.numeric != null) {
    const unit = (read.unit ?? '').toString().toLowerCase();
    if (unit === 'h' || unit === 'hr' || unit === 'hour' || unit === 'hours') {
      return read.numeric * 60;
    }
    if (unit === 's' || unit === 'sec' || unit === 'seconds') {
      return read.numeric / 60;
    }
    return read.numeric;
  }
  const m = /^(\d+):(\d{2})(?::(\d{2}))?$/.exec(String(read.state).trim());
  if (m) {
    const hours = parseInt(m[1], 10);
    const minutes = parseInt(m[2], 10);
    return hours * 60 + minutes;
  }
  return null;
}

export function resolveTitle(
  config: EvChargingCardConfig,
  hass: HomeAssistant | undefined,
  active: boolean,
): string {
  if (config.title_override) return config.title_override;
  if (!active) return config.idle_title ?? DEFAULT_IDLE_TITLE;
  const map = config.charging_type_map ?? DEFAULT_TITLE_MAP;
  const fallback = map.default ?? DEFAULT_TITLE_MAP.default ?? 'Charging';
  if (!config.charging_type) return fallback;
  const read = readEntity(hass, config.charging_type);
  if (!read || !read.available) return fallback;
  return map[read.state] ?? fallback;
}
