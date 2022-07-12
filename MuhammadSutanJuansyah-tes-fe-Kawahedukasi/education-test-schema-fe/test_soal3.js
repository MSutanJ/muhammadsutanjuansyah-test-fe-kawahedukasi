function triangle1(baris){
    let polabintang = '';

    for(let i = 1; i <= baris; ++i){
        for(let j = 1; j <= i; j++){
            polabintang += '*';
        }

        polabintang += "\n";
    }
    return polabintang;
}

console.log(triangle1(6));

function triange2(baris2){
    let polabintang1 = '    ';

    for(let l = 1; l <= baris2; ++l){
        for(let k = baris2 - 1; k >= l; --k){
            polabintang1 += ' ';
        }
        for(let m = 1; m <= l; ++m){
            polabintang1 += '*';
        }
        polabintang1 += "\n    ";
    }
    return polabintang1
}

console.log(triange2(5));