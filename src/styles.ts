import { css } from 'lit';

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    padding: 12px 16px;
  }

  .title {
    font-size: var(--ha-card-header-font-size, 1.1em);
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 8px;
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

  .bar {
    position: relative;
    flex: 1 1 auto;
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85em;
    font-weight: 500;
    color: var(--primary-text-color);
    mix-blend-mode: difference;
    pointer-events: none;
    padding: 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .limit-marker {
    position: absolute;
    top: -2px;
    bottom: -2px;
    width: 2px;
    background: var(--accent-color, #ff9800);
    pointer-events: none;
    z-index: 1;
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
