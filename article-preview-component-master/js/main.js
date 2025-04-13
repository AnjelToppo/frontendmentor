const shareBtnEl = document.getElementsByClassName('share-btn')[0];
const shareToastEl = document.getElementsByClassName('share-toaster')[0];
const mobileShareBtn = document.getElementsByClassName('mobile-share-btn')[0];
const userEl = document.getElementsByClassName('user')[0];

console.log(shareToastEl, userEl.style.display);
shareBtnEl.addEventListener('click', (e) => {
    userEl.style.display = 'none';
    shareBtnEl.style.display = 'none';
    if (shareToastEl.style.display === 'block') {
        return shareToastEl.style.display = 'none'
    }
    shareToastEl.style.display = 'block';
})

mobileShareBtn.addEventListener('click', (e) => {
    userEl.style.display = 'none';
    shareBtnEl.style.display = 'flex';
    shareToastEl.style.display = 'none';
    if (shareToastEl.style.display === 'none') {
        return userEl.style.display = 'flex';
    }
})