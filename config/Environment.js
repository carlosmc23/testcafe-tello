import data from '../config.js';

class Environment {

    constructor() {
        this.baseUrl = data.baseUrl.toString();
        this.accounts = data.accounts;
    }

    getBaseUrl() {
        return this.baseUrl;
    }

    getAccount(user) {
        return this.accounts
            .filter(account => account.user.match(user)).shift();
    }

}

export default new Environment();
