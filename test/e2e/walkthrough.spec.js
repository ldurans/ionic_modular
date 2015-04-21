var chai = require('chai');
chai.use(require('chai-as-promised'));
var expect = chai.expect;

describe('Walkthrough', function(){

        beforeEach(function(){
            browser.get('http://localhost:8100/');
        });

        it('contains a passing spec', function(done){
          expect(true).to.equal(true);
        });

        it('should start on the walkthrough', function(done){

            expect(element.all(by.css('div.walkthrough_intro_slide')).first().getText())
                .to.eventually.contain('Swipe to continue');

            expect(element.all(by.css('div.walkthrough_intro_slide')).first().getText())
                .to.eventually.contain('walkthrough');

        });

        it('should have a skip link to go direct to setting the default hospital', function(done){
            element(by.css('.skip_link')).click();
            element.all(by.css('div.change_hospital_search_box')).first().then(function(el){
                expect(el.isDisplayed()).to.be.ok
            });
        });

        it('should set the test hospital and go to the directory screen', function(done){
            element(by.css('.skip_link')).click();
            element(by.model('vm.searchQuery')).sendKeys('Test');
            element(by.repeater('hospital in vm.hospitals')).click();
            element.all(by.css('#search-box')).first().then(function(el){
                expect(el.isDisplayed()).to.be.ok
            })
        });

});
