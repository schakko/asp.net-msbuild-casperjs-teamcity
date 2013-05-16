casper.test.begin('Provoke error in homepage title test', 1, function suite(test) {
	casper.start(casper.test_config.endpoint())

	casper.then(function(response) {
		// this test will fail as the title is "Homepage"
		// CasperJS will write a screenshot in the result directory
		
		this.test.assertSelectorHasText(".my_area", 
			// comment first line and uncomment second line to fix the issue
			"This should be an error. Comment me and uncomment next line.",
			//"Welcome to the jungle",
			"Provoke error return the expected content of .my_area")
	})
	casper.run(function() {
		test.done()
	})
})