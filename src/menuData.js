export class MenuData {
  static #foodMenu = [];
  constructor(title, img, type, price) {
    this.title = title;
    this.img = img;
    this.type = type;
    this.price = price;

    MenuData.#foodMenu.push(this);
  }

  static get allFood() {
    return MenuData.#foodMenu;
  }
}
