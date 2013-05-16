@ECHO OFF
set CASPER_PATH=%~dp0..
set CASPER_BIN=%CASPER_PATH%\bin\
set ARGV=%*
echo %ARGV%
call %~dp0..\..\phantomjs\phantomjs "%CASPER_BIN%bootstrap.js" --casper-path="%CASPER_PATH%" --cli %ARGV%