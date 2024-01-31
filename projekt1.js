
function reverse2(quote) {
  let resultat = ""
  for(i = quote.length-1 ; i >= 0; i--){
   resultat += quote[i]; 
  }
  return resultat
}

const quoteInputEl = document.getElementById("inputQuote");
const quoteButtonEl = document.getElementById("buttonQuote");
const quoteOutputEl = document.getElementById("outputQuote");

quoteButtonEl.addEventListener("click", function() {
  const inputSentence = quoteInputEl.value;
  const reversedSentence = reverse2(inputSentence);
  quoteOutputEl.innerHTML += reversedSentence + "<br>";
});

