document.querySelector('button').addEventListener('click', getQuiz)


function getQuiz() {
    let subject = document.querySelector('input').value
    fetch('', {
        method: 'GET', // The method is GET, which is the default for fetch, but it's good to be explicit
        headers: {
            'Content-Type': 'application/json', // Assuming the server expects JSON
            'X-Api-Key': subject // Replace YOUR_API_KEY with your actual API key
        }
    })
    .then(response => response.json()) // Parsing the JSON response
    .then(data => console.log(data)) // Handling the data
    .catch(error => console.error('Error:', error)); // Handling any errors
}
