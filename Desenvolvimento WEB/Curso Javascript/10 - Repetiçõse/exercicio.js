function enquanto() {
    var c = 1;
    while (c <= 8) {
        console.log(`tudo bem? ${c}`);
        c++;
    }
}

enquanto();

function faca_enquanto() {
    var c = 1;
    do {
        console.log(`Tudo bem? ${c}`);
        c++;
    } while (c <= 8);
}

faca_enquanto();

function para() {
    for (c = 1; c <= 8; c++) {
        console.log(c);
    }
}

para();
