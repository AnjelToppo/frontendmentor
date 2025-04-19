const form = document.getElementsByClassName('tip-calculator')[0];
let selectedTip = document.getElementById('selected-tip');
const resetBtnEl = document.getElementsByClassName('reset-btn')[0];

const setSelectedTip = document.querySelectorAll('#selected-tip input');
const customSelectedTip = document.querySelector('#selected-tip input[type=number]')

const tipAmountEl = document.getElementsByClassName('tip__amount')[0];
const totalAmountEl = document.getElementsByClassName('total__amount')[0];


function activateReset() {
    resetBtnEl.disabled = false;
}

const billAmount = document.getElementById('bill-amount');
billAmount.addEventListener('keyup', (e) => {
    activateReset();
    displayResult();
})

const peopleCount = document.getElementById('people-count');
peopleCount.addEventListener('keyup', (e) => {
    activateReset();
    displayResult();

})

form.addEventListener('reset', (e) => {
    selectedTip.dataset.selectedTip = '';
    totalAmountEl.textContent = '$0.00';
    tipAmountEl.textContent = '$0.00';
    resetBtnEl.disabled = true;
})

setSelectedTip.forEach(input => {
    input.addEventListener('click', (e) => {
        customSelectedTip.value = '';
        selectedTip.dataset.selectedTip = e.target.value.includes('%') ?  e.target.value : '';
        activateReset();
        displayResult();
    })

})

function displayResult() {
    let tipPercentage = selectedTip.dataset.selectedTip?.includes('%') ?  selectedTip.dataset.selectedTip.replace('%', '') / 100 : '';
    console.log(tipPercentage)
    if (billAmount.value.trim() === '' || +billAmount.value === 0 || selectedTip.dataset.selectedTip.length <= 1 || peopleCount.value === '' || +peopleCount.value === 0 ) {
        totalAmountEl.textContent = '$0.00';
        tipAmountEl.textContent = '$0.00';
    } else if (+billAmount.value && +peopleCount.value ) {
        let amt = `${(+billAmount.value * tipPercentage) / +peopleCount.value}`;
        let getIntegerAmt = Math.trunc(+amt)
        let getFractionAmt = amt.includes('.') ? amt.slice(amt.indexOf('.'), amt.indexOf('.') + 3) : '';
        let tipPerPerson = `${getIntegerAmt}${getFractionAmt}`
        if (amt === '0') {
            tipAmountEl.textContent = '$0.00';
        } else {
            tipAmountEl.textContent = `$${tipPerPerson}`;
        }

        let totalAmount = (+amt * +peopleCount.value + +billAmount.value) / +peopleCount.value;
        console.log(totalAmount, totalAmount.toFixed(2))
        totalAmountEl.textContent = `$${totalAmount.toFixed(2)}`;
    }

}
customSelectedTip.addEventListener('keyup', (e) => {
    selectedTip.dataset.selectedTip = `${e.target.value}%`;
    displayResult();
})
