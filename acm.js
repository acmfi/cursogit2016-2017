(function () {
    "use strict";
    var dom = {};
    dom.wrapper = document.querySelector('.reveal');

    function createImg(name, path) {
        if(!dom.wrapper.querySelector('#' + name)) {
            var searchElement = document.createElement('div');
            searchElement.id = name;
            searchElement.innerHTML = '<img src="' + path + '" width="130" height="130">';
            dom.wrapper.appendChild(searchElement);
            window.console.log(name + " added!");
        }
    }

    createImg("logofi", "./logos/ACM.png");
    createImg("logoupm", "./logos/upm.gif");

    window.console.log("Slides loaded!");
})();
