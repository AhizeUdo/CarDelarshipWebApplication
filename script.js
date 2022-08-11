const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('hamburger-navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
});

// alert('Welcome')