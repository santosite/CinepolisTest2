export class Page{
    constructor() {
        this.url = 'http://www.cinepolis.com';
        this.urlMovies = "http://www.cinepolis.com/pelicula/"
    }

    open(path){
        browser.url(this.url+path);
    }
    openMovie(path){
        browser.url(this.urlMovies+path);
        browser.waitForVisible('//*[@id="synopsis"]/div[2]/div/div[1]/div[3]/div/div/time',5000);
        let liga1 = browser.getText('//*[@id="synopsis"]/div[2]/div/div[1]/div[3]/div/div/time');
        return liga1;
    }
    maximize() {
        let windowHandle = browser.windowHandle();
        browser.windowHandleMaximize([windowHandle]);
    }
    click(elem){
        browser.click(elem)
    }
    toDate(dayStr, format){
        var now = new Date();
        if(format == "h:m"){
            now.setHours(dayStr.substr(0,dayStr.indexOf(":")));
            now.setMinutes(dayStr.substr(dayStr.indexOf(":")+1));
            return now;
        }else{
            return '';
        }
    }
    assertHour(hour, start, end){
        if(hour<start||hour>end){
            console.log("Movie at: "+hour+" Out of range");
        }else{
            console.log("Movie at: "+ hour + " Inside the range");
        }
    }

    assertValidation(movie, hour, start, end){
        if(hour<start || hour >end){
            console.log(hour)
            throw message || "Failed";
        }else{
            console.log("Movie: "+movie+ " at "+hour+" OK");
        }
    }

}