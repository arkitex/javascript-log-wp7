# Javascript Log for Windows Phone 7 #

A small javascript and C# snippet to include when debugging web applications on Windows Phone 7.

## Why? ##

Windows Phone 7 and 7.5 don`t have any way to debug your javascript code. This short snippet of javascript and native C# code simply forwards the console.log output to the Visual Studio Output.

## Example ##

Live example to come soon. In the meantime:

1. Copy `javascriptConsoleWp7.js` and `javascriptConsoleWp7_demo.html` to the same directory in your web server.
2. Open up `JavascriptConsoleWp7.sln` in Visual Studio.
3. Replace the url string in `MainPage.xaml.cs` to point at `javascriptConsoleWp7_demo.html`
4. Run app.

## Features ##

Overrides:
* console.log()
* console.debug()
* console.error()
* console.info()
* console.warn()

You can pass an object into any of these functions - if the JSON object is present, the console in VS will return `JSON.stringify(yourObject);`. If JSON is not present, it will display `JSON is not defined` error. If JSON is not already a part of your web application, you can get it [here](https://github.com/douglascrockford/JSON-js).

## License ##

(The MIT License)

Copyright (c) 2012 Ethan Lo <ethan@labcurio.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the `Software`), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.