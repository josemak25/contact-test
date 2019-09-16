const DATABASE_URI = 'http://localhost:3000/contacts';

// get data from our backend
const getContact = async () => {
  const response = await fetch(DATABASE_URI);
  const contacts = await response.json();
  populateContacts(contacts);

  // get button actions from page and register event listeners
  const editContacts = document.querySelectorAll('#edit');

  const deleteContacts = document.querySelectorAll('#delete');

  // register button actions
  editContacts.forEach(button =>
    button.addEventListener('click', () => {
      console.log('edit');
    })
  );

  deleteContacts.forEach(button =>
    button.addEventListener('click', () => {
      console.log('delete');
    })
  );
};

// get data and populate our page with data
const populateContacts = contacts => {
  const formatedContacts = contacts.map(formatContact);
  const displayContacts = document.querySelector('.display-contacts');

  displayContacts.innerHTML += formatedContacts.join('');
};

// get single contact data and formate it
const formatContact = ({ firstName, lastName, phone }) => {
  return `
  <div class='contact'> 
      <div> ${firstName} ${lastName}</div>
      <div> ${phone}</div>
      <div class='edit-contact'>
            <button id='edit'>Edit</button>
            <button id='delete'>Delete</button>
      </div>
  </div>
  `;
};

$(document).ready(getContact);
