//import homePage from '../page_objects/home.page';
import homePage from '../page_objects/home.page';
import sPedroPage from '../page_objects/sanPedro.page';
import moviesPage from '../page_objects/movie.page';


module.exports =  function() {
    this.Given(/^a client is on the homePage$/, function () {
        // Write code here that turns the phrase above into concrete actions
        homePage.open(true);
        let prueba = browser.waitForExist('//*[@id="takeover-close"]/img');
        if (prueba){
        homePage.click('//*[@id="takeover-close"]/img');
        }else{
            console.log("No functions");
        }
        browser.pause(2000)
        browser.selectByVisibleText('//*[@id="cmbCiudades"]','San Pedro');
        browser.selectByVisibleText('//*[@id="cmbComplejos"]','Cinépolis San Pedro');
        browser.pause(2000);
      });
    this.When(/^a client change hours beetwen "([^"]*)" and "([^"]*)"$/, function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        sPedroPage.changeTime(arg1,arg2);
        sPedroPage.getFuncTime(arg1,arg2);
        moviesPage.getMovies();
        let disMovies = moviesPage.getMovies();
        let ligas = moviesPage.getLigas(disMovies);
        moviesPage.getTimes(ligas,arg1,arg2);


        browser.pause(5000)

      });


}