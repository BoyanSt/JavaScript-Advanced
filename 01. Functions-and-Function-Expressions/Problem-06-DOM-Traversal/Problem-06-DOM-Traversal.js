var selector = ".birds";
traverse(selector);

function traverse(selector) {

    var nodesFound = document.querySelector(selector);
    traverseElement(nodesFound, '');

    function traverseElement(element, spacing) {
        var elementAsString = '';
        spacing = spacing || '  ';

        elementAsString = spacing + element.nodeName.toLowerCase() + ':';

        if (element.hasAttribute('id')) {
            elementAsString += ' id = "' + element.id + '"';
        }

        if (element.classList.length > 0) {
            elementAsString += ' class = "' + element.className + '"'
        }

        console.log(elementAsString);

        if (element.hasChildNodes()) {
            for (var i = 0; i < element.childNodes.length; i++) {
                var childNote = element.childNodes[i];
                if (childNote.nodeType === 1) {
                    traverseElement(childNote, spacing + '    ');
                }
            }
        }
    }
}


