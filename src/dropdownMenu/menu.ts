export default class DropdownMenu {
  private menu: HTMLElement;
  private items: HTMLElement | null;

  constructor(menuSelector: string, menuItem: string) {
    const menu = document.querySelector(menuSelector) as HTMLElement;
    const item = document.querySelector(menuItem) as HTMLElement;

    if (!menu || !item) {
      throw new Error(
        `Elemento "${menuSelector}" ou "${menuItem}" não encontrado!`
      );
    }

    this.menu = menu;
    this.items = item;

    this.init();
  }

  private init(): void {
    this.addEvents();
  }

  private addEvents(): void {
    if (!this.items) return; // Evita erro se `this.items` não existir

    this.menu.addEventListener("mouseenter", () => this.toggleItem(true));
    this.menu.addEventListener("mouseleave", () => this.toggleItem(false));
  }

  private toggleItem(show: boolean): void {
    if (this.items) {
      this.items.classList.toggle("dropdown-active", show);
      this.items.classList.toggle("dropdown-hide", !show);
    }
  }
}
