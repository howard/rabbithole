function init() {
    var contentNames = ['upload', 'chat', 'about'];
    for (var i = 0; i < contentNames.length; i++) {
        var elem = document.getElementById(contentNames[i] + 'Link');
        elem.href = '#';
        elem.onclick = (function (contentName) {
            return function () { showContent(contentName); };
        })(contentNames[i]);
    }
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
