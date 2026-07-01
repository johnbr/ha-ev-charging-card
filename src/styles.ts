import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    padding: 4px 16px 6px;
  }

  .title {
    font-size: var(--ha-card-header-font-size, 1.1em);
    font-weight: 500;
    color: var(--success-color, #43a047);
    margin-bottom: 0;
    text-align: center;
  }

  .row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .bolt {
    width: 28px;
    height: 28px;
    flex: 0 0 auto;
    color: var(--disabled-text-color);
    transition: color 200ms ease;
  }

  .bolt svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .bolt[data-active='true'] {
    color: var(--warning-color, #ffa500);
    animation: bolt-pulse 1.2s ease-in-out infinite;
    filter: drop-shadow(0 0 4px var(--warning-color, #ffa500));
  }

  .bar-block {
    flex: 1 1 auto;
    min-width: 0;
    display: flex;
    flex-direction: column;
  }

  .bar {
    position: relative;
    width: 100%;
    height: 32px;
    border-radius: 16px;
    background: var(--secondary-background-color);
    overflow: hidden;
  }

  .fill {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--primary-color);
    border-radius: 16px 0 0 16px;
    transition: width 400ms ease;
    overflow: hidden;
  }

  .fill[data-full='true'] {
    border-radius: 16px;
  }

  .shimmer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.35) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
  }

  .shimmer[data-active='true'] {
    animation: shimmer-sweep 2s linear infinite;
  }

  .metrics {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    column-gap: 8px;
    padding: 0 12px;
    pointer-events: none;
    z-index: 2;
  }

  .metric {
    font-size: 0.85em;
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.9), 0 1px 2px rgba(0, 0, 0, 0.6);
    white-space: nowrap;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .metric-left {
    grid-column: 1;
    justify-self: start;
  }

  .metric-center {
    grid-column: 2;
    justify-self: center;
  }

  .metric-right {
    grid-column: 3;
    justify-self: end;
  }

  .soc-marker,
  .limit-marker {
    position: absolute;
    top: -2px;
    bottom: -2px;
    width: 2px;
    pointer-events: none;
    z-index: 3;
    transform: translateX(-50%);
  }

  .soc-marker {
    background: var(--primary-text-color);
    opacity: 0.85;
  }

  .limit-marker {
    background: var(--accent-color, #ff9800);
  }

  .limit-marker::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -3px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid var(--accent-color, #ff9800);
  }

  .above-bar,
  .below-bar {
    position: relative;
    min-height: 1.2em;
    font-size: 0.8em;
  }

  .above-bar {
    margin-bottom: 2px;
  }

  .below-bar {
    margin-top: 4px;
  }

  .above-bar > div,
  .below-bar > div {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    white-space: nowrap;
    line-height: 1.2em;
  }

  .limit-above {
    color: var(--accent-color, #ff9800);
    font-weight: 500;
  }

  .soc-below {
    color: var(--primary-text-color);
    font-weight: 600;
  }


  hui-warning {
    display: block;
  }

  @keyframes bolt-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }

  @keyframes shimmer-sweep {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .bolt[data-active='true'] {
      animation: none;
    }
    .shimmer[data-active='true'] {
      animation: none;
      opacity: 0;
    }
  }
`;
