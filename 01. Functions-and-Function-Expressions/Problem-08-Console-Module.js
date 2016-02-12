var specialConsole = (function () {

    function writeLine() {
        var placeHolders,
            originalMsg;


        if (arguments.length > 0) {
            originalMsg = arguments[0];
            placeHolders = originalMsg.match(/{[0-9]+}/g);


            if ( !checkIfPlaceholdersAreValid(placeHolders, arguments)) {
                console.log('Invalid placeholder format');
                return;
            }

            for (var countArgs = 1, countPlaceHolders = 0; countArgs < arguments.length;
                 countArgs++, countPlaceHolders++) {
                var currPlaceHolder = placeHolders[countPlaceHolders];
                originalMsg = originalMsg.replace(currPlaceHolder, arguments[countArgs]);
            }

            console.log(originalMsg);

        } else {
            console.log();
        }
    }

    function checkIfPlaceholdersAreValid(placeholders, arguments){
        var currPlaceholder ,
            placeHolderAsNumber,
            isValid = true;

        if (placeholders.length !== arguments.length - 1) {
            isValid = false;
        }

        for (var i = 0; i < placeholders.length; i++) {
            currPlaceholder = placeholders[i];
            placeHolderAsNumber = Number(currPlaceholder.match(/[0-9]+/g)[0]);
            if (placeHolderAsNumber !== i) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    return {
        writeLine: writeLine,
        writeError: writeLine,
        writeWarning: writeLine,
        writeInfo: writeLine
    }
})();

specialConsole.writeLine(); // prints a new line
specialConsole.writeLine("Message: hello {0}", "world!"); //prints Message: hello world!
specialConsole.writeLine("Message: hello {1}", "world!"); //prints Error message
specialConsole.writeLine("Message: hello {0} {1}", "world!"); //prints Error message
specialConsole.writeLine("Message: hello {0}", "world!", "world!"); //prints Error message

specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");




