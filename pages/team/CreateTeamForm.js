import { Selector, t } from 'testcafe';

class CreateTeamForm {

    constructor() {
        this.teamNameTextBox = Selector('input[data-test-id*="create-team-name"]');
        this.teamTypeDropDown = Selector('#teamTypeSelect');
        this.teamTypeEducation = Selector('div[data-test-id*="team-type-input-education"]');
        this.createTeamButton = Selector('button[data-test-id*="team-submit-button"]');
        this.addMembersLaterButton = Selector('a[data-test-id="show-later-button"]');
    }

    async setTeamName(teamName){
        await t.typeText(this.teamNameTextBox, teamName);
    }

    async setTeamType(){
        await t
            .click(this.teamTypeDropDown)
            .click(this.teamTypeEducation);
    }

    async submit(){
        await t.click(this.createTeamButton);
    }

    async addMembersLater(){
        await t.click(this.addMembersLaterButton);
    }
}

export default new CreateTeamForm();