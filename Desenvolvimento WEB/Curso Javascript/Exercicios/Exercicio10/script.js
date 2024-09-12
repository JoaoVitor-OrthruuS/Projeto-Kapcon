function bem_vindo() {
    console.log("Seja bem vindo!");
}
bem_vindo();

//---------//

function parimp(n) {
    if (n % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}

console.log(parimp(2));

//----------//

function media_array() {
    var num = [1, 2, 3, 4, 5];
    var res = 0;
    for (var c in num) {
        res += num[c];
    }
    return res / num.length;
}

console.log(media_array());
