//Create ane event listener for when the button is clicked
document.querySelector('button').addEventListener("click", getFetch);

async function getFetch() {
    const res = await fetch(`/api`)
    const data = await res.json()

    console.log(data);
    document.querySelector("span").textContent = data.value
    document.querySelector("img").src="./assets/heads.jpg";
  }
