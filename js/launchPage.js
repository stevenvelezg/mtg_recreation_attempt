function setDeckP1() {
  var deckNum = document.getElementById('deckSelect1').value;
  if (deckNum == 1) {
    Cookies.set("Deck P1", 1);
    console.log(deckNum + "This is one");
  }
  else if (deckNum == 2) {
    Cookies.set("Deck P1", 2);
    console.log(deckNum + "This is two");
  }
  else if (deckNum == 3) {
    Cookies.set("Deck P1", 3);
    console.log(deckNum + "This is three");
  }
  else if (deckNum == 4) {
    Cookies.set("Deck P1", 4);
    console.log(deckNum + "This is four");
  }
  else if (deckNum == 5) {
    Cookies.set("Deck P1", 5);
    console.log(deckNum + "This is five");
  }
  else if (deckNum == 6) {
    Cookies.set("Deck P1", 6);
    console.log(deckNum + "This is six");
  }
  else {
    alert("Error 418: I'm a teapot! But nah, not a deck number, try again!")
  }
}

function setDeckP2() {
  var deckNum = document.getElementById('deckSelect2').value;
  if (deckNum == 1) {
    Cookies.set("Deck P2", 1);
    console.log(deckNum + "This is one for 2");
  }
  else if (deckNum == 2) {
    Cookies.set("Deck P2", 1);
    console.log(deckNum + "This is two for 2");
  }
  else if (deckNum == 3) {
    Cookies.set("Deck P2", 1);
    console.log(deckNum + "This is three for 2");
  }
  else if (deckNum == 4) {
    Cookies.set("Deck P2", 1);
    console.log(deckNum + "This is four for 2");
  }
  else if (deckNum == 5) {
    Cookies.set("Deck P2", 1);
    console.log(deckNum + "This is five for 2");
  }
  else if (deckNum == 6) {
    Cookies.set("Deck P2", 1);
    console.log(deckNum + "This is six for 2");
  }
  else {
    alert("Error 418: I'm a teapot! But nah, not a deck number, try again!")
  }
}
