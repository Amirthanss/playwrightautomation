const {test, expect} = require('@playwright/test');
const {POManager} = require('../tests/PageObjects/POManager');

test('LoginTestCase', async({page})=>{
    const po = new POManager(page);
    const screen1 = po.getloginpage();
    await screen1.goto();
    await screen1.Login();

    const screen2 = po.getproductnames();
    await screen2.ProductNameList();
 

});