import { Selector, t } from 'testcafe';
import User from '../../config/User';

class LoginPage {

    constructor() {
        this.userTextField = Selector('#user');
        this.passwordTextField = Selector('#password');
        this.loginButton = Selector('#login');
        this.passwordEntry = Selector('#password-entry');
        this.loginSubmitbutton = Selector('#login-submit');
    }

    async setCredentials(userAccount) {
        const user = new User(userAccount)
        await t
            .typeText(this.userTextField, user.getUsername())
            .wait(2000);
        const passwordIsVisible = await this.passwordEntry().visible;
        if (!passwordIsVisible) {
            await t
                .click(this.loginButton)
                .typeText(this.passwordTextField, user.getPassWord())
                .click(this.loginSubmitbutton);
        } else {
            await t
                .typeText(this.passwordTextField, user.getPassWord())
                .click(this.loginButton);
        }


    }

    async submit() {
        await t.click(this.loginButton);
    }
}
export default new LoginPage();
