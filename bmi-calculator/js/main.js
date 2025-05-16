let unitEl = document.getElementsByClassName("unit-fieldset")[0];
const metricInputEl = document.getElementById("metric");
const imperialInputEl = document.getElementById("imperial");

const heightCmEl = document.querySelector("input[name='height-cm']");
const weightKgEl = document.querySelector("input[name='weight-kg']");
const heightFtEl = document.querySelector("input[name='height-ft']");
const heightInEl = document.querySelector("input[name='height-in']");
const weightStEl = document.querySelector("input[name='weight-st']");
const weightLbsEl = document.querySelector("input[name='weight-lbs']");

const resultEl = document.getElementsByClassName('welcome-result')[0];
const bmiEl= document.querySelector(".result__text span");
const classificationEl = document.getElementsByClassName("classification")[0];
const weightRangeEl = document.getElementsByClassName("weight-range")[0];

let heightCm;
let weightKg;
let heightFt = '';
let heightIn = '';
let weightSt = '';
let weightLbs = '';

function calculateBmi(height, weight, unit) {
    if (unit === "metric") {
        const num = +(Math.round((weight / (height * height)) * 10) / 10).toFixed(1)
        return num.toFixed(1)
    } else if (unit === "imperial") {
        const num = +(Math.round((weight * 703) / (height * height) * 10) / 10).toFixed(1)
        return num.toFixed(1)
    }
}

function heightCmToM(height) {
    return height / 100
}

function heightFtToIn(height) {
    return height * 12
}

function weightStToLbs(weight) {
    return weight * 14
}

function showResultMetric(height, weight) {
    if (!height || !weight) {
        resultEl.dataset.show = 'welcome'
        return
    }
    const bmi = calculateBmi(heightCmToM(+height), +weight, 'metric');
    if (+bmi === Infinity || isNaN(+bmi)) return;
    healthClassification(bmi);
    idealWeightRangeMetric(heightCmToM(+height));
    bmiEl.innerHTML = bmi;
    resultEl.dataset.show = 'result';
}

function showResultImperial(heightFt, heightIn, weightSt, weightLbs) {
    let height = heightFtToIn(heightFt) + heightIn;
    let weight = weightStToLbs(weightSt) + weightLbs;
    if (!height || !weight) {
        resultEl.dataset.show = 'welcome';
        return
    }
    const bmi = calculateBmi(+height, +weight, 'imperial');
    healthClassification(bmi);
    idealWeightRangeImperial(height);
    bmiEl.innerHTML = bmi;
    resultEl.dataset.show = 'result';
}
function healthClassification(bmi) {
    if (bmi < 18.5) {
        classificationEl.innerHTML = 'underweight';
    } else if (bmi < 25) {
        classificationEl.innerHTML = 'healthy weight';
    } else if (bmi < 30) {
        classificationEl.innerHTML = 'overweight';
    } else {
        classificationEl.innerHTML = 'obese';
    }
}

function idealWeightRangeMetric(height) {
    const lowerWeight = (height * height * 18.5).toFixed(1);
    const upperWeight = (height * height * 24.9).toFixed(1);
    weightRangeEl.innerHTML = `${lowerWeight}kgs - ${upperWeight}kgs.`;
}

function idealWeightRangeImperial(height) {
    const lowerIdealWeightLbs = ((height * height * 18.5) / 703) / 14;
    const lowerWeightSt = Math.trunc(lowerIdealWeightLbs);
    const lowerWeightLbs = Math.trunc(+`0.${Math.trunc((lowerIdealWeightLbs - Math.floor(lowerIdealWeightLbs)) * 100)}` * 14);

    const upperIdealWeightLbs = ((height * height * 24.9) / 703) / 14;
    const upperWeightSt = Math.trunc(upperIdealWeightLbs);
    const upperWeightLbs = Math.trunc(+`0.${Math.trunc((upperIdealWeightLbs - Math.floor(upperIdealWeightLbs)) * 100)}` * 14);
    weightRangeEl.innerHTML = `${lowerWeightSt}st ${lowerWeightLbs}lbs - ${upperWeightSt}st ${upperWeightLbs}lbs.`;
}

function resetInput() {
    weightKg = ''
    heightCm = ''
    heightCmEl.value = '';
    heightFtEl.value = '';
    heightInEl.value = '';
    weightKgEl.value = '';
    weightStEl.value = '';
    weightLbsEl.value = '';
    resultEl.dataset.show = 'welcome';
}

metricInputEl.addEventListener("change", (event) => {
    resetInput();
    unitEl.dataset.unit = "metric";
})

imperialInputEl.addEventListener("change", (event) => {
    resetInput();
    unitEl.dataset.unit = "imperial";
})

heightCmEl.addEventListener("keyup", (e) => {
    heightCm = e.target.value.trim();
    showResultMetric(+heightCm, +weightKg);
})

weightKgEl.addEventListener("keyup", (e) => {
    weightKg = e.target.value.trim();
    showResultMetric(+heightCm, +weightKg);
})

heightFtEl.addEventListener("keyup", (e) => {
    heightFt = e.target.value.trim();
    showResultImperial(+heightFt, +heightIn, +weightSt, +weightLbs);
})

heightInEl.addEventListener("keyup", (e) => {
    heightIn = e.target.value.trim();
    showResultImperial(+heightFt, +heightIn, +weightSt, +weightLbs);
})

weightStEl.addEventListener("keyup", (e) => {
    weightSt = e.target.value.trim();
    showResultImperial(+heightFt, +heightIn, +weightSt, +weightLbs);
})

weightLbsEl.addEventListener("keyup", (e) => {
    weightLbs = e.target.value.trim();
    showResultImperial(+heightFt, +heightIn, +weightSt, +weightLbs);
})

