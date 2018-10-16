import { Page } from './page';
class homePage extends Page {

    open(maximized = true) {
        super.open('');
        if(maximized) super.maximize();
    }
    click(elem){
        super.click(elem);
    }
}

export default new homePage();
