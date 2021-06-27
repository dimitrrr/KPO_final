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

var tabButton = document.getElementsByClassName('tab');

for (var i = 0; i < tabButton.length; i++) {
    tabButton[i].addEventListener('click', showTab);
}

window.addEventListener('load', defaultHide);
