import { Page } from './page';
class moviesPage extends Page {
    getMovies(){
        
        let movies = browser.getText('//*[@id="carteleraCiudad"]/section[2]/div[5]/div/article/div//h3/a');
        let disMovies = [];
        movies.forEach(element => {
            if(element != ''){
                disMovies.push(element);
            }
        });
        return disMovies;
    }
    getLigas(disMovies){ 
        let ligas = [];
        disMovies.forEach(element =>{
            ligas.push(browser.getAttribute('//img[@alt="'+element+'"]/../../../div/header/span','data-moviekey'));
        })
        return ligas;
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
    getTimes(ligas, from, to){
        let start = super.toDate(from,"h:m");
        let end = super.toDate(to,"h:m");
        let horarios =[];
        let movieHor = [];
        let valHor = [];
        let singHor = [];
        let merged =[];
        ligas.forEach(element1=>{
            movieHor = super.openMovie(element1);   
            console.log("Movie: "+element1.toUpperCase()+" at "+ movieHor)       
        });
        ligas.forEach(elements=>{
            horarios.push(super.openMovie(elements)); 
        });
        horarios.forEach(element=>{
            singHor.push(element);
        });
        merged =[].concat.apply([],singHor);
        merged.forEach(element=>{
            valHor.push(super.toDate(element,"h:m"));
        });
        valHor.forEach(element =>{
            super.assertHour(element,start,end)
        });
    }
    open(maximized = true) {
        super.open('');
        if(maximized) super.maximize();
    }
    click(elem){
        super.click(elem);
    }

}

export default new moviesPage();
