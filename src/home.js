export class HomePage {
  constructor(container) {
    this.container = container;
  }
  renderHome() {
    this.container.innerHTML = `<div class="home-container">
      <div class="intro">
        <h1>Welcome to Zhi Cuisines</h1>
        <p>The finest dining experience in the west pacific</p>
        <p>Visit our menu to explore our delightful options.</p>
      </div>
      <div class="hours">
        <h4>we are open</h4>
        <ul class="timing">
          <li>Monday to Fridays: 8am - 10pm</li>
          <li>On the weekends:8am - 12pm</li>
          <li>Our drive-through :24/7</li>
        </ul>
      </div>
    </div>`;
  }
}
