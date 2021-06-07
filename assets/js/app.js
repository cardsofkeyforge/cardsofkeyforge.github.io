function ready(callbackFunction) {
  if (document.readyState !== 'loading')
    callbackFunction()
  else
    document.addEventListener("DOMContentLoaded", callbackFunction)
}

ready(() => {
  if (document.location.href === 'https://site.cardsofkeyforge.com/cota/275/') {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(this.response);
      }
    });

    xhr.open("GET", "https://api.cardsofkeyforge.com/cards?name=Miasma");

    xhr.send();
  }
})
