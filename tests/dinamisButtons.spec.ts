import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { DinamicButtons } from '../pages/dinamicButtons';

test('2. click in the dinamic buttons', async({page})=>{
    const dinamic = new DinamicButtons(page);
    await dinamic.navegatTo();
    await dinamic.clickStartButton();
    await dinamic.clickFirstButton();
    await dinamic.clickSecondButton();
    await dinamic.clickThirdButton();

    expect((dinamic.checkMessage)).toBeTruthy

})