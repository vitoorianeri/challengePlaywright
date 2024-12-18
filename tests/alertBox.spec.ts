import { test, expect } from '@playwright/test';
import { AlertBox } from '../pages/alertBox';

test('4. Click in the pop-up events', async ({ page }) => {
    const alert = new AlertBox(page);
    await alert.navegatTo();
    await alert.configDialogPage();
    await alert.clickShowAlert();
    await alert.clickShowConfirm();
    await alert.clickPromptBox();

});

