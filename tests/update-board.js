import LoginPage from '../pages/login/LoginPage';
import HeaderPage from '../pages/home/HeaderPage';
import CreateBoardForm from '../pages/board/CreateBoardForm';
import MenuBoard from '../pages/board/MenuBoard';
import MenuMoreBoard from '../pages/board/MenuMoreBoard';
import ClosedBoardPage from '../pages/board/ClosedBoardPage';
import BoardPage from '../pages/board/BoardPage';
import Environment from '../config/Environment';

fixture('List')
    .page(Environment.baseUrl)
    .beforeEach(async t => {
        await LoginPage.setCredentials('user1');
        await HeaderPage.goToCreateMenu();
        await HeaderPage.goToCreateBoardForm();
        await CreateBoardForm.setBoardName('TestingBoard');
        await CreateBoardForm.selectPersonalBoard();
        await CreateBoardForm.submit();
        await HeaderPage.goToHouse();
    }).afterEach(async t => {
        await MenuBoard.goToMoreMenu();
        await MenuMoreBoard.selectCloseBoard();
        await ClosedBoardPage.permanentlyDeleteBoard();
    });

test('Update a board', async t => {
    await HeaderPage.goToBoardsMenu();
    await HeaderPage.goToPersonalBoard('TestingBoard');
    await BoardPage.editBoardName('MoviesBoard');
    await BoardPage.verifyBoardName('MoviesBoard');
});
