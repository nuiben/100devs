document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const pokemon = document.querySelector('input').value

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.sprites.front_default
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

console.log()
