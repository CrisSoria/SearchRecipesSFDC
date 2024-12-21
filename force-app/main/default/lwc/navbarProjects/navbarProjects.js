import { api, LightningElement } from 'lwc';

export default class NavbarProjects extends LightningElement {
  @api projectName;
  @api primaryColor;
  @api buttonBgColor;
  @api buttonTextColor;
  portfolioUrl = 'https://crissoria.netlify.app/';
  logoUrl = 'https://i.ibb.co/NLGR8pT/Logo.png';

  handlePortfolioClick(event) {
    // Prevenir comportamiento por defecto si se necesita lógica adicional
    // event.preventDefault();
  }

  renderedCallback() {
    this.applyTheme();
  }

  applyTheme() {
    const style = document.createElement('style');
    style.innerText = `
        .project-name {
            color: ${this.primaryColor} !important;
        }
        .custom-button {
            --slds-c-button-brand-color-background: ${this.buttonBgColor} !important;
            --slds-c-button-brand-color-background-hover: ${this.buttonBgColor} !important;
            --slds-c-button-brand-color-border: ${this.buttonBgColor} !important;
            --slds-c-button-brand-color-border-hover: ${this.buttonBgColor} !important;
            --slds-c-button-brand-text-color: ${this.buttonTextColor} !important;
            --slds-c-button-brand-text-color-hover: ${this.buttonTextColor} !important;
        }
    `;
    this.template.querySelector('.navbar-container').appendChild(style);
  }
}