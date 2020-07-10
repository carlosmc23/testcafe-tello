import { Selector, t } from 'testcafe';

class ClosedBoardPage {

    constructor() {
        this.deleteBoardButton = Selector('a.quiet.js-delete');
        this.confirmDeleteButton = Selector('input.js-confirm.full.negate');
    }

    async permanentlyDeleteBoard() {
        await t
            .click(this.deleteBoardButton)
            .click(this.confirmDeleteButton);
    }
}

export default new ClosedBoardPage();