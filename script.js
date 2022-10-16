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


const hidden_section_parent = document.getElementById('hidden-section-parent');
const hidden_section = document.querySelector('.hidden-section');
hidden_section.style.display = 'block';
hidden_section.style.backgroundColor = 'red';
hidden_section.style.height = '300px'; 
hidden_section.style.color = 'white';



const contactFormfirstname = document.createElement('label');
contactFormfirstname.for = 'lname';
contactFormfirstname.type = 'text';
contactFormfirstname.name = 'firstname';
contactFormfirstname.placeholder = 'Your name...'

const contactFormlastname = document.createElement('label');
contactFormlastname.for = 'lname';
contactFormlastname.type = 'text';
contactFormlastname.name = 'firstname';
contactFormlastname.placeholder = 'Your last name...'

hidden_section.appendChild(contactFormlastname)
hidden_section.appendChild(contactFormfirstname)

console.log(hidden_section)
console.log(contactFormlastname)