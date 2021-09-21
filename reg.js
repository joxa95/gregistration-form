const username1 = document.querySelector('#username1');
const username2 = document.querySelector('#username2');
const pasword1 = document.querySelector('#pasword1');
const pasword2 = document.querySelector('#pasword2');
const Phone1 = document.querySelector('#Phone1');
const Phone2 = document.querySelector('#Phone2');
const btn = document.querySelector('.box_btn');

const submit = function () {
	username2.innerHTML = username1.value;
	pasword2.innerHTML = pasword1.value;
	Phone2.innerHTML = Phone1.value;
};
btn.addEventListener('click', r => {
	submit(), (username1.value = ''), (pasword1.value = ''), (Phone1.value = '');
});

Phone1.addEventListener('click', f => {
	Phone1.value = '+';
});
