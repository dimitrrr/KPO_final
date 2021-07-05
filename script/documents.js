function showTab(event) {
    document.querySelector('.show-tab').classList.remove('show-tab');
    document.querySelector('.active-tab').classList.remove('active-tab');

    let button = event.target;
    button.classList.add('active-tab');
    let buttonClass = event.target.classList[1];
    let content = document.querySelectorAll('.' + buttonClass)[1];
    content.classList.add('show-tab');
}

function defaultHide() {
    let a = document.querySelectorAll('.content');
    a.forEach(
        function addClass(info) {
            info.classList.add('js-default-hide');
        }
    )
}

let tabButton = document.getElementsByClassName('tab');

for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].addEventListener('click', showTab);
}

window.addEventListener('load', defaultHide);

let url_string = window.location.href;
let url = new URL(url_string);
let c = url.searchParams.get("a");
if(c) {
    document.querySelectorAll('.tab').forEach(el => el.classList.remove('active-tab'));
    document.querySelectorAll('.content').forEach(el => el.classList.remove('show-tab'));
    document.querySelector(`.tab.${c}`).classList.add('active-tab');
    document.querySelector(`.content.${c}`).classList.add('show-tab');
}