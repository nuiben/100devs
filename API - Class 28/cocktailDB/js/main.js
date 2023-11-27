//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
document.querySelector('button').addEventListener('click', getDrink)

function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
}


function getDrink() {
    let drink = document.querySelector('input').value
    if (hasWhiteSpace(drink)) {
        drink = drink.replace(" ", "%20")
    }
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)
        // document.querySelector('h2').innerText = data.drinks[0].strDrink
        // document.querySelector('img').src = data.drinks[0].strDrinkThumb
        // document.querySelector('h3').innerText = data.drinks[0].strInstructions
        createCarouselItems(data.drinks);
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}

function createCarouselItems(items) {
    const carouselContainer = document.getElementById('carousel');

    items.forEach((item, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
      const image = document.createElement('img');
      const instructions = document.createElement('h3')
      image.src = item.strDrinkThumb;
      image.alt = item.strDrink;
      carouselItem.appendChild(image);
      carouselItem.appendChild(instructions);
      instructions.innerText = item.strInstructions;
      carouselContainer.appendChild(carouselItem);
    });
}


let index = 0;

function showNextItem() {
  let items = document.querySelectorAll('.carousel-item');
  if (items.length == 0) return;

  // Remove 'active' class from current item
  items[index].classList.remove('active');

  // Increment index
  index = (index + 1) % items.length;

  // Add 'active' class to next item
  items[index].classList.add('active');
  console.log(items[index].firstChild)
  document.querySelector('h2').innerText = items[index].firstChild.alt;
}

// Set interval for carousel to change
setInterval(showNextItem, 3000); // Change every 3 seconds
