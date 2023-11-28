document.querySelector('button').addEventListener('click', getFetch)


function getFetch() {
    const url = `https://corporatebs-generator.sameerkumar.website/`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.phrase
    })
    .catch(error => console.error('Error:', error));
}
