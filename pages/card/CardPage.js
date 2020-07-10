import { Selector, t } from 'testcafe';

class CardPage {
    constructor(){
        this.cardName = Selector('.list-card-title.js-card-name');
    }

    async verifyCardName(name){
        await t.expect(this.cardName.innerText).eql(name);
    }
}

export default new CardPage();