export default class DropdownMenu {
    constructor(menuSelector, menuItem) {
        const menu = document.querySelector(menuSelector);
        const item = document.querySelector(menuItem);
        if (!menu || !item) {
            throw new Error(`Elemento "${menuSelector}" ou "${menuItem}" não encontrado!`);
        }
        this.menu = menu;
        this.items = item;
        this.init();
    }
    init() {
        this.addEvents();
    }
    addEvents() {
        if (!this.items)
            return; // Evita erro se `this.items` não existir
        this.menu.addEventListener("mouseenter", () => this.toggleItem(true));
        this.menu.addEventListener("mouseleave", () => this.toggleItem(false));
    }
    toggleItem(show) {
        if (this.items) {
            this.items.classList.toggle("dropdown-active", show);
            this.items.classList.toggle("dropdown-hide", !show);
        }
    }
}
