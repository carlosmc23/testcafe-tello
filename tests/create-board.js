import LoginPage from '../pages/login/LoginPage';
import HeaderPage from '../pages/home/HeaderPage';
import CreateBoardForm from '../pages/board/CreateBoardForm';
import BoardPage from '../pages/board/BoardPage';
import MenuBoard from '../pages/board/MenuBoard';
import MenuMoreBoard from '../pages/board/MenuMoreBoard';
import ClosedBoardPage from '../pages/board/ClosedBoardPage';
import Environment from '../config/Environment';
import {user1} from '../pages/login/Roles';

fixture('Board')
    .page(Environment.baseUrl)
    .beforeEach(async t => {
        //await t.useRole(user1);
        await LoginPage.setCredentials('user1');
    }).afterEach(async t => {
        await MenuBoard.goToMoreMenu();
        await MenuMoreBoard.selectCloseBoard();
        await ClosedBoardPage.permanentlyDeleteBoard();
    });

test('Create a personal board', async t => {
    await HeaderPage.goToCreateMenu();
    await HeaderPage.goToCreateBoardForm();
    await CreateBoardForm.setBoardName('testing with testcafe');
    await CreateBoardForm.selectPersonalBoard();
    await CreateBoardForm.submit();
    await BoardPage.verifyBoardName('testing with testcafe');
});
