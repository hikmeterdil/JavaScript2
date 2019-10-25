'use strict';

const billAmountElement = document.querySelector('#bill-amount');
const billServiceQualityElement = document.querySelector('#bill-service-quality');
const billNumPeopleElement = document.querySelector('#bill-num-people');

const outputTipAmountTextElement = document.querySelector('#output-tip-amount-text');
const outputTipDisplayElement = document.querySelector('#output-tip-display');
const outputTipEachTextElement = document.querySelector('#output-tip-each-text');


function billFormSubmit() {
    const billAmount = Number(billAmountElement.value);
    const serviceQualityPercent = Number(billServiceQualityElement.value);
    const numPeople = Number(billNumPeopleElement.value);

    const tipAmount = billAmount * serviceQualityPercent / 100 / numPeople;

    displayTipAmount(tipAmount, numPeople > 1);

    return false
}

function displayTipAmount(tipAmount, isMultiple) {
    outputTipAmountTextElement.innerText = 'TIP AMOUNT';
    outputTipDisplayElement.innerText = '$' + tipAmount.toFixed(2);
    outputTipEachTextElement.innerText = isMultiple ? 'each' : ''
}