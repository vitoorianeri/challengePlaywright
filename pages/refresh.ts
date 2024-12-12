import { expect, type Locator, type Page } from '@playwright/test';

export class RefreshPage {

    readonly page: Page
    readonly btnRefresh: Locator
    readonly counterNumber: Locator

    constructor(page: Page) {

        this.page = page;
        this.btnRefresh = page.locator('#button')
        this.counterNumber = page.locator('//*[@id="embeddedrefreshdatevalue"]')
    }

    async navegatTo() {
        await this.page.goto('https://testpages.eviltester.com/styled/refresh')
    }

    async getCounterNumber() {
        return this.counterNumber.innerText();
    }

    async clickRefreshButton() {
        await this.btnRefresh.click();
    }

}

