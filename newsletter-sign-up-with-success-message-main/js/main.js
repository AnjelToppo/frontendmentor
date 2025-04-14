const form = document.getElementById('newsletter-form');
const emailErrorEl = document.getElementsByClassName('email-error')[0];
const emailInputEl = document.getElementsByClassName('email-input')[0];
const subscribeBtnEl = document.getElementsByClassName('subscribe-btn')[0];
const dismissBtnEl = document.getElementsByClassName('dismiss-btn')[0];
const confirmationEl = document.getElementsByClassName('confirmation-card')[0];
const userEmailEl = document.getElementsByClassName('user-email')[0];

function validateEmail(email) {
    if (email.trim() === '') return 'Email is required';

    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
        return 'Valid email required';
    }

    return ''
}

function handleSubmit(e) {
    subscribeBtnEl.blur();
    e.preventDefault();

    const formData = new FormData(e.target);
    const {email} = Object.fromEntries(formData);

    const emailErrorMessage = validateEmail(email);

    if (emailErrorMessage) {
        console.log('error')
        emailInputEl.style.color = '#FF6155';
        emailInputEl.style.backgroundColor = '#FFE7E6';
        emailInputEl.style.border = '1px solid #FF6155';
        return emailErrorEl.innerText = emailErrorMessage;
    }

    emailErrorEl.innerText = '';
    form.reset();
    form.style.display = 'none';

    userEmailEl.innerText = email;
    confirmationEl.style.display = 'flex';
}

form.addEventListener('submit', handleSubmit);

dismissBtnEl.addEventListener('click', (e) => {
    window.location.reload();
});

