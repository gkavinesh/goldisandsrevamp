/** Sets Custom Cookie Name */
CookieBanner.setCookieName({
    "name": "BackendCookieConsent",
    "expires": 2,
});

/* Sets Custom Button Name */
CookieBanner.setButton({
    "type": "banner",
    "title": "<span><i class='fa fa-angle-right' aria-hidden='true'></i><span> Cookie Settings</span></span>",
    "action": "settings",
    "id": "banner-button-settings",
    "class": "cbc-button-settings btn-ck",
    "enable": true
});
CookieBanner.setButton({
    "type": "banner",
    "title": "<span><i class='fa fa-check' aria-hidden='true'></i><span> Accept All</span></span>",
    "action": "accept",
    "id": "banner-button-accept",
    "class": "cbc-button-accept btn-ck",
    "enable": true
});
CookieBanner.setButton({
    "type": "banner",
    "title": "<span><i class='fa fa-check' aria-hidden='true'></i><span> Reject All</span></span>",
    "action": "reject",
    "id": "banner-button-reject",
    "class": "cbc-button-reject btn-ck",
    "enable": true
});
CookieBanner.setButton({
    "type": "tab",
    "title": "<span><i class='fa fa-check' aria-hidden='true'></i><span> Save Settings</span></span>",
    "action": "accept",
    "id": "modal-button-accept",
    "class": "csm-button-accept btn-ck",
    "enable": true
});