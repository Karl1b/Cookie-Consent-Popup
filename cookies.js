// This function sets a Consent Cookie.
function cookieSet(cname, cvalue, exdates) {
    const d = new Date();
    d.setTime(d.getTime() + (exdates * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

// Checks if there is the consent cookie. 
function cookieConsent() {
    // If there is no consent cookie:
    if (document.cookie == '') {
        // Shows the overlay so that the rest of the page is greyed out.
        $('.overlayCookie').show();
        // Should prevent the user from clicking on the background. Seems not to be needed.
        /*
        $('.cookieOverlay').on('click', function (e) {
            if (e.target !== this) {
                return;
            }
        });
        */
    } else {
        // Hides the overlay as well as the modal, cause the modal is cascaded below the overlay in html
        $('.overlayCookie').hide();
    }
}

// This happens when the Cookie-Button is clicked
function acceptCookies() {
    // Sets a Consent cookie valid for 1year
    if ($('#cbCookies').prop('checked') == true) {
        // Sets a Consent cookie valid for 1year
        cookieSet('Consent', 1, 365);
        // Hides the overlay, allowing acces to the page.
        $('.overlayCookie').hide();
    }
}
// This is called as soon as the document is ready
$(document).ready(function () {
    cookieConsent()
});

