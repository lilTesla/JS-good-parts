(function(){
    let add = function add(a, b) {
        return a + b;
    };

    let mathInterface = {
        "add": add
    };
    window.$m = mathInterface;
})();
