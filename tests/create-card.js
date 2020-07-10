import LoginPage from '../pages/login/LoginPage';
import HeaderPage from '../pages/home/HeaderPage';
import CreateBoardForm from '../pages/board/CreateBoardForm';
import CreateListForm from '../pages/list/CreateListForm';
import ListPage from '../pages/list/ListPage';
import CreateCardForm from '../pages/card/CreateCardForm';
import CardPage from '../pages/card/CardPage';
import MenuBoard from '../pages/board/MenuBoard';
import MenuMoreBoard from '../pages/board/MenuMoreBoard';
import ClosedBoardPage from '../pages/board/ClosedBoardPage';
import Environment from '../config/Environment';

fixture('Card')
    .page(Environment.baseUrl)
    .beforeEach(async t => {
        await LoginPage.setCredentials('user1');
        await HeaderPage.goToCreateMenu();
        await HeaderPage.goToCreateBoardForm();
        await CreateBoardForm.setBoardName('LightBoard');
        await CreateBoardForm.selectPersonalBoard();
        await CreateBoardForm.submit();
        await CreateListForm.setListName('Done');
        await CreateListForm.submit();
    }).afterEach(async t => {
        await MenuBoard.goToMoreMenu();
        await MenuMoreBoard.selectCloseBoard();
        await ClosedBoardPage.permanentlyDeleteBoard();
    });

test('Create a Card', async t => {
    await ListPage.createCardButton();
    await CreateCardForm.setCardName('testing');
    await CreateCardForm.submit();
    await CardPage.verifyCardName('testing');    
});