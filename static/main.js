document.addEventListener('DOMContentLoaded', function(){
    overviewButton = document.getElementById('overview');
    overviewButton.classList.add('active');
});

function addActiveClass(buttonId) {
    let buttons = document.querySelectorAll('.menu_item');
    let currentButton = document.getElementById(buttonId);

    console.log(buttons)
    console.log(currentButton);
    for(let button in buttons) {
        if('abcdefghijklmnopqrstuvwxyz'.indexOf(button[0]) === -1) {
            if(buttons[button].classList.contains('active')){
                buttons[button].classList.remove('active');
            }
        }
    };
    currentButton.classList.add('active');
};