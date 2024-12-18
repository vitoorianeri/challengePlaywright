import { expect, type Locator, type Page } from '@playwright/test';


export class AlertBox {

    readonly page: Page
    readonly btnShowAlert: Locator
    readonly messageShowAlert: Locator
    readonly messageConfirmation: Locator
    readonly btnConfirmBox: Locator
    readonly btnPromptBox: Locator
    readonly messageReturn: Locator

    constructor(page: Page) {

        this.page = page
        this.btnShowAlert = page.locator('#alertexamples');
        this.messageShowAlert = page.locator('#alertexplanation');
        this.messageConfirmation = page.locator('#confirmexplanation');
        this.btnConfirmBox = page.locator('#confirmexample');
        this.btnPromptBox = page.locator('#promptexample');
        this.messageReturn = page.locator('#promptexplanation');

    }

    async navegatTo() {
        await this.page.goto('https://testpages.eviltester.com/styled/alerts/alert-test.html')
    }

    async configDialogPage() {
        this.page.on('dialog', async dialog => {

            // Get dialog type
            const dialogType: string = dialog.type();

            if (dialogType == 'alert') { // b and c options

                const messageDialog: string = 'I am an alert box!';
                expect((messageDialog == dialog.message())).toEqual(true);

                await dialog.accept();

                const messageTriggered: string = 'You triggered and handled the alert dialog';

                this.messageShowAlert.isVisible();
                const validateMessage: string = await this.messageShowAlert.innerText();

                expect((messageTriggered == validateMessage)).toEqual(true);

            } else if (dialogType == 'confirm') { // e and f options

                const messageDialog: string = 'I am a confirm alert';
                expect((messageDialog == dialog.message())).toEqual(true);

                await dialog.dismiss();

                const messageTriggered: string = 'You clicked Cancel, confirm returned false.';

                this.messageConfirmation.isVisible();
                const validateMessage: string = await this.messageConfirmation.innerText();

                expect((messageTriggered == validateMessage)).toEqual(true);

            } else if (dialogType == 'prompt') { // h and i options

                const messageDialog: string = 'I prompt you';
                expect((messageDialog == dialog.message())).toEqual(true);

                await dialog.accept('Vitória Soares');

                const messageTriggered: string = "You clicked OK. 'prompt' returned Vitória Soares";

                this.messageReturn.isVisible();
                const validateMessage: string = await this.messageReturn.innerText();
                expect((messageTriggered == validateMessage)).toEqual(true);

            }
        });
    }

    async clickShowAlert() {
        await this.btnShowAlert.isVisible();
        await this.btnShowAlert.click();
    }

    async clickShowConfirm() {
        await this.btnConfirmBox.isVisible();
        await this.btnConfirmBox.click();
    }

    async clickPromptBox() {
        await this.btnPromptBox.isVisible();
        await this.btnPromptBox.click();
    }
}    