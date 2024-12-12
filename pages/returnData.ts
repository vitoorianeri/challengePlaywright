import { expect, type Locator, type Page } from '@playwright/test';

export class ReturnData {

    readonly page: Page
    readonly table: Locator

    constructor(page: Page) {

        this.page = page
    }

    async navegatTo() {
        await this.page.goto('https://testpages.eviltester.com/styled/tag/table.html')
    }

}


