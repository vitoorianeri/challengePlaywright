import { expect, type Locator, type Page } from '@playwright/test';

export class DinamicButtons{

    readonly page: Page
    readonly btnStart: Locator
    readonly btnOne: Locator
    readonly btnTwo: Locator
    readonly btnThree: Locator
    readonly btnMessage: Locator
    
    constructor(page: Page){

        this.page = page
        this.btnStart = page.locator('#button00')
        this.btnOne = page.locator('#button01')
        this.btnTwo = page.locator('#button02')
        this.btnThree = page.locator('#button03')
        this.btnMessage = page.locator('#buttonmessage')
    }

    async navegatTo(){
        await this.page.goto('https://testpages.eviltester.com/styled/dynamic-buttons-simple.html')
    }

    async clickStartButton(){
        await this.btnStart.click();
    }

    async clickFirstButton(){
        await this.btnOne.click();
    }

    async clickSecondButton(){
        await this.btnTwo.click();
    }

    async clickThirdButton(){
        await this.btnThree.click();
    }

    async checkMessage(){
        await this.btnMessage.isVisible
    }

}