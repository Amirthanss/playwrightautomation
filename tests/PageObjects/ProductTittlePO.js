class productnames{
    constructor(page){
        this.page = page;
        this.products = page.locator(".hrefch");

    }

    async ProductNameList(){
        //await page.waitForSelector(this.products);
    const products = await this.page.$$(".hrefch");

    for(const product of products){
        const productname = await product.textContent();
        console.log(productname);
    }
    }
}

module.exports = {productnames};