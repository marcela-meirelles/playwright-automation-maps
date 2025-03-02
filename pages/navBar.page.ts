import { Page, Locator } from '@playwright/test';

class NavBar {
    readonly page: Page;
    readonly orderLookupButton: Locator;
    readonly supportButton: Locator;
    readonly languageButton: Locator;
    readonly currencyButton: Locator;
    readonly createAccountButton: Locator;
    readonly signinButton: Locator;
    readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderLookupButton = page.getByRole('button', { name: 'Order Lookup' });
        this.supportButton = page.getByRole('button', { name: 'Support' });
        this.languageButton = page.getByTestId('page-container-header-language-picker-toggle');
        this.currencyButton = page.getByTestId('page-container-header-currency-picker-toggle');
        this.createAccountButton = page.getByRole('link', { name: 'Create an Account' });
        this.signinButton = page.getByRole('link', { name: 'Sign In' });
        this.cartButton = page.getByRole('link', { name: 'Cart' });
    }

    async openOrderLookup() {
        await this.orderLookupButton.click();
    }

    async openSupport() {
        await this.supportButton.click();
    }

    async openLanguagePicker() {
        await this.languageButton.click();
    }

    async openCurrencyPicker() {
        await this.currencyButton.click();
    }

    async changeCurrency(currency: string) {
        // getByRole('button', { name: 'USD United States Dollar' })
        await this.openCurrencyPicker();
        const currencyOption = this.page.getByRole('button', { name: new RegExp(currency, 'i') });
        await currencyOption.click();
    }

    async openCreateAccount() {
        await this.createAccountButton.click();
    }

    async openSignin() {
        await this.signinButton.click();
    }

    async openCart() {
        await this.cartButton.click();
    }
}

export default NavBar;