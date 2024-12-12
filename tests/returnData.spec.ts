import { test, expect } from '@playwright/test';
import { ReturnData } from '../pages/returnData';

test('3. return data from HTML table', async ({ page }) => {
    const data = new ReturnData(page);
    await data.navegatTo();

    const textsFromNthColumn: string[] = [];
    const rowCount = await page.locator('#mytable').locator('tr').count();

    for (let i = 1; i < rowCount; i++) {

        let dataTable: string;
        let dataColumn: string;
        dataTable = await page.locator('#mytable').locator('tr').nth(i).locator('td').nth(0).innerText(); //Alan
        dataColumn = await page.locator('#mytable').locator('tr').nth(i).locator('td').nth(1).innerText(); //12
        console.log(`Linha ${i} - ${dataTable} ${dataColumn}`);
        textsFromNthColumn.push(dataTable);
        textsFromNthColumn.push(dataColumn);

    }
    expect((textsFromNthColumn.length / 2)).toEqual(rowCount - 1);

});

