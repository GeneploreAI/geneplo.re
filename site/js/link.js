const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

function link() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://us-central1-chatgptdiscord.cloudfunctions.net/discordtoken?code=" + urlParams.get('code'), true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            alert("Successfully linked accounts. Return to Discord to continue.");
        }
    }
}