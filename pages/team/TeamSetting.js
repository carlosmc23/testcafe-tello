import { Selector, t } from 'testcafe';

class TeamSettings {
    constructor() {
        this.deleteTeamButton = Selector('a.quiet-button span');
        this.deleteForeverButton = Selector('input.js-confirm.full.negate');
    }

    async deteleTeam() {
        await t
            .click(this.deleteTeamButton)
            .click(this.deleteForeverButton);
    }
}

export default new TeamSettings();
