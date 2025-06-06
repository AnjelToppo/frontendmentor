const emailContainerEl = document.getElementsByClassName('email-container')[0];
const emailErrorEl = document.getElementsByClassName('email-error')[0];
const contactFormEl = document.getElementsByClassName('contact-form')[0];
const emailInputEl = document.querySelector('[name="email"]');
const emailErrorIconEl = document.getElementsByClassName('error-icon')[0];

function showEmailError() {
    emailInputEl.classList.remove('h-full');
    emailInputEl.classList.add('max-h-full');
    emailContainerEl.classList.add('relative', 'p-[2px]', 'bg-red-400', 'rounded-[5px]', 'flex', 'flex-col', 'gap-[4px]', 'pb-[6px]');
    emailErrorIconEl.removeAttribute('hidden');
    emailErrorEl.removeAttribute('hidden');
}

function hideEmailError() {
    emailInputEl.classList.add('h-full');
    emailInputEl.classList.remove('max-h-full');
    emailContainerEl.classList.remove('relative', 'p-[2px]', 'bg-red-400', 'rounded-[5px]', 'flex', 'flex-col', 'gap-[4px]', 'pb-[6px]');
    emailErrorIconEl.setAttribute('hidden', '');
    emailErrorEl.setAttribute('hidden', '');
}

function validateEmail(email) {
    const isValidEmail = /\S+@\S+\.\S+/;
    return isValidEmail.test(email)
}

contactFormEl.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateEmail(emailInputEl.value)) {
        showEmailError();
    }
    if (validateEmail(emailInputEl.value)) {
        contactFormEl.reset();
        hideEmailError();
    }
});

emailInputEl.addEventListener('keyup', e => {
    hideEmailError();
})