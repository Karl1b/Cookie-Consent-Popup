# Cookie-Consent-Popup
Simple Cookie Consent Popup, which follows the law very strictly in a technical aspect only.
1. It does not let the user use the page until he has accepted.
2. The user has to actively check a box.

This is very user unfriendly, but on the save side when it comes to law regulations.
### How to use
Insert the cookies.css as well as the cookies.js in your html, as follows. See the index.html for an example.
```html
<head>
...
    <link rel="stylesheet" type="text/css" href="cookies.css">
</head>
<body>
...
<div class="overlayCookie">
        <div class="modalCookie">
           <input type="checkbox" id="cbCookies">
            <!-- It is important for the law to atually check a box and not just lead the user to press a button by design-->
           <button onclick="acceptCookies()">Accept</button>
        </div>
    </div>
    <!-- Import jQuery script-->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- import the js-->
    <script src="cookies.js">cookieConsent()</script>
</body>
```
### Known issues
There are problems with some browser addons, like ghostery.
### Inverting the visibility
You can easily invert the visibility of the overlay by chaning the css file.
