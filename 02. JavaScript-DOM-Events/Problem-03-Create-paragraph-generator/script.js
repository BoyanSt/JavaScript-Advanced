

createParagraph('wrapper', 'Some text');

function createParagraph(id, text){
    var parentElement = document.getElementById(id);
    var textNode = document.createElement('p');
    textNode.innerText = text;
    parentElement.appendChild(textNode);
}
