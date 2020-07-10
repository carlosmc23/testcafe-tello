import { Selector, t } from 'testcafe';

class MenuBoard {
    
    constructor(){
        this.moreMenuButton = Selector ('a.board-menu-navigation-item-link.js-open-more');
    }

    async goToMoreMenu(){
        await t.click(this.moreMenuButton);
    }
}

export default new MenuBoard();