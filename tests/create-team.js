import LoginPage from '../pages/login/LoginPage';
import HeaderPage from '../pages/home/HeaderPage';
import CreateTeamForm from '../pages/team/CreateTeamForm';
import TeamPage from '../pages/team/TeamPage';
import TeamSettings from '../pages/team/TeamSetting';
import Environment from '../config/Environment';

fixture('Team')
    .page(Environment.baseUrl)
    .beforeEach(async t => {
        await LoginPage.setCredentials('user1');
    }).afterEach(async t => {
        await TeamPage.goToSettings();
        await TeamSettings.deteleTeam();
    });

test('Create a team without members', async t => {
    await HeaderPage.goToCreateMenu();
    await HeaderPage.goToCreateTeamForm();
    await CreateTeamForm.setTeamName('Code');
    await CreateTeamForm.setTeamType();
    await CreateTeamForm.submit();
    await CreateTeamForm.addMembersLater();
    await TeamPage.verifyTeamName('Code');
});