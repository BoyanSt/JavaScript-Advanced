


var btn = document.getElementById('btn');
btn.addEventListener('click', addDiv, false);
var isDivAdded = false;


function addDiv(){

    var inputText = document.getElementsByTagName('input')[0].value;

    var match = inputText.match(/.+@softuni\.bg$/g),
        div = document.createElement('div'),
        text = document.createElement('p');
    div.id = 'addedDiv';
    text.innerText = inputText;

    if(isDivAdded) {
        var parent = document.getElementsByTagName('body')[0];
        parent.removeChild(document.getElementById('addedDiv'));
    }

    div.appendChild(text);

    document.body.appendChild(div);
    isDivAdded = true;

    if (match) {
        div.style.backgroundColor = '#33cc33';
    } else {
        div.style.background = 'red';
    }
}
