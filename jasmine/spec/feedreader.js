/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('Are Defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds instanceof Array).toBeTruthy();
            expect(allFeeds.length).not.toBe(0);
            
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("Have URLs", function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
              expect(feed.url).toMatch(/^(http|https):\/\//);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("Have Names", function() {
            allFeeds.forEach(function(feed) {
              expect(feed.name).toBeDefined();
              expect(typeof feed.name).toBe("string");
              expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The Menu", function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
    var body = document.body;
    var menuIcon = document.querySelector(".menu-icon-link");

 
    it("Body have 'menu-hidden' initially", function() {
      expect(body.className).toContain("menu-hidden");
    });

 
    it("Hody toggles the class 'menu-hidden' clicking menu icon", function() {
      menuIcon.click();
      expect(body.className).not.toContain("menu-hidden");

      menuIcon.click();
      expect(body.className).toContain("menu-hidden");
    });
  });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe("Initial Entries", function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });
    
    
        it("Has at least 1 entry after loadFeed function is called", function() {
            var numEntries = document.querySelectorAll(".feed .entry").length;
            expect(numEntries).toBeGreaterThan(0);
  
        });
    
   
        it("Has a entry that has a link starting with 'http(s)://'", function() {
            var entries = document.querySelector(".feed").getElementsByClassName("entry-link");
            for(var i = 0; i < entries.length; i++){
            expect(entries[i].href).toMatch(/^(http|https):\/\//);
            }

        });
    });

        describe("New Feed Selection", function() {
    
        var initFeedSelection;
        beforeEach(function(done) {
            loadFeed(0, function() {
            initFeedSelection = document.querySelector(".feed").innerHTML;
    
            loadFeed(1, function() {
                done();
            });
            });
        });
    
        it("Changes loaded content", function() {
            var newFeedSelection = document.querySelector(".feed").innerHTML;
            expect(initFeedSelection).not.toBe(newFeedSelection);

        });
    });   
}());
