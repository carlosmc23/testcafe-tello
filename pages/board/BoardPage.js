import { Selector, t } from 'testcafe';

class BoardPage {

    constructor(){
        this.boardName = Selector('span[class*="js-board-editing-target"]');
        this.addListButton = Selector('div.js-add-list span.icon-add');
        this.editBoardNameTextBox = Selector('div.board-header-btn.is-editing');
    }

    async verifyBoardName(name){
        await t.expect(this.boardName().innerText).eql(name);
    }

    async createListButton(){
        await t.click(addListButton);
    }

    async editBoardName(name){
        await t
        .click(this.boardName)
        .typeText(this.editBoardNameTextBox, name)
        .pressKey('enter');
    }

}

export default new BoardPage();