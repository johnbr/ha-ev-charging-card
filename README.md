# EV Charging Card

A compact, single-row Home Assistant Lovelace card for visualizing an active EV charging session.

- Animated lightning bolt + shimmering progress bar when charging.
- Metrics overlaid on the bar: SoC %, kW, kWh added, ETA.
- Charge-limit marker on the bar.
- Dynamic title that distinguishes **Charging** (home AC), **Supercharging** (Tesla Supercharger), and **DC Fast Charging** (other) via a configurable entity.
- Integration-agnostic — works with any EV/charger entities you have.

## Install

### HACS

1. HACS → Frontend → ⋮ → Custom repositories → add this repo as a **Lovelace** category.
2. Install **EV Charging Card**.
3. Add the card from the visual picker (HACS adds the resource for you).

### Manual

1. Download `ev-charging-card.js` from the latest [release](https://github.com/johnbr/ha-ev-charging-card/releases).
2. Drop it into `/config/www/community/ha-ev-charging-card/`.
3. Settings → Dashboards → ⋮ → Resources → add `/hacsfiles/ha-ev-charging-card/ev-charging-card.js` as **JavaScript Module**.

## Configuration

Use the visual editor, or paste YAML:

```yaml
type: custom:ev-charging-card
state_of_charge: sensor.car_battery_level
charge_limit:    sensor.car_charge_limit
power:           sensor.car_charging_power
energy_added:    sensor.car_charging_energy_added
time_remaining:  sensor.car_time_to_full
charging_state:  binary_sensor.car_charging
charging_type:   sensor.car_fast_charger_type
charging_type_map:
  Supercharger: Supercharging
  CHAdeMO: DC Fast Charging
  Combo: DC Fast Charging
  GB: DC Fast Charging
  AC: Charging
  default: Charging
```

| Option | Type | Required | Description |
|---|---|---|---|
| `state_of_charge` | entity | yes | Sensor with current battery % |
| `charge_limit` | entity | no | Sensor with target SoC % — drawn as a marker on the bar |
| `power` | entity | no | Charging power sensor (kW; W also accepted) |
| `energy_added` | entity | no | Energy added this session (kWh; Wh accepted) |
| `time_remaining` | entity | no | Minutes to full, hours, or `H:MM` string |
| `charging_state` | entity | no | Binary/enum sensor — `on`, `true`, `charging`, or `starting` shows active visuals |
| `charging_type` | entity | no | State of this entity is looked up in `charging_type_map` to set the title |
| `charging_type_map` | object | no | Map of entity state → title. `default` is the fallback |
| `title_override` | string | no | If set, used verbatim as the title |
| `name` | string | no | Alias for `title_override` |

The `kW`, `kWh`, and ETA metrics are only shown while charging. The card never disappears when entities are unavailable — it falls back to showing just the SoC with the bar at rest.

## Example — Tesla via [`tesla_telemetry`](https://github.com/johnbr/ha-tesla-fleet-telemetry)

```yaml
type: custom:ev-charging-card
state_of_charge: sensor.roadrunner_battery_level_telemetry
charge_limit:    sensor.roadrunner_charge_limit_telemetry
power:           sensor.roadrunner_dc_charging_power_telemetry
energy_added:    sensor.roadrunner_dc_charging_energy_added_telemetry
time_remaining:  sensor.roadrunner_time_to_full_charge_telemetry
charging_state:  binary_sensor.roadrunner_charging_active_telemetry
charging_type:   sensor.roadrunner_fast_charger_type_telemetry
```

The default `charging_type_map` already covers Tesla's `FastChargerType` states (`Supercharger`, `CHAdeMO`, `Combo`, `GB`, `AC`).

## Example — non-Tesla (helpers + OpenEVSE)

```yaml
type: custom:ev-charging-card
state_of_charge: sensor.leaf_soc
power:           sensor.openevse_charging_power
energy_added:    sensor.openevse_session_energy
charging_state:  binary_sensor.openevse_charging
title_override:  Charging
```

## Accessibility

The progress bar has appropriate ARIA semantics. All animations are disabled when the user has `prefers-reduced-motion: reduce` set.

## License

[MIT](LICENSE)
