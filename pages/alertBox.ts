import { expect, type Locator, type Page } from '@playwright/test';


export class AlertBox {

    readonly page: Page
    readonly btnShowAlert: Locator
    readonly messageConfirmation: Locator
    readonly btnConfirmBox: Locator

    constructor(page: Page) {

        this.page = page
        this.btnShowAlert = page.locator('#alertexamples')
        this.messageConfirmation = page.locator('#alertexplanation')
        this.btnConfirmBox = page.locator('#confirmexample')

    }

    async navegatTo() {
        await this.page.goto('https://testpages.eviltester.com/styled/alerts/alert-test.html')
    }

    async clickShowAlert() {
        await this.btnShowAlert.isVisible;
        this.page.on('dialog', async dialog => {
            const messageDialog: string = 'I am an alert box!';
            expect((messageDialog == dialog.message())).toEqual
            await dialog.accept();
            const messageTriggered: string = 'You triggered and handled the alert dialog';
            const validateMessage: string = await this.messageConfirmation.innerText();
            expect((messageTriggered == validateMessage)).toEqual
        });
        await this.btnShowAlert.click();
    }

    async clickShowConfirm() {
        await this.btnConfirmBox.isVisible;
        this.page.on('dialog', async dialog => {
            const messageDialog: string = 'I am a confirm alert';
            expect((messageDialog == dialog.message())).toEqual
            await dialog.dismiss();
            const messageTriggered: string = 'You clicked Cancel, confirm returned false.';
            const validateMessage: string = await this.messageConfirmation.innerText();
            expect((messageTriggered == validateMessage)).toEqual
        });
        await this.btnConfirmBox.click();


    }

  


}    