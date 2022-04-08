// Nr.1.
console.log('-------Nr.1.------');

const a = 10;
const b = 20;
if (typeof a !== 'number'){
    console.log('ERROR: ivesta netinkamo tipo reiksme');
}
if (typeof b !== 'number'){
    console.log('ERROR: ivesta netinkamo tipo reiksme');
}
if (a + '' === 'NaN') {
    console.log('ERROR: ivestas netikras skaicius.');
}
if (a + '' === 'NaN') {
    console.log('ERROR: ivestas netikras skaicius');
}
if (a > b){
    console.log(`${a}> ${b}`);
} else if (a === b) {
    console.log(`${a} = ${b}`);
} else {
    console.log(`${a} < ${b}`);
}

// Nr.2.
console.log('-------Nr.2.------');

for(i = 1; i <=10; i++){
    console.log(i);
}

// Nr.3.
console.log('-------Nr.3.------');

for(i = 0; i <=10; i += 2){
    console.log(i);
}

// Nr.4.
console.log('-------Nr.4.------');

for(i = 0; i <10; i++) {
    console.log(rand(1, 10));
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Nr.5.
console.log('-------Nr.5.------');

let atsitiktinis = 0;
while (atsitiktinis !== 5) {
    atsitiktinis = rand(1, 10);
    console.log(atsitiktinis);
}

// Nr.6.
console.log('-------Nr.6.------');

const masyvas = [];
const masyvoIlgis = rand(20, 30);
for (i = 0; i < masyvoIlgis; i++) {
    masyvas.push(rand(10, 30));
}
console.log(masyvas)
let bigNum = 0;
for(i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 0) {
        bigNum = masyvas[i];
    }
}

console.log(bigNum);

// Nr.7.
console.log('-------Nr.7.------');

const raides = ['A', 'B', 'C', 'D'];
const masyvas2 =[];
pozicija = rand(1, 4);
for (i = 0; i < 100; i++) {
    pozicija = rand(0, 3);
    masyvas2.push(raides[pozicija]);
}
console.log(masyvas2);

// Nr8.
console.log('-------Nr.8.------');

function lygineSuma (a, b) {
    if (typeof a !== 'number' 
        && typeof a !== 'object') {
        return `ERROR: pateikta pirma reiksme yra netinkamo tipo`;
    }
    if (typeof b !== 'number' 
        && typeof b !== 'object') {
        return `ERROR: pateikta antra reiksme yra netinkamo tipo`;
    }
    if ((typeof a === 'number'
        && typeof b === 'object')
        || (typeof a === 'object' 
        && typeof b === 'number')) {
        return `pateiktos reiksmes turi buti to paties tipo`;
    }
    if (typeof a === 'number' 
        && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'object' 
        && typeof b === 'object') {
        return a.length + b.length;
    }
 
}

console.log(lygineSuma (10, 20));
console.log(lygineSuma ([10, 11, 12], [20, 21, 22]));

// Nr9.
console.log('-------Nr.9.------');

function pirminisSkaicius (a) {
    if(typeof a !== 'number'
    || !isFinite(a)) {
        return 'Pateikta netinkamo tipo reiksme';
    }
    let dalinasiIs = 0;
    for (i = 1; i <= a; i++){
        if (a % i === 0) {
            dalinasiIs++;
        }
    } if (dalinasiIs === 2){
        return `${a} yra pirminis skaicius`;
    } else return `${a} nera pirminis skaicius`;
}

console.log(pirminisSkaicius('lalala'));
console.log(pirminisSkaicius(7));
console.log(pirminisSkaicius(8));

// Nr.10.
console.log('-------Nr.10.------');

function telefonoNumeris(a) {
    if(typeof a !== 'object') {
        return 'Pateikta netinkamo tipo reiksme';
    }
    if(a.length !== 10) {
        return 'Pateiktas netinkamas kiekis skaitmenu';
    }
    let telNr1 = '';
    let telNr2 = '';
    let telNr3 = '';

    for(i = 0; i <3; i++) {
        let skaitmuo = a[i];
        if(typeof skaitmuo !== 'number' || !isFinite(skaitmuo)) {
            return 'Pateikta netinkamo tipo reiksme';
        } else  {
            telNr1 += a[i]
            }
    }
    for(i = 3; i <6; i++) {
        let skaitmuo = a[i];
        if(typeof skaitmuo !== 'number' || !isFinite(skaitmuo)) {
                return 'Pateikta netinkamo tipo reiksme';
        } else  {
            telNr2 += a[i];
            }
    }
    for(i = 6; i <10; i++){
        let skaitmuo = a[i];
        if(typeof skaitmuo !== 'number' || !isFinite(skaitmuo)) {
                return 'Pateikta netinkamo tipo reiksme';
        } else  {
            telNr3 += a[i];
            }
    }   return `(${telNr1}) ${telNr2}-${telNr3}`;
}

console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))




