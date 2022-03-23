//Froggy Translator

const froggyWords = ["Croac", "Crooac", "Croaac", "Crooaac", "Ribbit", "Riibbit", "Riibbiit", "Cruac","Ribitti", "Ribbitis", "Croaaac", "Crokity"];

const humanWords = ["Te", "Amo", "Adoro", "hasta", "en", "idioma", "sapito","Dame", "un", "beso","atte", "Primo"];

const finalText = () => {
  let tradText = document.getElementById("origin-text").value;
  const traArray = tradText.split(" ");
  let tradArray = []
  for (let trad of traArray) {
    toUpperText = trad.charAt(0).toUpperCase() + trad.substr(1);
    tradArray.push(toUpperText)
  }    
  let ribbityText = [];
  const tradFunct = () => {
    for (let i = 0; i < tradArray.length; i++){let indexNumb = froggyWords.indexOf(tradArray[i]);
      if (humanWords[indexNumb] === undefined)  {
        ribbityText.push("PalabraNoExistenteEnIdiomaSapo")
      }
      else {
        ribbityText.push(humanWords[indexNumb])
      }
    }
  }


  tradFunct();
  let finalSentence = ribbityText.join(" ");
  return finalSentence;
}

function toHTML() {
  document.getElementById("traduccion").placeholder = finalText();
}