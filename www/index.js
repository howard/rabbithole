function init() {
    var contentNames = ['upload', 'chat', 'about'];
    for (var i = 0; i < contentNames.length; i++) {
        var elem = document.getElementById(contentNames[i] + 'Link');
        elem.href = '#';
        elem.onclick = (function (contentName) {
            return function () { showContent(contentName); };
        })(contentNames[i]);
    }

    var chatForm = document.getElementById('chatForm');
    chatForm.onsubmit = submitChat;
    startChatRefresh();
}

function headerAside() {
    var header = document.getElementsByTagName('header')[0];
    header.classList.add('aside');
}

function showContent(id) {
    headerAside();
    var contentElem = document.getElementById(id);
    hideRest(contentElem);
    setTimeout(function () {
        showElement(contentElem);
    }, 200);
}

function hideRest(exception) {
    var contentElems = document.getElementsByClassName('content');
    for (var i = 0; i < contentElems.length; i++) {
        if (contentElems[i] != exception) {
            hideElement(contentElems[i]);
        }
    }
}

function showElement(elem) {
    elem.style.display = "block";
    console.log(elem);
    setTimeout(function () {
        elem.classList.remove('hidden');
    }, 100);
}

function hideElement(elem) {
    elem.classList.add('hidden');
    setTimeout(function () {
        elem.style.display = 'none';
    }, 200);
}

function refreshChat() {
    var chatContent = document.getElementById('chatContent');
    var r = new XMLHttpRequest();
    r.onreadystatechange = function () {
        if (r.readyState == 4) {
            chatContent.innerHTML = r.responseText;
        }
    };
    r.open('GET', 'chat_content.html', true);
    r.send();
}

var chatRefreshTimer = undefined;
function startChatRefresh() {
    chatRefreshTimer = setInterval(refreshChat, 1000);
}

function submitChat() {
    var chatForm = document.getElementById('chatForm');
    var r = new XMLHttpRequest();
    r.onreadystatechange = function () {
        if (r.readyState == 4) {
            refreshChat();
        }
    };
    r.open('POST', '/cgi-bin/psowrte.py', true);
    r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    r.send(getFormData());
    return false;
}

function getFormData() {
    var form = document.getElementById('chatForm');
    var nickElem = form.getElementsByClassName('nickname')[0];
    var dataElem = form.getElementsByClassName('message')[0];
    var formData = 'name=' + encodeURIComponent(nickElem.value) +
           '&data=' + encodeURIComponent(dataElem.value) +
           '&color=def';
    dataElem.value = '';
    return formData;
}
