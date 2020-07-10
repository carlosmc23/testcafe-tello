import {Selector, t} from 'testcafe';

class CreateListForm{

    constructor(){
        this.addListName = Selector('input.list-name-input');
        this.addListButton = Selector('input.primary.mod-list-add-button');
    }

    async setListName(listName){
        await t.typeText(this.addListName, listName);
    }

    async submit(){
        await t.click(this.addListButton);
    }

}

export default new CreateListForm();