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



///////

const packetForms = document.createElement('form');
packetForms.style.color = 'black';


const hidden_section_parent = document.getElementById('hidden-section-parent');
const hidden_section = document.querySelector('.hidden-section');
hidden_section.style.display = 'block';
hidden_section.style.backgroundColor = 'red';
hidden_section.style.height = '300px'; 
hidden_section.style.color = 'white';



const contactFormfirstname = document.createElement('input');
const contactFormFNlabel = document.createElement('label');
contactFormFNlabel.for = 'fname';
contactFormFNlabel.style.color = 'white';
contactFormFNlabel.style.fontSize = '15px'
contactFormfirstname.type = 'text';
contactFormfirstname.name = 'firstname';
contactFormfirstname.placeholder = 'Your name...'

const contactFormlastname = document.createElement('input');
const contactFormLNlabel = document.createElement('label');
contactFormLNlabel.for = 'lname';
contactFormLNlabel.style.color = 'white';
contactFormLNlabel.style.fontSize = '15px'
contactFormlastname.type = 'text';
contactFormlastname.name = 'firstname';
contactFormlastname.placeholder = 'Your last name...';

const contactsFormCNlabel = document.createElement('label');
contactsFormCNlabel.for = 'country'

const contactFormSelect = document.createElement('select')
contactFormSelect.id = 'country';
contactFormSelect.name = 'country';

const contactFormOptionOne = document.createElement('option');
contactFormOptionOne.value = 'Australia';
contactFormOptionOne.innerHTML = 'Australia'
const contactFormOptionTwo = document.createElement('option');
contactFormOptionTwo.value = 'Canada';
contactFormOptionTwo.innerHTML = 'Canada'
const contactFormOptionThree = document.createElement('option');
contactFormOptionThree.value = 'Mexico';
contactFormOptionThree.innerHTML = 'Mexico'


const contactFormOptionArr = []
contactFormOptionArr.push(contactFormOptionOne);
contactFormOptionArr.push(contactFormOptionTwo);
contactFormOptionArr.push(contactFormOptionThree);

// console.log(contactFormOptionArr)

contactFormSelect.appendChild(contactFormOptionOne);
contactFormSelect.appendChild(contactFormOptionTwo);
contactFormSelect.appendChild(contactFormOptionThree);





packetForms.appendChild(contactFormFNlabel);
packetForms.appendChild(contactFormfirstname);
packetForms.appendChild(contactFormLNlabel);
packetForms.appendChild(contactFormlastname);
packetForms.appendChild(contactFormSelect)

hidden_section.appendChild(packetForms)


console.log(hidden_section);
console.log(packetForms);
console.log(contactFormSelect);