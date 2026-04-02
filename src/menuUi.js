export class MenuUI {
  constructor(container, menuList) {
    this.container = container;
    this.menuList = menuList;
  }
  renderMenu() {
    this.container.innerHTML = ``;
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("food-container");
    this.menuList.forEach((item) => {
      const cards = this.createCard(item);
      menuContainer.appendChild(cards);
    });
    this.container.appendChild(menuContainer);
  }
  createCard(item) {
    const card = document.createElement("div");
    card.classList.add("food-card");
    card.dataset.type = item.type;
    card.innerHTML = `<h4>${item.title}</h4>
          <img
            src="${item.img}"
            alt="${item.title}"
            width="192px"
            height="120px"
          />
          <span>${item.price}</span>
    `;
    return card;
  }
}
