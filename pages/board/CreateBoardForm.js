import { Selector, t } from 'testcafe';

class CreateBoardForm {

    constructor() {
        this.boardNameTextBox = Selector('input[data-test-id*="create-board-title"]');
        this.createBoardButton = Selector('button[data-test-id*="create-board-submit"]');
        this.selectTeamDropDown = Selector('input[data-test-id*="create-board-title"] + button');
        this.selectNoTeamOption = Selector('.atlaskit-portal button > span').withExactText('No team');
    }

    async setBoardName(boardName) {
        await t.typeText(this.boardNameTextBox, boardName);
    }

    async submit() {
        await t.click(this.createBoardButton);
    }

    async selectPersonalBoard(){
        await t
            .click(this.selectTeamDropDown)
            .click(this.selectNoTeamOption);
    }
}

export default new CreateBoardForm();