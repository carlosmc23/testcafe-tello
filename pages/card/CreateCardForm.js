import {Selector, t} from 'testcafe';

class CreateCardForm{

    constructor(){
        this.addCardName = Selector('.list-card-composer-textarea');
        this.addCardButton = Selector('.primary.confirm');
    }


    async setCardName(name){
        await t.typeText(this.addCardName, name);
    }

    async submit(){
        await t.click(this.addCardButton);
    }
}

export default new CreateCardForm();