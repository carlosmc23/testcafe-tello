import { Selector, t } from 'testcafe';

class ListPage {
    
    get listNames(){
        return Selector('h2.list-header-name-assist');
    }

    get addCardButton(){
        return Selector('.js-add-a-card');
    }

    async verifyListName(listName) { 
        await t.expect(this.listNames().innerText).eql(listName);
    }

    async createCardButton(){
        await t.click(this.addCardButton);
    }


}

export default new ListPage();