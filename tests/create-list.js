import LoginPage from '../pages/login/LoginPage';
import HeaderPage from '../pages/home/HeaderPage';
import CreateBoardForm from '../pages/board/CreateBoardForm';
import CreateListForm from '../pages/list/CreateListForm';
import ListPage from '../pages/list/ListPage';
import MenuBoard from '../pages/board/MenuBoard';
import MenuMoreBoard from '../pages/board/MenuMoreBoard';
import ClosedBoardPage from '../pages/board/ClosedBoardPage';
import Environment from '../config/Environment';

fixture('List')
    .page(Environment.baseUrl)
    .beforeEach(async t => {
        await LoginPage.setCredentials('user1');
        await HeaderPage.goToCreateMenu();
        await HeaderPage.goToCreateBoardForm();
        await CreateBoardForm.setBoardName('SupremeBoard');
        await CreateBoardForm.selectPersonalBoard();
        await CreateBoardForm.submit();
        await HeaderPage.goToHouse();
    }).afterEach(async t => {
        await MenuBoard.goToMoreMenu();
        await MenuMoreBoard.selectCloseBoard();
        await ClosedBoardPage.permanentlyDeleteBoard();
    });

test('Create a list', async t => {
    await HeaderPage.goToBoardsMenu();
    await HeaderPage.goToPersonalBoard('SupremeBoard');
    await CreateListForm.addListButton();
    await CreateListForm.setListName('Review');
    await CreateListForm.submit();
    await ListPage.verifyListName('Review');
});
