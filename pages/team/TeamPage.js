import { Selector, t } from 'testcafe';

class TeamPage {

    constructor() {
        this.teamName = Selector('.tabbed-pane-header-details h1');
        this.settingsMenu = Selector('a.tabbed-pane-nav-item-button.js-org-account');
    }

    async verifyTeamName(name) {
        await t
        .wait(5000)
        .expect(this.teamName().innerText).eql(name);
    }

    async goToSettings() {
        await t.click(this.settingsMenu);
    }
}

export default new TeamPage();
