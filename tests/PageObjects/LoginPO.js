class LoginPageObjects{
    constructor(page){
        this.page = page;
        this.loginLink = page.locator("#login2");
        this.username = page.locator("#loginusername");
        this.password = page.locator("#loginpassword");
        this.loginbtn = page.locator("//button[@onclick='logIn()']");

    }

    async goto(){
        await this.page.goto("https://demoblaze.com/");
    }

    async Login(){

        await this.loginLink.click();
        
        await this.username.fill("pavanol");
        await this.password.fill("test@123");
        await this.loginbtn.click();
    }
}

module.exports = {LoginPageObjects};