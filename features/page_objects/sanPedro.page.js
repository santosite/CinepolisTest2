import { Page } from './page';
class sPedroPage extends Page {

    changeTime(from, to){
        switch (from){
            case "24:00":  browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[1]');
                                break;
            case "10:00":  browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[2]');
                                break;
            case "11:00":  browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[3]');
                                break;
            case "12:00":  browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[4]');
                                break;
            case "13:00":   browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[5]');
                                break;
            case "14:00":   browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[6]');
                                break;
            case "15:00":   browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[7]');
                                break;    
            case "16:00":   browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[8]');
                                break;
            case "17:00":   browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[9]');
                                break;
            case "18:00":   browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[10]');
                                break;
            case "19:00":   browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[11]');
                                break;
            case "20:00":   browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[12]');
                                break;
            case "21:00":   browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[13]');
                                break;
            case "22:00":  browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[14]');
                                break;
            case "23:00":  browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[15]');
                                break;
            case "23:59":  browser.dragAndDrop('#slider-range > a:nth-child(2)','//*[@id="slider-range"]/span[16]');
                                break;
        }
        switch (to){
            case "24:00":  browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[1]');
                                break;
            case "10:00":  browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[2]');
                                break;
            case "11:00":  browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[3]');
                                break;
            case "12:00":  browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[4]');
                                break;
            case "13:00":   browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[5]');
                                break;
            case "14:00":   browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[6]');
                                break;
            case "15:00":   browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[7]');
                                break;    
            case "16:00":   browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[8]');
                                break;
            case "17:00":   browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[9]');
                                break;
            case "18:00":   browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[10]');
                                break;
            case "19:00":   browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[11]');
                                break;
            case "20:00":   browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[12]');
                                break;
            case "21:00":   browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[13]');
                                break;
            case "22:00":  browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[14]');
                                break;
            case "23:00":  browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[15]');
                                break;
            case "23:59":  browser.dragAndDrop('#slider-range > a:nth-child(3)','//*[@id="slider-range"]/span[16]');
                                break;
        } 
    }

    getFuncTime(from, to){
            let allHours = (browser.getText('//*/div/div/div[2]/time'));
            let functHours = [];
            allHours.forEach(element => {
                if(element!= ''){
                functHours.push(element);
                }
            });  
            let arr2 = [];
            functHours.forEach(element=>{
                arr2.push(super.toDate(element,"h:m"))
            });
            let start = super.toDate(from,"h:m");
            let end = super.toDate(to,"h:m");

            arr2.forEach(element => {
                super.assertHour(element,start,end);
            })
    }
    open(maximized = true) {
        super.open('');
        if(maximized) super.maximize();
    }
    click(elem){
        super.click(elem);
    }

}

export default new sPedroPage();
