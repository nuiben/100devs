document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const apiKey = '' // TODO: get your own key :) -> https://api.nasa.gov/
    const choice = document.querySelector('input').value
    console.log(choice)

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            if( data.media_type === 'image' ){
            document.querySelector('img').src = data.hdurl
            document.querySelector('iframe').src = ''
            }else if(data.media_type === 'video'){
            document.querySelector('img').src = ''
            document.querySelector('iframe').src = data.url
            }

            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
