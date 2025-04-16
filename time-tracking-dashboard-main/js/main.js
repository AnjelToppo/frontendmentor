const selectedRoutine = document.querySelector("[data-routine]");
const dailyBtn = document.getElementsByClassName("daily-btn")[0];
const weeklyBtn = document.getElementsByClassName("weekly-btn")[0];
const monthlyBtn = document.getElementsByClassName("monthly-btn")[0];

const board = document.getElementsByClassName("board")[0];

function formatHour(hour) {
    return Number(hour) > 1 ? 'hrs': 'hr'
}

function appendItem(item) {
    const activity = item.title.toLowerCase().replace(' ', '-');
    const routineFor = item.timeframes[selectedRoutine.dataset.routine];
    const routineCurrent = routineFor.current;
    const routinePrevious = routineFor.previous;

    let formatPrevious = '';

    if (selectedRoutine.dataset.routine === 'daily')
        formatPrevious = `Yesterday - ${routinePrevious}${formatHour(routinePrevious)}`;
    else if (selectedRoutine.dataset.routine === 'weekly')
        formatPrevious = `Last Week - ${routinePrevious}${formatHour(routinePrevious)}`
    else if (selectedRoutine.dataset.routine === 'monthly')
        formatPrevious = `Last Month - ${routinePrevious}${formatHour(routinePrevious)}`

    board.innerHTML += `<div class="card--${activity}">
        <div class="board__content">
            <div class="board__title">
              <span class="activity">${item.title}</span>
              <button class="more-btn"><svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg></button>
            </div>
            <div class="board__data">
              <time class="time">${routineCurrent}${formatHour(routineCurrent)}</time>
              <span class="previous-time">${formatPrevious}</span>
            </div>
        </div>
      </div>`
}

function populateDOM (data) {
    data.forEach(item => {
        appendItem(item);
    })
}

function fetchActivityData() {
    fetch('../data.json').then(response => {
        if (!response.ok) return console.log('Oops! Something went wrong!');
        return response.json();
    }).then(data => {
        board.innerHTML = '';
        populateDOM(data)
    })
}

fetchActivityData();

dailyBtn.addEventListener("click", () => {
    selectedRoutine.dataset.routine = 'daily';
    fetchActivityData();
})

weeklyBtn.addEventListener("click", () => {
    selectedRoutine.dataset.routine = 'weekly';
    fetchActivityData();
})

monthlyBtn.addEventListener("click", () => {
    selectedRoutine.dataset.routine = 'monthly';
    fetchActivityData();
})



