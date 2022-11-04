class obsidianPoELocators {
    constructor() {
      this.panelTitle_PoE = "h1.panel__title";
    }
  }
  
  export default class ObsidianPoE {
    constructor() {
      this.locators = new obsidianPoELocators();
    }
  
    getPanelTitlePoE() {
      return cy.get(this.locators.panelTitle_PoE);
    }
  }
  