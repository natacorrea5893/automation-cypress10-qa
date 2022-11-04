/// <reference types="cypress" />
import ObsidianHomePage from "../pages/obsidian_home.js";
import ObsidianPoE from "../pages/obsidian_PoE.js";

describe("Test de Página Obsidian Entertainment", () => {
  it("Verificar el panel del 6to juego: Pillars of Eternity", { tags: "@visual" }, () => {
    const obsidian_home = new ObsidianHomePage();
    const obsidian_PoE = new ObsidianPoE();

    cy.visit("https://www.obsidian.net/");

    obsidian_home.getGamePanelPoE().click();

    obsidian_PoE.getPanelTitlePoE().should('have.class', 'panel__title')
    .and('have.css', 'outline', 'rgb(244, 244, 244) none 0px');
  });
});
