

var domModule = (function () {


    function apprendChild(element, child) {
        var parent = document.querySelector(child);
        parent.appendChild(element);
    }

    function removeChild(element, child) {
        var parent = document.querySelector(element);
        var childElement = document.querySelector(child);
        parent.removeChild(childElement);

    }

    function addHandler(element, eventType, eventHandler) {
        var elementsDOM = document.querySelectorAll(element);

        for (var i = 0; i < elementsDOM.length; i++) {
            var currElement = elementsDOM[i];
            element.attachEvent(eventType, eventHandler);
        }
    }

    function retrieveElements(selector) {
        var allElementsInDOM = document.querySelectorAll(selector);
        var el = allElementsInDOM[0];
    }

    return {
        appendChild: apprendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }
})();


var liElement = document.createElement("li");

domModule.appendChild(liElement,".birds-list");

domModule.removeChild("ul.birds-list","li:first-child");

domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });

var elements = domModule.retrieveElements(".bird");





















