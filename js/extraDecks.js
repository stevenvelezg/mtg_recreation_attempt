
Deck.prototype.populateChandraHand = function() {
  var i = 0;
  while (i <= 6) {
    var cardToHand = Math.floor(Math.random()* chandraDeck.cards.length);
    console.log(cardToHand)
    var cardCount = 1;
    if ( cardCount <= chandraDeck.cards[cardToHand].copies) {
      chandraDeck.cards[cardToHand].copies -= 1;
      document.getElementById("cardsP2").innerHTML += "<img id='c"+(i+1)+"p2' src='" chandraDeck.cards[cardToHand].source + "' onclick='putCardInPlayTez(this.id)'>";
    }
    i ++;
  }
}

Deck.prototype.populateGideonHand = function() {
  var i = 0;
  while (i <= 6) {
    var cardToHand = Math.floor(Math.random()* gideonDeck.cards.length);
    console.log(cardToHand)
    var cardCount = 1;
    if ( cardCount <= gideonDeck.cards[cardToHand].copies) {
      gideonDeck.cards[cardToHand].copies -= 1;
      document.getElementById("cardsP2").innerHTML += "<img id='c"+(i+1)+"p2' src='" + gideonDecktDeck.cards[cardToHand].source + "' onclick='putCardInPlayTez(this.id)'>";
    }
    i ++;
  }
}

Deck.prototype.populateLilianaHand = function() {
  var i = 0;
  while (i <= 6) {
    var cardToHand = Math.floor(Math.random()* lilianaDeck.cards.length);
    console.log(cardToHand)
    var cardCount = 1;
    if ( cardCount <= lilianaDeck.cards[cardToHand].copies) {
      lilianaDeck.cards[cardToHand].copies -= 1;
      document.getElementById("cardsP2").innerHTML += "<img id='c"+(i+1)+"p2' src='" + lilianaDeck.cards[cardToHand].source + "' onclick='putCardInPlayTez(this.id)'>";
    }
    i ++;
  }
}

Deck.prototype.populateNissaHand = function() {
  var i = 0;
  while (i <= 6) {
    var cardToHand = Math.floor(Math.random()* nissaDeck.cards.length);
    console.log(cardToHand)
    var cardCount = 1;
    if ( cardCount <= nissaDeck.cards[cardToHand].copies) {
      nissaDeck.cards[cardToHand].copies -= 1;
      document.getElementById("cardsP2").innerHTML += "<img id='c"+(i+1)+"p2' src='" + nissaDeck.cards[cardToHand].source + "' onclick='putCardInPlayTez(this.id)'>";
    }
    i ++;
  }
}

var chandraDeck;
var gideonDeck;
var lilianaDeck;
var nissaDeck;


  chandraDeck = new Deck();
  chandraDeck.addCard(new Card(1,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  chandraDeck.addCard(new Card(2,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  chandraDeck.addCard(new Card(3,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  chandraDeck.addCard(new Card(4,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  chandraDeck.addCard(new Card(5,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  chandraDeck.addCard(new Card(6,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  chandraDeck.addCard(new Card(7,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  chandraDeck.addCard(new Card(8,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  chandraDeck.addCard(new Card(9,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  chandraDeck.addCard(new Card(10,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  chandraDeck.addCard(new Card(11,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  chandraDeck.addCard(new Card(12,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  chandraDeck.addCard(new Card(13,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  chandraDeck.addCard(new Card(14,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  chandraDeck.addCard(new Card(15,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  chandraDeck.addCard(new Card(16,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  chandraDeck.addCard(new Card(17,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  chandraDeck.addCard(new Card(18,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  chandraDeck.addCard(new Card(19,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  chandraDeck.addCard(new Card(20,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  chandraDeck.addCard(new Card(21,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(22,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(23,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(24,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(25,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(26,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(27,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(28,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(29,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(30,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(31,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(32,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(33,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(34,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(35,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(36,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(37,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(38,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(39,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(40,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(41,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(42,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(43,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(44,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(45,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(46,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(47,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(48,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(49,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(50,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(51,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(52,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(53,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(54,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(55,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(56,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(57,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(58,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.addCard(new Card(58,0,0,0,0,1,"img/Chandra_Deck/.jpeg";
  chandraDeck.populateChandraHand();

  gideonDeck = new Deck();
  gideonDeck.addCard(new Card(1,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  gideonDeck.addCard(new Card(2,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  gideonDeck.addCard(new Card(3,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  gideonDeck.addCard(new Card(4,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  gideonDeck.addCard(new Card(5,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  gideonDeck.addCard(new Card(6,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  gideonDeck.addCard(new Card(7,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  gideonDeck.addCard(new Card(8,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  gideonDeck.addCard(new Card(9,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  gideonDeck.addCard(new Card(10,0,0,0,0,1,"img/Basic_Lands/mountain.jpeg";
  gideonDeck.addCard(new Card(11,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  gideonDeck.addCard(new Card(12,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  gideonDeck.addCard(new Card(13,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  gideonDeck.addCard(new Card(14,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  gideonDeck.addCard(new Card(15,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  gideonDeck.addCard(new Card(16,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  gideonDeck.addCard(new Card(17,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  gideonDeck.addCard(new Card(18,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  gideonDeck.addCard(new Card(19,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  gideonDeck.addCard(new Card(20,0,0,0,0,1,"img/Basic_Lands/plains.jpeg";
  gideonDeck.addCard(new Card(21,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(22,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(23,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(24,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(25,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(26,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(27,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(28,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(29,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(30,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(31,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(32,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(33,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(34,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(35,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(36,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(37,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(38,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(39,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(40,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(41,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(42,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(43,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(44,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(45,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(46,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(47,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(48,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(49,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(50,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(51,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(52,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(53,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(54,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(55,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(56,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(57,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(58,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.addCard(new Card(58,0,0,0,0,1,"img/Gideon_Deck/.jpeg";
  gideonDeck.populateGideonHand();

  lilianaDeck = new Deck();
  lilianaDeck.addCard(new Card(1,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg";
  lilianaDeck.addCard(new Card(2,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg";
  lilianaDeck.addCard(new Card(3,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg";
  lilianaDeck.addCard(new Card(4,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg";
  lilianaDeck.addCard(new Card(5,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg";
  lilianaDeck.addCard(new Card(6,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg";
  lilianaDeck.addCard(new Card(7,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg";
  lilianaDeck.addCard(new Card(8,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg";
  lilianaDeck.addCard(new Card(9,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg";
  lilianaDeck.addCard(new Card(10,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg";
  lilianaDeck.addCard(new Card(11,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  lilianaDeck.addCard(new Card(12,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  lilianaDeck.addCard(new Card(13,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  lilianaDeck.addCard(new Card(14,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  lilianaDeck.addCard(new Card(15,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  lilianaDeck.addCard(new Card(16,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  lilianaDeck.addCard(new Card(17,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  lilianaDeck.addCard(new Card(18,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  lilianaDeck.addCard(new Card(19,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  lilianaDeck.addCard(new Card(20,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  lilianaDeck.addCard(new Card(21,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(22,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(23,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(24,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(25,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(26,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(27,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(28,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(29,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(30,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(31,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(32,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(33,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(34,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(35,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(36,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(37,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(38,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(39,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(40,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(41,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(42,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(43,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(44,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(45,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(46,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(47,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(48,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(49,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(50,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(51,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(52,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(53,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(54,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(55,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(56,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(57,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(58,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.addCard(new Card(58,0,0,0,0,1,"img/Liliana_Deck/.jpeg";
  lilianaDeck.populateLilianaHand();

  nissaDeck = new Deck();
  nissaDeck.addCard(new Card(1,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  nissaDeck.addCard(new Card(2,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  nissaDeck.addCard(new Card(3,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  nissaDeck.addCard(new Card(4,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  nissaDeck.addCard(new Card(5,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  nissaDeck.addCard(new Card(6,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  nissaDeck.addCard(new Card(7,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  nissaDeck.addCard(new Card(8,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  nissaDeck.addCard(new Card(9,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  nissaDeck.addCard(new Card(10,0,0,0,0,1,"img/Basic_Lands/forest.jpeg";
  nissaDeck.addCard(new Card(11,0,0,0,0,1,"img/Basic_Lands/island.jpeg";
  nissaDeck.addCard(new Card(12,0,0,0,0,1,"img/Basic_Lands/island.jpeg";
  nissaDeck.addCard(new Card(13,0,0,0,0,1,"img/Basic_Lands/island.jpeg";
  nissaDeck.addCard(new Card(14,0,0,0,0,1,"img/Basic_Lands/island.jpeg";
  nissaDeck.addCard(new Card(15,0,0,0,0,1,"img/Basic_Lands/island.jpeg";
  nissaDeck.addCard(new Card(16,0,0,0,0,1,"img/Basic_Lands/island.jpeg";
  nissaDeck.addCard(new Card(17,0,0,0,0,1,"img/Basic_Lands/island.jpeg";
  nissaDeck.addCard(new Card(18,0,0,0,0,1,"img/Basic_Lands/island.jpeg";
  nissaDeck.addCard(new Card(19,0,0,0,0,1,"img/Basic_Lands/island.jpeg";
  nissaDeck.addCard(new Card(20,0,0,0,0,1,"img/Basic_Lands/island.jpeg";
  nissaDeck.addCard(new Card(21,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(22,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(23,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(24,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(25,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(26,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(27,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(28,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(29,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(30,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(31,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(32,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(33,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(34,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(35,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(36,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(37,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(38,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(39,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(40,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(41,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(42,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(43,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(44,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(45,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(46,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(47,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(48,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(49,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(50,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(51,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(52,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(53,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(54,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(55,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(56,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(57,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(58,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.addCard(new Card(58,0,0,0,0,1,"img/Nissa_Deck/.jpeg";
  nissaDeck.populateNissaHand();
