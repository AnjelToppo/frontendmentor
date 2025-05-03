const form = document.querySelector('.contact-form');
const fieldsetEl = document.querySelector('fieldset');

const allInputEl = document.querySelectorAll('input');
const messageEl = document.querySelector('textarea');
const allRadioEl = document.querySelectorAll('input[type="radio"]');
const consentEl = document.querySelector('input[type="checkbox"]');

const emailErrorEl = document.querySelector('#email-error');

allInputEl.forEach(input => input.addEventListener('blur', (e) => {
    if (e.target.value.trim() === '') {
        e.target.setAttribute('aria-invalid', 'true')
    }
}))

allInputEl.forEach(input => input.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
        e.target.setAttribute('aria-invalid', 'false')
    }
}))

allInputEl[2].addEventListener('blur', (e) => {
    const isValidEmail = /^\S+@\S+\.\S+$/
    if (!isValidEmail.test(e.target.value)) {
        e.target.setAttribute('aria-invalid', 'true')
    }
})

allRadioEl.forEach(input => input.addEventListener('focusout', (e) => {
    if (!e.target.checked) {
        fieldsetEl.setAttribute('aria-invalid', 'true')
    }
    if (e.target.checked) {
        fieldsetEl.setAttribute('aria-invalid', 'false')
    }
}))

allRadioEl.forEach(input => input.addEventListener('focus', (e) => {
    if (allInputEl[3].checked && allInputEl[4].checked) {
        fieldsetEl.setAttribute('aria-invalid', 'true')
    }
    if (!e.target.checked) {
        fieldsetEl.setAttribute('aria-invalid', 'false')
    }
}))

messageEl.addEventListener('blur', (e) => {
    if (e.target.value.trim() === '') {
        e.target.setAttribute('aria-invalid', 'true')
    }
})

messageEl.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
        e.target.setAttribute('aria-invalid', 'false')
    }
})

consentEl.addEventListener('focusout', (e) => {
    if (e.target.checked) {
        allInputEl[5].setAttribute('aria-invalid', 'false')
    }
    if (!e.target.checked) {
        allInputEl[5].setAttribute('aria-invalid', 'true')
    }
})

consentEl.addEventListener('focus', (e) => {
    if (e.target.checked) {
        allInputEl[5].setAttribute('aria-invalid', 'true')
    }
    if (!e.target.checked) {
        allInputEl[5].setAttribute('aria-invalid', 'false')
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const isValidEmail = /^\S+@\S+\.\S+$/

    if (data['first-name'].trim() === '') {
        allInputEl[0].setAttribute('aria-invalid', 'true');
    }
    if (data['last-name'].trim() === '') {
        allInputEl[1].setAttribute('aria-invalid', 'true');
    }
    if (data.email.trim() === '') {
        allInputEl[2].setAttribute('aria-invalid', 'true');
    }
    if (!isValidEmail.test(data.email)) {
        e.target.setAttribute('aria-invalid', 'true')
    }
    if (!data.query) {
        fieldsetEl.setAttribute('aria-invalid', 'true');
    }
    if (data.message.trim() === '') {
        messageEl.setAttribute('aria-invalid', 'true');
    }
    if (data.consent !== "on") {
        allInputEl[5].setAttribute('aria-invalid', 'true');
    }

    if (data['first-name'].trim() === ''|| data['last-name'].trim() === '' || data.email.trim() === '' || !isValidEmail.test(data.email) || !data.query || data.message.trim() === '' || !data.consent) {
        return
    }

    form.reset();
    // console.log(data);
})