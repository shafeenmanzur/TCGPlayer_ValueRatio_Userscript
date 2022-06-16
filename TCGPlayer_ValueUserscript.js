// ==UserScript==
// @name         TCGPlayer Value Ratio
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Calculate the value between price offering listed on TCGPlayer
// @author       You
// @match        https://www.tcgplayer.com/search/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tcgplayer.com
// @grant        none
// ==/UserScript==

let elemDiv = document.createElement('button');
elemDiv.innerHTML = 'Get Ratios'
elemDiv.onclick = function() {
    var tmp = document.getElementsByClassName('inventory__price-with-shipping');
    var market_price = document.getElementsByClassName('search-result__market-price--value');
    let lowest_price = []
    let counter = 0;
    let item2;
    for (let item of tmp) {
        item = item.innerHTML
        item = item.substring(1);
        item = Number(item);

        item2 = market_price.item(counter).innerHTML;
        item2 = item2.substring(2);
        item2 = Number(item2);

        lowest_price.push((item2/item).toFixed(2));
        counter++;
    }

    console.log(lowest_price);

    var searchElements = document.getElementsByClassName('search-result__market-price');
    counter = 0;
    for (let item of searchElements){
        item.append('Ratio: ' + lowest_price[counter]);
        counter++;

    }
}

document.body.prepend(elemDiv);

