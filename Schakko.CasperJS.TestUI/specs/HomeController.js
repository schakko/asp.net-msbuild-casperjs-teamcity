// we have to use latest master branch of CasperJS for test.begin support. It won't work with CasperJS 1.0
casper.test.begin('Index site', 2 /* total expected assert statements */, function suite(test) {
	casper.start(casper.test_config.endpoint());

	casper.then(function(response) {
		this.test.assertTitle("Homepage", "Title of test application is 'Homepage'");
	});
	casper.then(function(response) {
		this.test.assertSelectorHasText(".my_area", "Welcome to the jungle", "Text is fine");
	});
	// every test suite must include casper.run()
	casper.run(function() {
		test.done();
	})
});

casper.test.begin("Info site", 1 /* total expected assert statements */, function suite(test) {
	casper.start(casper.test_config.endpoint());

	casper.thenClick("#about > a", function(response) {
		casper.then(function(response) {
			this.test.assertSelectorHasText("#some_about_content", "Some very important content", "Expected content of 'About' site is given");
		});
	});
	casper.run(function() {
		test.done();
	});
});