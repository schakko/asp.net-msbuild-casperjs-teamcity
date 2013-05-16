var utils = require('utils');

/**
* export our configuration helper to CasperJS namespace
*/
casper.test_config = {
	endpoint: function () {
		// you can specifiy the host with --host=$YOUR_HOST
		return casper.cli.get("host") || "http://localhost:63126";
	}
};

// change viewport on startup to 1024x768. Default is a lower resolution.
casper.on('started', function () {
	// TODO: pass viewport options via command line
	casper.viewport(1024, 768);
});

// capture screenshot if test fails
casper.test.on('fail', function (failure) {
	// only take screenshot if casper has already started. There can be a parse error which means that casper has *not* started
	if (casper.started) {
		// create safe filename for screenshot
		var filename = failure.message.replace(/[^a-z0-9]/gi, '_').toLowerCase();
		casper.capture("results/" + filename + ".png");
		// TODO: upload the screenshot to JIRA/Bonfire
	}
})
