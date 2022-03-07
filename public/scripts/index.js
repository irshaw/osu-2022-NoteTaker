const noteForm = document.getElementById('note-form');
const notesContainer = document.getElementById('note-container');

const createCard = (note) => {
  // Create card
  const cardEl = document.createElement('div');
  cardEl.classList.add('card', 'mb-3');
  cardEl.setAttribute('key', note.note_id);

  // Create card header
  const cardHeaderEl = document.createElement('h4');
  cardHeaderEl.classList.add(
    'card-header',
    'bg-primary',
    'text-light',
    'p-2',
    'm-0'
  );
  cardHeaderEl.innerHTML = `${note.username} </br>`;

  // Create card body
  const cardBodyEl = document.createElement('div');
  cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
  cardBodyEl.innerHTML = `<p>${note.note}</p>`;

  // Append the header and body to the card element
  cardEl.appendChild(cardHeaderEl);
  cardEl.appendChild(cardBodyEl);

  // Append the card element to the tips container in the DOM
  notesContainer.appendChild(cardEl);
};

// Get a list of existing tips from the server
const getTips = () =>
  fetch('api/apiRoutes', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });

// Post a new tip to the page
const postTip = (note) =>
  fetch('api/apiRoutes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tip),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data);
      createCard(note);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

// When the page loads, get all the tips
getNotes().then((data) => data.forEach((note) => createCard(note)));

// Function to handle when a user submits the feedback form
const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log('Form submit invoked');

  // Get the value of the tip and save it to a variable
  const noteContent = document.getElementById('noteText').value;

  // get the value of the username and save it to a variable
  const noteUsername = document.getElementById('noteUsername').value.trim();

  // Create an object with the tip and username
  const newNote = {
    username: noteUsername,
    topic: 'UX',
    tip: noteContent,
  };

  // Make a fetch POST request to the server
  postNote(newNote);
};

// Listen for when the form is submitted
noteForm.addEventListener('submit', handleFormSubmit);
