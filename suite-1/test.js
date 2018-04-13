'use strict';

before('Opening EPAM site', function () {
    driver.get('https://www.epam.com/careers');
    return driver.sleep(4000);
});

describe('Smoke suite', function () {
    const commonParent = '.section--hide-on-mobile ';
    let keyWordOrIDInput = driver.findElement(by.css(commonParent + '.job-search__input'));
    let findButton = driver.findElement(by.css(commonParent + '.job-search__submit'));

    xdescribe('Sanity check', function () {
        let epamLogo = driver.findElement(by.css('.header__logo'));
        it('EPAM carreer page should open, with a visible logo on the page', function () {
            return expect(epamLogo.isDisplayed()).to.eventually.be.true;
        });
    });

    xdescribe('All the main elements should be visible on Carreer page', function () {
        let keyWordOrIDInput = driver.findElement(by.css(commonParent + '.job-search__input'));
        let locationDropdown = driver.findElement(by.css(commonParent + '.select-box-selection'));
        let skillsSelector = driver.findElement(by.css(commonParent + '.multi-select-filter'));

        it('The "Keyword or job ID" input field should be visible', function () {
            return expect(keyWordOrIDInput.isDisplayed()).to.eventually.be.true;
        });

        it('The "Location" dropdown should be visible', function () {
            return expect(locationDropdown.isDisplayed()).to.eventually.be.true;
        });

        it('The "Skills" selector should be visible', function () {
            return expect(skillsSelector.isDisplayed()).to.eventually.be.true;
        });

        it('The "Find" button should be visible', function () {
            return expect(findButton.isDisplayed()).to.eventually.be.true;
        });
    });

    xdescribe('Checking a search result list', function () {
        const keyWord = "Test Automation Engineer";
        const searchResultHeadingLocator = '.search-result__heading';

        it('When the "Test Automation engineer" keyword is typed into the search field', function () {
            return keyWordOrIDInput.sendKeys(keyWord);
        });

        it('And the "Find" button is clicked', function () {
            findButton.click();
            driver.sleep(4000);
            return driver.wait(function () {
                return driver.findElement(by.css(searchResultHeadingLocator)).isDisplayed();
            });
        });

        it('Then the search result list heading should contain the searched searchterm', function () {
            return expect(driver.findElement(by.css(searchResultHeadingLocator)).getText()).to.eventually.include(keyWord.toUpperCase());
        });
    });




    xdescribe('Sort the results by date', function(){

        it("Sort by 'Date' is clicked", function(){
            driver.findElement(by.css("li[data-value = 'time']")).click();
            return driver.wait(function () {
                return driver.findElement(by.css(".search-result__heading")).isDisplayed();
            });
        });
    });




    xdescribe('Epam logo is clicked', function () {
        it("When the EPAM logo is clicked", function(){
            driver.findElement(by.css('.header__logo')).click();
            return driver.wait(function(){
                return driver.findElement(by.css(".background-video-ui")).isDisplayed().then(function(valtozo){
                    return valtozo;
                })
            });
        });

        it("Then the main page should appear", function(){
            return expect(driver.getCurrentUrl()).to.eventually.equal("https://www.epam.com/");
        });
       
    });


    xdescribe('Careers button is clicked', function () {

        it("When the Carreers button is clicked", function () {
            driver.findElement(by.css("a[href^='/careers']")).click();
            return driver.wait(function () {
                return driver.findElement(by.css("h1.title-ui")).isDisplayed().then(function (valtozo) {
                    return valtozo;
                })
            });
        });

        it("Then the  Careers page should appear", function () {
            return expect(driver.getCurrentUrl()).to.eventually.equal("https://www.epam.com/careers");
        });

    });


    xdescribe('Searching based on location', function () {

        it("When it clicks on the Location choicebox", function(){
            driver.findElement(by.css(".section--hide-on-mobile .select-box-selection")).click();
            driver.sleep(3000);
            // let regx = /^#select-box-location-gk-result-(.*)-all_China$/;
                return driver.wait(function(){
                    return driver.findElement(by.css(".select-box-dropdown")).isDisplayed().then(function(valami){
                        return valami;
                    })
                });
            
        });

        it("When Hungary as a location is selected", function () {
            driver.findElement(by.css("li[aria-label = 'Hungary']")).click();
            driver.sleep(3000);
            return driver.wait(function (){
                return driver.findElement(by.css(".dropdown-cities")).isDisplayed().then(function (valami) {
                    return valami;
                })
            }) 
        });

        it("And Debrecen is selected", function () {
            driver.findElement(by.css("li[aria-label='Hungary'] > ul > li:nth-child(3)")).click();
            driver.sleep(9000);
        });

        it("And the Find button is clicked2", function(){
            driver.findElement(by.css(".section--hide-on-mobile .job-search__submit")).click();
            driver.sleep(6000);
            return driver.wait(function () {
                return driver.findElement(by.css(".search-result__heading")).isDisplayed().then(function (valtozo) {
                    return valtozo;
                })
            });
        });

    });


    xdescribe("Navigate to Our work/Software and Hi-Tech through the Menu button", function(){
        
        it("When the Menu button is clicked", () => {
            driver.findElement(by.css(".hamburger-menu__button")).click();
            driver.sleep(3000);
            return driver.wait(() => {
                return driver.findElement(by.css(".hamburger-menu__dropdown")).isDisplayed().then((param) => {
                    return param;
                });
            });
        });

        it("And the Software and Hi-Tech is clicked", () => {
            driver.findElement(by.css("a.hamburger-menu__link[href='/our-work/software-and-hi-tech']")).click();
            return driver.wait(() => {
                return driver.findElement(by.css(".double-section__part.bg-color-light-blue")).isDisplayed().then((param) => {
                    return param;
                });
            });
        });

        it("Then the Software & Hi-Tech page should appear", function(){
            return expect(driver.getCurrentUrl()).to.eventually.equal("https://www.epam.com/our-work/software-and-hi-tech");
        });

    });


    xdescribe('Careers button is clicked', function () {

        it("When the Carreers button is clicked", function () {
            driver.findElement(by.css("a[href^='/careers']")).click();
            return driver.wait(function () {
                return driver.findElement(by.css("h1.title-ui")).isDisplayed().then(function (valtozo) {
                    return valtozo;
                })
            });
        });

        it("Then the  Careers page should appear", function () {
            return expect(driver.getCurrentUrl()).to.eventually.equal("https://www.epam.com/careers");
        });

    });

    

    xdescribe("Selection based on skill", function(){

        it("When the Skills checkbox is clicked", () =>{
            driver.findElement(by.css(".section--hide-on-mobile .multi-select-filter")).click();

            return driver.wait(() => {
                return driver.findElement(by.css(".section--hide-on-mobile .multi-select-dropdown-container")).isDisplayed().then((param) => {
                    return param;
                });
            });
        });

        it("When the Software Testing engineer is selected", function(){
            driver.findElements(by.css(".section--hide-on-mobile .checkbox-custom-label")).then((param) =>{
               return param[11].click();
            });
            return driver.sleep(3000);
        });

        it("And the Find button is clicked", () => {
            driver.findElement(by.css(".section--hide-on-mobile .job-search__submit")).click();

            return driver.wait(function () {
                return driver.findElement(by.css(".search-result__heading")).isDisplayed().then(function (valtozo) {
                    return valtozo;
                });
            });
        });

        it("The Software Test Engineering should be selected", function() {
            return expect(driver.findElement(by.css(".filter-tag")).getText()).to.eventually.equal("SOFTWARE TEST ENGINEERING");
            driver.wait(3000);
        });


    });
    

    describe("Searching using the Search button on the menubar.", function(){
        it("When the Search icon is clicked", () => {
            driver.findElement(by.css(".header-search__button")).click();

            return driver.wait(() => {
                return driver.findElement(by.css(".header-search__panel")).isDisplayed().then(function (valtozo) {
                    return valtozo;
                });
            });
        });

        it("And 'Testing' is typed into the search field", () => {
            driver.findElement(by.css(".header-search__input")).sendKeys("Testing");
        });

        it("And the Find button is clicked", () => {
            driver.findElement(by.css(".header-search__submit")).click();
            driver.sleep(2000);
            return driver.wait(() => {
                return driver.findElement(by.css(".search-results__counter")).isDisplayed().then(function (valtozo) {
                    return valtozo;
                });
            });
        });

        it("And the search result should contain the searched term.", () => {
            return expect(driver.findElement(by.css(".search-results__counter")).getText()).to.eventually.include('TESTING');
            
        });
        
        it("And the first result is opened", () => {
            driver.findElements(by.css(".search-results__title > a")).then((params) => {
                return params[0].click();
            });
            
            return driver.sleep(3000);
        });




    });




    after('Closing browser instance', function () {
        return driver.quit();
    });
});