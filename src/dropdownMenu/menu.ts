export default class DropdownMenu {
  private menus: NodeListOf<HTMLElement>;
  private items: NodeListOf<HTMLElement>;

  constructor(menuSelector: string, menuItem: string) {
    this.menus = document.querySelectorAll(menuSelector);
    this.items = document.querySelectorAll(menuItem);

    if (this.menus.length === 0 || this.items.length === 0) {
      throw new Error(
        `Elemento "${menuSelector}" ou "${menuItem}" não encontrado!`
      );
    }

    this.init();
  }

  private init(): void {
    this.addEvents();
  }

  private addEvents(): void {
    this.menus.forEach((menu) => {
      menu.addEventListener("mouseenter", () => this.toggleItem(menu, true));
      menu.addEventListener("mouseleave", () => this.toggleItem(menu, false));
    });
  }

  private toggleItem(menu: HTMLElement, show: boolean): void {
    const dropdown = menu.querySelector(".dropdown-hide, .dropdown-active") as HTMLElement;
    if (dropdown) {
      if (show) {
        dropdown.classList.add("dropdown-active");
        dropdown.classList.remove("dropdown-hide");
      } else {
        dropdown.classList.add("dropdown-hide");
        dropdown.classList.remove("dropdown-active");
      }
    }
  }
}
