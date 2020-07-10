import Env from './Environment.js'

export default class User{
    constructor(user){
        this.user = Env.getAccount(user);
    }

    getUsername(){
        return this.user.username;
    }

    getPassWord(){
        return this.user.password;
    }
}
