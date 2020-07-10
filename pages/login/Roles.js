import { Role } from 'testcafe';
import LoginPage from '../login/LoginPage';

export const user1 = Role('https://trello.com/login', async t => {
    await LoginPage.setCredentials('user1');   
});

const user2 = Role('https://trello.com/login', async t => {
    await LoginPage.setCredentials('user2');   
});