# Example of ASP.NET MVC, CasperJS and MSBuild

## How to use
 * start the Schakko.CasperJS.Web application
 * open your command line and navigate to Schakko.CasperJS.TestUI
 * execute 
```
	msbuild --host=$YOUR_IIS_URL
```
The suite will fail because Fixes/Provoke_Error.js throws an error. A screenshot of every failed test is stored inside the results/ directory. You will find a file named "provoke_error_return_the_expected_content_of__my_area.png".
 * Open the Fixes/Provoke_Error.js, comment line 10 and uncomment line 11.
 * re-run
```
	msbuild --host=$YOUR_IIS_URL
```
 * the tests are passed. Look inside the results/ directory. There will be a file named casperjs-unittest-results.xml. This file has the xUnit format and can be understand by TeamCitys Ant JUnit runner.
 
## Integrate in TeamCity
 * take this project as template and customize it for your needs
 * edit your TeamCity project:
  * deploy your project with help of WebDeploy or other techniques
  * add another Build Step after your deployment step
  * choose MSBuild and point to your test UI project
  * add Build feature (below the Build Steps table). Choose
	* Report type: Ant JUnit
	* Monitoring rules: **/*unittest-results.xml
 * rebuild the project

## Further steps
 * customize the TestUI.csproj so that it can handle different hosts. Every user should be able to execute the integration tests on their local development server. This can be easy done as you can use the <PropertyGroup> tag.
 * Enhance your application so that a special integration test mode is used. Put this configuration string inside the Web.config. If this mode is active, you can impersonate to another user or rebuild the database just by clicking a link. Be sure that this is *never* deployed in production environment
 * upload failed screenshots to your JIRA/Bonfire instance