document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const key = '29aa1cb4f2mshc2febcc04cd6998p17b01fjsn40db3a0ddb62'
    const latitude = document.getElementById('latitude').value
    const longitude = document.getElementById('longitude').value

    const url = `https://isitwater-com.p.rapidapi.com/?latitude=${latitude}&longitude=${longitude}&rapidapi-key=${key}`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        // document.querySelector('img').src = data.sprites.front_default
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

console.log()
