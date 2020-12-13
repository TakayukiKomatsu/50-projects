const jokeBtn = document.getElementById('jokeBtn')
const joke = document.getElementById('joke')

jokeBtn.addEventListener('click', jokeGenerator)

jokeGenerator()

async function jokeGenerator() {
  const Base_API = 'https://icanhazdadjoke.com/'

  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const data = await fetch(Base_API, config)
  const jsonValue = await data.json()

  joke.innerHTML = jsonValue.joke

  console.log(jsonValue.joke)
}
