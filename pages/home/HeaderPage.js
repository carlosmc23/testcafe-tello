import { Selector, t } from 'testcafe';

class HeaderPage {

    constructor(){
        this.createMenuButton = Selector("span[name = 'add']");
        this.createBoardButton = Selector("button[data-test-id*='create-board-button']");
        this.createTeamButton = Selector("button[data-test-id='header-create-team-button']");
        this. houseButton = Selector('span[name = "house"]');
        this.boardsMenuButton = Selector('button[data-test-id="header-boards-menu-button"]');
    }

    async goToCreateMenu() {
        await t
        .wait(12000)
        .click(this.createMenuButton);
    }

    async goToCreateBoardForm() {
        await t.click(this.createBoardButton);
    }

    async goToCreateTeamForm() {
        await t.click(this.createTeamButton);
    }

    async goToHouse(){
        await t.click(this.houseButton);
    }

    async goToBoardsMenu(){
        await t.click(this.boardsMenuButton);
    }

    async goToPersonalBoard(boardName){
        await t.click(Selector('a[title='+boardName+']'));
    }
}

export default new HeaderPage();
