

var HTMLGen = (function(){

    function createParagraph(id, text){
        var parentElement = document.getElementById(id);
        var textNode = document.createElement('p');
        textNode.innerText = text;
        parentElement.appendChild(textNode);
    }

    function createDiv(id, nameClass){
        var parentElement = document.getElementById(id);
        var div = document.createElement('div');
        div.className = nameClass;
        parentElement.appendChild(div);

    }

    function createLink(id, text, url){
        var parentElement = document.getElementById(id);
        var linkElement = document.createElement('a');
        linkElement.innerText = text;
        linkElement.href = url;
        parentElement.appendChild(linkElement);
    }


    return {
        createParagraph: createParagraph,
        createDiv: createDiv,
        createLink: createLink
    }

})();


HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');


