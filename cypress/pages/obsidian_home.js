class obsidianHomeLocators {
    constructor() {
      this.gamePanel_PoE = "div:nth-of-type(6) > .games-panel__item.js-games-panel__item";
    }
  }
  
  export default class ObsidianHome {
    constructor() {
      this.locators = new obsidianHomeLocators();
    }
  
    getGamePanelPoE() {
      return cy.get(this.locators.gamePanel_PoE);
    }
  }
  