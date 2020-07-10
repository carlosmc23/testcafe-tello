import { Selector, t } from 'testcafe';

class MenuMoreBoard {

    constructor() {
        this.closeBoardButton = Selector('a.board-menu-navigation-item-link.js-close-board');
        this.confirmCloseBoard = Selector('input.js-confirm.full.negate');
    }

    async selectCloseBoard(){
        await t
        .click(this.closeBoardButton)
        .click(this.confirmCloseBoard);
    }
}

export default new MenuMoreBoard();