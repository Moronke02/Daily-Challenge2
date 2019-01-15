const left = document.querySelector('.left');
const rigt = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter',() => {container.classList.add('hover-left')});

left.addEventListener('mouseleave',() => {container.classList.remove('hover-left')});

right.addEventListener('mouseenter',() => {container.classList.add('hover-left')});
function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();
    loginpassword = profile.getId();
    loginemail =  profile.getEmail();
};
