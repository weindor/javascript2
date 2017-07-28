function print(text) {
    document.write(text + '<br>');
}

function printArr(arr) {
    print('Array size is: ' + arr.length);
    for (var i = 0; i < arr.length; i++) {
       print(i + 1 + ' ' + arr[i]); 
    }    
}

function printArrV2(arr) {
    print('Array size is: ' + arr.length);
    arr.forEach(function(el, i) {
        print(i + 1 + ' ' + el);
    });    
}

function printDict(dict) {
    for (var key in dict) {
        print(key + ': ' + dict[key]);
    }
}


let title,
    price,
    description,
    image;
    
    
    
    
let goodTitles = [];

goodTitles.push('Mercedes GL500');
goodTitles.push('BMW X6');
goodTitles.push('Tesla Model X');

goodTitles[3] = 'ZAZ Lanos';
goodTitles.push('Audi TT');

printArrV2(goodTitles);


let prices = [60000, 90000, 150000, 10000, 50000];

printArrV2(prices);

printCarsAndPrices(goodTitles, prices);

function printCarsAndPrices(cars, prices) {
    for (var i = 0; i < cars.length; i++ ) {
        print(cars[i] + ': ' + prices[i]);
    }
}

let cars = {};

cars['fastest'] = 'Tesla Model X';
cars['cheapest'] = 'ZAZ Lanos';
cars['largest'] = 'Mercedes GL500';

print('Fastest car is: ' + cars['fastest']);
print(cars.length);
printDict(prices);

let mb = {};

mb.title = 'Mercedes GL500';
mb.price = 90000;
mb.description = 'Cool car';
mb.color = 'Black';

print(mb.description);