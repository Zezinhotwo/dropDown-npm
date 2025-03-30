export default class DropdownMenu {
    constructor(menuSelector, menuItem) {
        this.menus = document.querySelectorAll(menuSelector);
        this.items = document.querySelectorAll(menuItem);
        if (this.menus.length === 0 || this.items.length === 0) {
            throw new Error(`Elemento "${menuSelector}" ou "${menuItem}" não encontrado!`);
        }
        this.init();
    }
    init() {
        this.addEvents();
    }
    addEvents() {
        this.menus.forEach((menu) => {
            menu.addEventListener("mouseenter", () => this.toggleItem(menu, true));
            menu.addEventListener("mouseleave", () => this.toggleItem(menu, false));
        });
    }
    toggleItem(menu, show) {
        const dropdown = menu.querySelector(".dropdown-hide, .dropdown-active");
        if (dropdown) {
            if (show) {
                dropdown.classList.add("dropdown-active");
                dropdown.classList.remove("dropdown-hide");
            }
            else {
                dropdown.classList.add("dropdown-hide");
                dropdown.classList.remove("dropdown-active");
            }
        }
    }
}
