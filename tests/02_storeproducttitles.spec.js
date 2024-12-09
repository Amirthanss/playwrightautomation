const {test, expect} = require('@playwright/test');

test('ProducttittleList', async({page})=>{



    //await page.goto("https://demoblaze.com/index.htm");
    await page.waitForSelector(".hrefch");
    const products = await page.$$(".hrefch");

    for(const product of products){
        const productname = await product.textContent();
        console.log(productname);
    }

})