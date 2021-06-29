function ready(callbackFunction) {
  if (document.readyState !== 'loading')
    callbackFunction()
  else
    document.addEventListener("DOMContentLoaded", callbackFunction)
}

ready(() => {
  const setMap = {
    "cota": "https://archonarcana.com/images/thumb/0/0d/Cota.png/19px-Cota.png",
    "aoa": "https://archonarcana.com/images/thumb/a/a9/Aoa.png/19px-Aoa.png",
    "wc": "https://archonarcana.com/images/thumb/b/b7/Wc.png/19px-Wc.png",
    "mm": "https://archonarcana.com/images/thumb/e/e7/Mm.png/19px-Mm.png",
    "dt": "https://archonarcana.com/images/thumb/0/03/Dt.png/19px-Dt.png",
    "rotk": "https://raw.githubusercontent.com/cardsofkeyforge/cardsofkeyforge.github.io/master/rotk/rotk.png",
    "tac": "https://raw.githubusercontent.com/cardsofkeyforge/cardsofkeyforge.github.io/master/tac/tac.png"
  };

  if (document.location.href.match(/\/[A\d]\d\d\/$/) != null) {
    const cardName = document.getElementsByTagName("h2")[0].textContent;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        const cards = JSON.parse(this.response);
        let sets = "";
        cards
          .filter(c => c.card_title === cardName)
          .forEach(c => {
            let setName = c.set.replace(/anomaly/, "wc");
            sets += `<a href="/${setName}/${c.card_number}"><img src="${setMap[setName]}" alt="${setName}" style="background-color: gray; border-radius: 14px; padding: 5px; --darkreader-inline-bgcolor:#60686c;" data-darkreader-inline-bgcolor=""></a>`;
          });
        document.getElementsByTagName("td")[1].innerHTML = sets;
      }
    });

    xhr.open("GET", "https://api.cardsofkeyforge.com/cards?name=" + cardName);

    xhr.send();
  }
})
