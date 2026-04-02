export class Contacts {
  constructor(container) {
    this.container = container;
  }
  renderContacts() {
    this.container.innerHTML = `<div class="contacts">
      <p>
        <span class="bold">Find Us at the Heart of the City</span> Located in
        the serene corners of Victoria Island, Zhi Cuisines is where culinary
        art meets soul. Whether you're looking for an intimate dinner or a
        private corporate tasting, our doors are open to those who appreciate
        the finer details.
      </p>
      <div>
        <h4>Reservations & Inquiries:</h4>
        <ul>
          <li>+234 (0) 800-ZHI-FOOD</li>
          <li>dining@zhicuisines.com</li>
          <li>12 Admiralty Way, Lekki Phase 1, Lagos.</li>
        </ul>
      </div>
    </div>
    `;
  }
}
