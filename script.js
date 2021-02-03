const messageBtn = document.querySelector('#messageBtn');
let messageIn = document.querySelector('#messageIn');
let messageOut = document.querySelector('#messageOut');

messageBtn.addEventListener('click', sendMsg);

function sendMsg() {
    let content = messageIn.value;
    // console.log(content);
    if (content === '') {
        alert('Enter your message here,please!');
    } else {
        messageOut.innerHTML = `<blockquote>${content}</blockquote>`;
        messageIn.value = '';
    }
}