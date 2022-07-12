function modus(arr) {
    const frequencyTable = {};
    arr.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1);

    let modes = [];
    let maxFrequency = 0;
    for(const key in frequencyTable) {
        if(frequencyTable[key] > maxFrequency) {
            modes = [Number(key)];
            maxFrequency = frequencyTable[key];
        }
            else if(frequencyTable[key] === maxFrequency) {
            modes.push(Number(key));
        }
    }
    if (modes.length === Object.keys(frequencyTable).length) modes = [];
    return modes;
}


var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
const jumlahdata1 = data1.length;
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
const jumlahdata2 = data2.length;
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]
const jumlahdata3 = data3.length;
var count, i, result;



    console.log(`data array ke 1 = ${data1}`);
    console.log(`Banyak data yang keluar = ${jumlahdata1}`);
    console.log(`Modus         : ${modus(data1)}`);
    result = data1.filter(i => i === 1).length;
    console.log(`jumlah modus  : `+ result);
    

    console.log("\n");

    console.log(`data array ke 2 = ${data2}`);
    console.log(`Banyak data yang keluar = ${jumlahdata2}`);
    console.log(`Modus        : ${modus(data2)}`);
    result = data2.filter(i => i === 2).length;
    console.log(`jumlah modus : `+ result);

    console.log("\n");

    console.log(`data array ke 3 = ${data3}`);
    console.log(`Banyak data yang keluar = ${jumlahdata3}`);
    console.log(`Modus        : ${modus(data3)}`);
    result = data3.filter(i => i === 3).length;
    console.log(`Jumlah modus : `+ result);