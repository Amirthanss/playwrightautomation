const {LoginPageObjects} = require('../PageObjects/LoginPO');
const{productnames} = require('../PageObjects/ProductTittlePO');

class POManager{
    constructor(page){
        this.page = page;
        this.loginobj = new LoginPageObjects(page);
        this.productnamesobj = new productnames(page);
        
    }

    getloginpage()
    {
        return this.loginobj;
    }

    getproductnames()
    {
        return this.productnamesobj;
    }
}

module.exports = {POManager};
