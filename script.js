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
packetForms.style.padding = '20px'


const hidden_section_parent = document.getElementById('hidden-section-parent');
const hidden_section = document.querySelector('.hidden-section');
hidden_section.style.display = 'flex';
// hidden_section.style.backgroundColor = 'red';
hidden_section.style.height = '100%'; 
hidden_section.style.color = 'black';



const contactFormfirstname = document.createElement('input');
contactFormfirstname.className = 'input'
const contactFormFNlabel = document.createElement('label');
contactFormFNlabel.for = 'fname';
contactFormFNlabel.style.color = 'black';
contactFormFNlabel.innerHTML = 'First Name';
contactFormFNlabel.style.fontSize = '15px';
contactFormfirstname.type = 'text';
contactFormfirstname.name = 'firstname';
contactFormfirstname.placeholder = 'Your name...';

const contactFormlastname = document.createElement('input');
contactFormlastname.className = 'input'
const contactFormLNlabel = document.createElement('label');
contactFormLNlabel.for = 'lname';
contactFormLNlabel.innerHTML = 'Last Name';
contactFormLNlabel.style.color = 'black';
contactFormLNlabel.style.fontSize = '15px';
contactFormlastname.type = 'text';
contactFormlastname.name = 'firstname';
contactFormlastname.placeholder = 'Your last name...';

const contactsFormCNlabel = document.createElement('label');
contactsFormCNlabel.for = 'country';
contactsFormCNlabel.innerHTML = 'Country';

const contactFormSelect = document.createElement('select')
contactFormSelect.className = 'input'
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


const contactFormLabelSubject = document.createElement('label');
contactFormLabelSubject.for = 'country';
contactFormLabelSubject.innerHTML = 'Subject';

const contactFormTextarea = document.createElement('textarea');
contactFormTextarea.className = 'input'
contactFormTextarea.id = 'subject';
contactFormTextarea.name = 'subject';
contactFormTextarea.placeholder = 'Describe your choice vehicle....';
contactFormTextarea.style.height = '200px';



const contactFormInput = document.createElement('input');
contactFormInput.type = 'submit'
contactFormInput.value = 'Submit'





packetForms.appendChild(contactFormFNlabel);
packetForms.appendChild(contactFormfirstname);
packetForms.appendChild(contactFormLNlabel);
packetForms.appendChild(contactFormlastname);
packetForms.appendChild(contactFormSelect)
packetForms.appendChild(contactFormLabelSubject);
packetForms.appendChild(contactFormTextarea);
packetForms.appendChild(contactFormInput);

hidden_section.appendChild(packetForms)


console.log(hidden_section);
console.log(packetForms);
console.log(contactFormSelect);



// packetForms.style.display = 'flex';
// packetForms.style.margin - 'auto'