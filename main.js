let editButton = document.getElementById("newQuote")

editButton.addEventListener("click", () => {
  displayNewQuote()
})

let displayNewQuote = () => {
  // your code here!
  document.body.style.backgroundColor = "pink"

  let charactersNode = document.getElementById("character-section")
  let character = charactersNode.children[1]
  character.textContent = "Homer"

  let quotes = document.querySelector("#quotes-section")
  let quoteToRemove = quotes.children[1].children[0]
  let parentOfQuote = quoteToRemove.parentElement
  parentOfQuote.removeChild(quoteToRemove)
}
