const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
const form = document.querySelector('#form');
let db;
window.onload = function() {
        let request = window.indexedDB.open('notes_db', 1);         //This line creates a request to open version 1 of a database called notes_db.
            request.onsuccess = function() {                        //For Data BasE Connectivity
                console.log('Database opened successfully');
                db = request.result;                                //an object representing the opened database becomes available in the request.result property, allowing us to manipulate the database.
            };
        form.onsubmit = addData;
function addData(e) {
  e.preventDefault();
  let newItem = { title: titleInput.value, body: bodyInput.value };
  let transaction = db.transaction(['notes_os'], 'readwrite');
  let objectStore = transaction.objectStore('notes_os');
  let request = objectStore.add(newItem);
  request.onsuccess = function() {
    titleInput.value = '';
    bodyInput.value = '';
  };
  transaction.oncomplete = function() {
    console.log('Transaction completed: database modification finished.');
    displayData();
  };

  transaction.onerror = function() {
    console.log('Transaction not opened due to error');
  };
}

function displayData() {
  alert("data Store");
}
};















