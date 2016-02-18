

var invoiceCheck = document.getElementById('checkInvoice');

invoiceCheck.onchange = function (e) {
    if (e.target.checked ) {
        onCheckInvoice();
    } else if(!e.target.checked ){
        var parent = document.getElementById("formWeb");
        parent.removeChild(document.getElementsByTagName('div')[0]);
    }
};

function onCheckInvoice() {
    var infoInvoice = ['Фирма/Организация:*', 'МОЛ:*', 'ЕИК:*', 'ИН по ДДС:*', 'Адрес:*'],
        form = document.getElementById('formWeb');

    var div = document.createElement('div');

    for (var i = 0; i < infoInvoice.length; i++) {
        var label = document.createElement('label'),
            newLine1 = document.createElement('br'),
            input = document.createElement('input'),
            newLine2 = document.createElement('br');

        label.innerText = infoInvoice[i];
        appendToFragment(div, label, newLine1, input, newLine2);
    }

    form.appendChild(div);

    function appendToFragment(div, label, newLine1, input, newLine2) {
        div.appendChild(label);
        div.appendChild(newLine1);
        div.appendChild(input);
        div.appendChild(newLine2);
    }
}


