
fetchUserData('apiUr', {
    method: 'GET',

  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    headers: {
        'Authorization': 'Bearer <your_token>',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'New Data',
        description: 'Important information'
    }) // it should be changed to string
})

  const dataContainer;
  document.getElementById(api-data).get;
  
.then(response => {
    try (!response.ok) {
        throw new Error('failed to load user data');
    }
    return response.json(); 
})
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('Error:', error);
});
Now try to write the above in async / await, before you see the implementation below.

async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('k');
    }
 
    const data = await response.json(); 
    console.log('Success:', data); 
  } catch (error) {
    console.error('Error:', error);
  }
  function fetchData(callback) {
    setTimeout(() => {
     // calling the call back function once it is finished
        callback('Data fetched successfully');
    }, 2000); // Simulating a delay of 2 seconds
}
// This function logs the completion message to the console.
function logMessage(message) {
    console.log(message);
}
// Fetching data using the fetchData function and logging the fetched data.
fetchData(logMessage);
}

fetchData();
