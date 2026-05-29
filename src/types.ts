import type { LovelaceCardConfig } from 'custom-card-helpers';

export interface EvChargingCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;

  state_of_charge: string;
  charge_limit?: string;
  power?: string;
  energy_added?: string;
  time_remaining?: string;
  charging_state?: string;
  charging_type?: string;

  charging_type_map?: Record<string, string>;
  title_override?: string;
}
