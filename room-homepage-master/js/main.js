const allPrevBtnEl = document.querySelectorAll('[aria-label="previous"]');
const allNextBtnEl = document.querySelectorAll('[aria-label="next"]');

const allHeroImages = document.querySelectorAll('.hero__image');
const allHeroContents = document.querySelectorAll('.hero__content');

let currentTab = 0;

allPrevBtnEl.forEach(prevBtnEl => {
    prevBtnEl.addEventListener('click', (e) => {
        if (currentTab > 0) {
            currentTab = currentTab - 1;
        }

        allHeroImages.forEach(heroImage => {
            heroImage.setAttribute('hidden', true);
        })
        allHeroImages[currentTab].removeAttribute('hidden');

        allHeroContents.forEach(heroContent => {
            heroContent.setAttribute('hidden', true)
        })
        allHeroContents[currentTab].removeAttribute('hidden');
    })
})

allNextBtnEl.forEach(nextBtnEl => {
    nextBtnEl.addEventListener('click', (e) => {
        if (currentTab < allHeroContents.length - 1) {
            currentTab = currentTab + 1;
        }

        allHeroImages.forEach(heroImage => {
            heroImage.setAttribute('hidden', true);
        })
        allHeroImages[currentTab].removeAttribute('hidden');

        allHeroContents.forEach(heroContent => {
            heroContent.setAttribute('hidden', true)
        })
        allHeroContents[currentTab].removeAttribute('hidden');
    })
})
