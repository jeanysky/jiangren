
function countstops(flightarray) {

    const var1 = "1 stop";
    const var2 = "2 stop";


    if (flightarray.length == 1) {
        return "direct";
    }

    if (flightarray.length == 2) {
        return "1 stop";
    }

    if (flightarray.length == 3) {
        return "2 stops";
    }

    if (flightarray.lenghth > 3) {
        return "n stops";
    }
}

const taxrate = [{ min: 0, max: 18200, rate: 0, taxsum: 0 },
{ min: 18200, max: 37000, rate: 0.19, taxsum: 0 },
{ min: 37000, max: 90000, rate: 0.325, taxsum: 3572 },
{ min: 90000, max: 180000, rate: 0.37, taxsum: 20797 },
{ min: 180000, max: 10000000, rate: 0.45, taxsum: 54096 },
];

function tax(income) {
    for (i = 0; i < taxrate.lenghth; i++) {
        if (income <= taxrate[i].max) {
            return texrate[i].taxsum + (income - texrate[i].min) * texrate[i].rate;
        }
    }
}