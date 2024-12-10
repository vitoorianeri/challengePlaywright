import { test, expect } from '@playwright/test';
import { RefreshPage } from '../pages/refresh';
import { chromium } from 'playwright';



test('click in the refresh button in the page and verify the counter changed', async({ page })=>{
    const refresh = new RefreshPage(page);
    await refresh.navegatTo();
    const initialRefreshCount = await refresh.getCounterNumber();
    await refresh.clickRefreshButton();
    const refreshedCount = await refresh.getCounterNumber();

    // const initialRefreshCount = await this.refresh();
    //     const refreshedCount = await this.getCounterNumber();

    if(initialRefreshCount !== refreshedCount) {
        console.log('The number of refresh was updated');
    } else {
        console.log("The number of refresh wasn't updated");
    }

    expect((initialRefreshCount !== refreshedCount)).toBe(true);
    
});




