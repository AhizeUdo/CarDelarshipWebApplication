const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('hamburger-navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
    closenavmain.style.display = 'flex'
    // closenavmain.style.width = 
});

// alert('Welcome')

const closenav = document.getElementById('closeXnavigation');
const closenavmain = document.getElementById('navpackethidden');

closenav.addEventListener('click', () => {
    closenavmain.style.display = 'none'
});
