class DroneDeliveryApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          border-radius: 15px;
          color: var(--color-text-main, #eee);
          font-family: var(--font-body, sans-serif);
        }
        .container {
            text-align: center;
        }
        h3 {
            font-family: var(--font-heading, sans-serif);
            color: var(--color-primary, #6c63ff);
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1rem;
            opacity: 0.8;
        }
      </style>
      <div class="container">
        <h3>Drone Delivery Simulation</h3>
        <p>Interactive map coming soon!</p>
      </div>
    `;
  }
}

customElements.define('drone-delivery-app', DroneDeliveryApp);
