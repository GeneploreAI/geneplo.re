const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const mutableText = document.getElementById("mutableText");
const signinButton = document.getElementById("signinbutton");

var code;

function checkGift() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://us-central1-chatgptdiscord.cloudfunctions.net/gift-initcheck?code=" + code, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {
            mutableText.innerHTML = xhr.responseText;
        }
        if (xhr.status != 200) {
            mutableText.innerHTML = xhr.responseText;
            signinButton.style.display = "none";
        }
    }
}

function redeem() {
    document.getElementById("mutableTitle").innerHTML = "Redeeming...";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://us-central1-chatgptdiscord.cloudfunctions.net/gift-redeem?gcode=" + code + "&code=" + urlParams.get('code'), true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {
            document.getElementById("mutableTitle").innerHTML = "Redeemed!";
            mutableText.innerHTML = xhr.responseText;
            signinButton.style.display = "none";
        }
        if (xhr.status != 200) {
            mutableText.innerHTML = xhr.responseText;
            document.getElementById("mutableTitle").innerHTML = "We ran into an error. Please try again later.";
        }
    }
}

function init() {
    if (urlParams.has('g')) {
        code = urlParams.get('g');
        checkGift();
    } else if (urlParams.has('code')) {
        code = urlParams.get('state');
        redeem();
    } else if (urlParams.has("error")) {
        document.getElementById("mutableTitle").innerHTML = "We ran into an error. Please try again later.";
        mutableText.innerHTML = urlParams.get("error");
    } else {
        document.getElementById("mutableTitle").innerHTML = "We ran into an error. Please try again later.";
        mutableText.innerHTML = "The link is invalid.";
        signinButton.style.display = "none";
    }
}

function signin() {
    window.open("https://discord.com/api/oauth2/authorize?client_id=1089317211652509811&redirect_uri=https%3A%2F%2Fgeneplo.re%2Fgift&response_type=code&scope=identify&state=" + code, "_self")
}