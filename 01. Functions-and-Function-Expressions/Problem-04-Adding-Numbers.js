
function add(num){
    var sum = num;

    function func(nextNum){
        sum += nextNum;
        return func;
    }

    func.print = function(){
        return sum;
    };

    return func;
}

	console.log(add(1).print()); // returns 1
    console.log(add(2)(3).print()); // returns 5
	console.log(add(1)(1)(1)(1)(1).print()); // returns 5
	console.log(add(1)(0)(-1)(-1).print()); // returns -1

