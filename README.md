## Prerequisites for this project:
- NodeJS (preferable v6 major version with npm 3, not node v8 & v8+)
- VS Code IDE

# Installing and starting the project:
_~From command line/terminal_
- npm install
- npm test

**For creating VS Code project and apply configs** used by me in the IDE, run install.cmd
For generating an install.cmd from your own configs, use the following command line script (without the quotes):
"_for /F "tokens=*" %i in ('code --list-extensions') do @echo call code --install-extension %i >> install.cmd_"

_Make sure it is inserted as a single line (and remove erroneus lines if any, by editing the .cmd file)_

**ALSO you can use Settings Sync plugin for VS Code (See link for exact description)**
- GIST ID :  _ce43645b2eea0879821a31f5bbd1487a_ .
- Please copy and use this ID in other machines to download settings.

**Shortcuts:**
1. Upload Key : _Shift + Alt + U_
2. Download Key : _Shift + Alt + D_

## Other useful links:
- MochaJS documentation: https://mochajs.org/
- Full Settings Sync documentation: http://shanalikhan.github.io/2015/12/15/Visual-Studio-Code-Sync-Settings.html
- Useful read: https://blog.testproject.io/2017/06/07/javascript-testing-with-selenium-webdriver-mocha/
