function Deck() {
  this.cards = [];
}

Deck.prototype.addCard = function(card) {
  if( Array.isArray(card) && card.every( s => s instanceof Card ) ) {
    // to do: append array of songs to our tracks list
    // this.tracks = this.tracks.concat(song);
    Array.prototype.push.apply(this.cards, card);
  } else if( card instanceof Card ) {
    this.cards.push( card );
    this.newCardIndex ++;
  } else {
    return false;
  }
  return true;
}

Deck.prototype.populateAjaniHand = function() {
  var i = 0;
  while (i <= 6) {
    var cardToHand = Math.floor(Math.random()* ajaniDeck.cards.length);
    console.log(cardToHand)
    var cardCount = 1;
    if ( cardCount <= ajaniDeck.cards[cardToHand].copies) {
      ajaniDeck.cards[cardToHand].copies -= 1;
      document.getElementById("cardsP1").innerHTML += "<img id='c"+(i+1)+"p1' src='" + ajaniDeck.cards[cardToHand].source + "' onclick='putCardInPlayAjani(this.id)' data-value='"+ ajaniDeck.cards[cardToHand].manaCost +"' data-power='"+ ajaniDeck.cards[cardToHand].power+"' data-toughness='"+ajaniDeck.cards[cardToHand].toughness+"'>";
    }
    i ++;
  }
}

Deck.prototype.populateTezzeretHand = function() {
  var i = 0;
  while (i <= 6) {
    var cardToHand = Math.floor(Math.random()* tezzeretDeck.cards.length);
    console.log(cardToHand)
    var cardCount = 1;
    if ( cardCount <= tezzeretDeck.cards[cardToHand].copies) {
      tezzeretDeck.cards[cardToHand].copies -= 1;
      document.getElementById("cardsP2").innerHTML += "<img id='c"+(i+1)+"p2' src='" + tezzeretDeck.cards[cardToHand].source + "' onclick='putCardInPlayTez(this.id)' data-power='"+tezzeretDeck.cards[cardToHand].power+"' data-toughness='"+tezzeretDeck.cards[cardToHand].toughness+"' data-value='"+tezzeretDeck.cards[cardToHand].manaCost+"'>";
    }
    i ++;
  }
}

function Card(cardNum, manaCost, power, toughness, summonCounter, copies, source) {
  this.cardNum = cardNum;
  this.manaCost = manaCost;
  this.power = power;
  this.toughness = toughness;
  this.summonCounter = summonCounter;
  this.copies = copies;
  this.source = source;
}

var countA = 0;

function putCardInPlayAjani(clicked_id) {
  var land = /(forest|plains|tranquilExp).+/.test(document.getElementById(clicked_id).src);
  var manaCost = document.getElementById(clicked_id).getAttribute('data-value');
  var manaCountAj = $("#landsP1 > img:not(.tapped)").length;

  if ((countA >= 1) && (land)) {
    alert("Land already played this turn!")
  }
  else if ((manaCountAj >= manaCost) && (!land)) {
    var cardMove = document.getElementById(clicked_id);
    cardMove.parentElement.removeChild(cardMove);
    document.getElementById("creaturesP1").appendChild(cardMove);
    var count = manaCost;
    while (count > 0){
      document.querySelector('#landsP1 img').classList.add('tapped');
      count = count - 1;
    }
  }
  else if ((manaCountAj < manaCost) && (!land)) {
    alert("Not enough mana!");
  }
  else {
    playAjLand(clicked_id);
  }
}

function playAjLand(clicked_id) {
  var cardMove = document.getElementById(clicked_id);
  cardMove.parentElement.removeChild(cardMove);
  document.getElementById("landsP1").appendChild(cardMove);
  countA ++;
}

var countT = 0;

function putCardInPlayTez(clicked_id) {
  var land = /(swamp|island|submergedBone).+/.test(document.getElementById(clicked_id).src);
  var manaCost = document.getElementById(clicked_id).getAttribute('data-value');
  var manaCountTez = $("#landsP2 > img:not(.tapped)").length;
  console.log(manaCountTez);

  if ((countT >= 1) && (land)) {
    alert("Land already played this turn!")
  }
  else if ((manaCountTez >= manaCost) && (!land)) {
    playCardTez(clicked_id);
    var count = manaCost;
    while (count > 0){
      document.querySelector('#landsP2 img').classList.add('tapped');
      count = count - 1;
    }
    console.log(manaCountTez);
  }
  else if ((manaCountTez < manaCost) && (!land)) {
    alert("Not enough mana!");
  }
  else {
    playTezLand(clicked_id);
  }
}

function playTezLand(clicked_id) {
  if (/^(?!swamp|island|submergedBone).+/.test(document.getElementById(clicked_id).src)) {
    var cardMove = document.getElementById(clicked_id);
    cardMove.parentElement.removeChild(cardMove);
    document.getElementById("landsP2").appendChild(cardMove);
    countT ++;
  }
  else{
    return false;
  }
}

function playCardTez(clicked_id) {
  if ((/(island|swamp|submergedBone)/.test(document.getElementById(clicked_id)).src )) {
    return false;
  }
  else {
    var cardMove = document.getElementById(clicked_id);
    cardMove.parentElement.removeChild(cardMove);
    document.getElementById("creaturesP2").appendChild(cardMove);
    cardMove.onclick = creatureDied(clicked_id);
  }
}

function passTurnAj() {
  var tappedLands = $("#landsP2 > img.tapped").length;
  var cardsInHand = $("#cardsP2 > img").length;
  var drawCard = cardsInHand + 1;
  var cardToHand = Math.floor(Math.random()* tezzeretDeck.cards.length);
  document.getElementById("cardsP2").innerHTML += "<img id='c"+(drawCard)+"p1' src='" + tezzeretDeck.cards[cardToHand].source + "' onclick='putCardInPlayTez(this.id)' data-power='"+tezzeretDeck.cards[cardToHand].power+"' data-toughness='"+tezzeretDeck.cards[cardToHand].toughness+"' data-value='"+tezzeretDeck.cards[cardToHand].manaCost+"'>";
  if (tappedLands > 0) {
    document.querySelector('#landsP2 img.tapped').classList.remove('tapped');
  }
  countT = 0;
}

function passTurnTez(){
  var tappedLands = $("#landsP1 > img.tapped").length;
  var cardsInHand = $("#cardsP1 > img").length;
  var drawCard = cardsInHand + 1;
  var cardToHand = Math.floor(Math.random()* ajaniDeck.cards.length);
  document.getElementById("cardsP1").innerHTML += "<img id='c"+(drawCard)+"p1' src='" + ajaniDeck.cards[cardToHand].source + "' onclick='putCardInPlayAjani(this.id)' data-power='"+ajaniDeck.cards[cardToHand].power+"' data-toughness='"+ajaniDeck.cards[cardToHand].toughness+"' data-value='"+ajaniDeck.cards[cardToHand].manaCost+"'>";
  if (tappedLands > 0) {
    document.querySelector('#landsP1 img.tapped').classList.remove('tapped');
  }
  countA = 0;
}

function creatureDied(clicked_id) {
  var cardDead = document.getElementById(clicked_id);
  cardDead.parentElement.removeChild(cardDead);
}

var ajaniDeck;
var tezzeretDeck;
document.addEventListener("DOMContentLoaded", function(){
  ajaniDeck = new Deck();
  ajaniDeck.addCard(new Card(1, 0, 0, 0, 0, 10, "img/Basic_Lands/forest.jpeg"));
  ajaniDeck.addCard(new Card(2, 0, 0, 0, 0, 10, "img/Basic_Lands/forest.jpeg"));
  ajaniDeck.addCard(new Card(3, 0, 0, 0, 0, 10, "img/Basic_Lands/forest.jpeg"));
  ajaniDeck.addCard(new Card(4, 0, 0, 0, 0, 10, "img/Basic_Lands/forest.jpeg"));
  ajaniDeck.addCard(new Card(5, 0, 0, 0, 0, 10, "img/Basic_Lands/forest.jpeg"));
  ajaniDeck.addCard(new Card(6, 0, 0, 0, 0, 10, "img/Basic_Lands/forest.jpeg"));
  ajaniDeck.addCard(new Card(7, 0, 0, 0, 0, 10, "img/Basic_Lands/forest.jpeg"));
  ajaniDeck.addCard(new Card(8, 0, 0, 0, 0, 10, "img/Basic_Lands/forest.jpeg"));
  ajaniDeck.addCard(new Card(9, 0, 0, 0, 0, 10, "img/Basic_Lands/forest.jpeg"));
  ajaniDeck.addCard(new Card(10, 0, 0, 0, 0, 10,"img/Basic_Lands/plains.jpeg"));
  ajaniDeck.addCard(new Card(11, 0, 0, 0, 0, 10,"img/Basic_Lands/plains.jpeg"));
  ajaniDeck.addCard(new Card(12, 0, 0, 0, 0, 10,"img/Basic_Lands/plains.jpeg"));
  ajaniDeck.addCard(new Card(13, 0, 0, 0, 0, 10,"img/Basic_Lands/plains.jpeg"));
  ajaniDeck.addCard(new Card(14, 0, 0, 0, 0, 10,"img/Basic_Lands/plains.jpeg"));
  ajaniDeck.addCard(new Card(15, 0, 0, 0, 0, 10,"img/Basic_Lands/plains.jpeg"));
  ajaniDeck.addCard(new Card(16, 0, 0, 0, 0, 10,"img/Basic_Lands/plains.jpeg"));
  ajaniDeck.addCard(new Card(17, 0, 0, 0, 0, 10,"img/Basic_Lands/plains.jpeg"));
  ajaniDeck.addCard(new Card(18, 0, 0, 0, 0, 10,"img/Basic_Lands/plains.jpeg"));
  ajaniDeck.addCard(new Card(19, 5, 0, 0, 0, 1,"img/Ajani_Deck/aidFrom.jpeg"));
  ajaniDeck.addCard(new Card(20, 5, 4, 3, 1, 1,"img/Ajani_Deck/airdropAero.jpeg"));
  ajaniDeck.addCard(new Card(21,4,0,0,0,1,"img/Ajani_Deck/ajanisAid.jpeg"));
  ajaniDeck.addCard(new Card(22,4,0,0,0,1,"img/Ajani_Deck/ajanisAid.jpeg"));
  ajaniDeck.addCard(new Card(23,2,2,2,1,1,"img/Ajani_Deck/ajanisCom.jpeg"));
  ajaniDeck.addCard(new Card(24,2,2,2,1,1,"img/Ajani_Deck/ajanisCom.jpeg"));
  ajaniDeck.addCard(new Card(25,2,2,2,1,1,"img/Ajani_Deck/ajanisCom.jpeg"));
  ajaniDeck.addCard(new Card(26,4,3,3,1,1,"img/Ajani_Deck/armorcraftJud.jpeg"));
  ajaniDeck.addCard(new Card(27,4,3,3,1,1,"img/Ajani_Deck/armorcraftJud.jpeg"));
  ajaniDeck.addCard(new Card(28,2,3,1,1,1,"img/Ajani_Deck/audaciousInf.jpeg"));
  ajaniDeck.addCard(new Card(29,2,3,1,1,1,"img/Ajani_Deck/audaciousInf.jpeg"));
  ajaniDeck.addCard(new Card(30,2,3,1,1,1,"img/Ajani_Deck/audaciousInf.jpeg"));
  ajaniDeck.addCard(new Card(31,3,4,4,1,1,"img/Ajani_Deck/daredevilDrag.jpeg"));
  ajaniDeck.addCard(new Card(32,3,2,2,1,1,"img/Ajani_Deck/deadeyeHar.jpeg"));
  ajaniDeck.addCard(new Card(33,5,0,0,0,1,"img/Ajani_Deck/engineeredMig.jpeg"));
  ajaniDeck.addCard(new Card(34,3,3,2,1,1,"img/Ajani_Deck/ghiapurGuide.jpeg"));
  ajaniDeck.addCard(new Card(35,3,0,0,0,1,"img/Ajani_Deck/inspiringRoar.jpeg"));
  ajaniDeck.addCard(new Card(36,3,0,0,0,1,"img/Ajani_Deck/inspiringRoar.jpeg"));
  ajaniDeck.addCard(new Card(37,3,0,0,0,1,"img/Ajani_Deck/inspiringRoar.jpeg"));
  ajaniDeck.addCard(new Card(38,3,0,0,0,1,"img/Ajani_Deck/inspiringRoar.jpeg"));
  ajaniDeck.addCard(new Card(39,5,4,4,1,1,"img/Ajani_Deck/lifecraftCav.jpeg"));
  ajaniDeck.addCard(new Card(40,5,4,4,1,1,"img/Ajani_Deck/lifecraftCav.jpeg"));
  ajaniDeck.addCard(new Card(41,1,1,2,1,1,"img/Ajani_Deck/naramRen.jpeg"));
  ajaniDeck.addCard(new Card(42,1,1,2,1,1,"img/Ajani_Deck/naramRen.jpeg"));
  ajaniDeck.addCard(new Card(43,2,0,0,0,1,"img/Ajani_Deck/naturalObs.jpeg"));
  ajaniDeck.addCard(new Card(44,1,0,0,0,1,"img/Ajani_Deck/preyUpon.jpeg"));
  ajaniDeck.addCard(new Card(45,1,0,0,0,1,"img/Ajani_Deck/renegadeMap.jpeg"));
  ajaniDeck.addCard(new Card(46,1,0,0,0,1,"img/Ajani_Deck/renegadeMap.jpeg"));
  ajaniDeck.addCard(new Card(47,1,0,0,0,1,"img/Ajani_Deck/renegadeMap.jpeg"));
  ajaniDeck.addCard(new Card(48,5,5,5,1,1,"img/Ajani_Deck/ridgescaleTus.jpeg"));
  ajaniDeck.addCard(new Card(49,3,2,2,1,1,"img/Ajani_Deck/silkweaverEli.jpeg"));
  ajaniDeck.addCard(new Card(50,3,2,2,1,1,"img/Ajani_Deck/silkweaverEli.jpeg"));
  ajaniDeck.addCard(new Card(51,3,2,2,1,1,"img/Ajani_Deck/solemnRec.jpeg"));
  ajaniDeck.addCard(new Card(52,0,0,0,0,1,"img/Ajani_Deck/tranquilExp.jpeg"));
  ajaniDeck.addCard(new Card(53,0,0,0,0,1,"img/Ajani_Deck/tranquilExp.jpeg"));
  ajaniDeck.addCard(new Card(54,0,0,0,0,1,"img/Ajani_Deck/tranquilExp.jpeg"));
  ajaniDeck.addCard(new Card(55,0,0,0,0,1,"img/Ajani_Deck/tranquilExp.jpeg"));
  ajaniDeck.addCard(new Card(56,1,0,0,0,1,"img/Ajani_Deck/unbriddledGro.jpeg"));
  ajaniDeck.addCard(new Card(57,1,0,0,0,1,"img/Ajani_Deck/unbriddledGro.jpeg"));
  ajaniDeck.addCard(new Card(58,2,1,2,1,1,"img/Ajani_Deck/verdantAuto.jpeg"));
  ajaniDeck.addCard(new Card(59,2,1,2,1,1,"img/Ajani_Deck/verdantAuto.jpeg"));
  // ajaniDeck.addCard(new Card(5,6,0,0,0,0,"img/Ajani_Deck/ajani.jpeg"));
  ajaniDeck.populateAjaniHand();

  tezzeretDeck = new Deck();
  tezzeretDeck.addCard(new Card(1,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(59,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(2,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(3,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(4,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(5,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(6,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(7,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(8,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(9,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(10,0,0,0,0,1,"img/Basic_Lands/island.jpeg"));
  tezzeretDeck.addCard(new Card(11,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg"));
  tezzeretDeck.addCard(new Card(12,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg"));
  tezzeretDeck.addCard(new Card(13,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg"));
  tezzeretDeck.addCard(new Card(14,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg"));
  tezzeretDeck.addCard(new Card(15,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg"));
  tezzeretDeck.addCard(new Card(16,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg"));
  tezzeretDeck.addCard(new Card(17,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg"));
  tezzeretDeck.addCard(new Card(18,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg"));
  tezzeretDeck.addCard(new Card(19,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg"));
  tezzeretDeck.addCard(new Card(20,0,0,0,0,1,"img/Basic_Lands/swamp.jpeg"));
  tezzeretDeck.addCard(new Card(21,1,1,1,1,1,"img/Tezzeret_Deck/augmentingAuto.jpeg"));
  tezzeretDeck.addCard(new Card(22,1,1,1,1,1,"img/Tezzeret_Deck/augmentingAuto.jpeg"));
  tezzeretDeck.addCard(new Card(23,7,7,5,1,1,"img/Tezzeret_Deck/barricadeBre.jpeg"));
  tezzeretDeck.addCard(new Card(24,6,4,4,1,1,"img/Tezzeret_Deck/bastionInv.jpeg"));
  tezzeretDeck.addCard(new Card(25,6,4,4,1,1,"img/Tezzeret_Deck/bastionInv.jpeg"));
  tezzeretDeck.addCard(new Card(26,2,2,2,1,1,"img/Tezzeret_Deck/dhundOp.jpeg"));
  tezzeretDeck.addCard(new Card(27,2,2,2,1,1,"img/Tezzeret_Deck/dhundOp.jpeg"));
  tezzeretDeck.addCard(new Card(28,4,2,4,1,1,"img/Tezzeret_Deck/dukharaPea.jpeg"));
  tezzeretDeck.addCard(new Card(29,3,0,0,0,1,"img/Tezzeret_Deck/essenceExt.jpeg"));
  tezzeretDeck.addCard(new Card(30,7,5,5,1,1,"img/Tezzeret_Deck/fenHaul.jpeg"));
  tezzeretDeck.addCard(new Card(31,5,3,3,1,1,"img/Tezzeret_Deck/foundryAss.jpeg"));
  tezzeretDeck.addCard(new Card(32,3,0,0,0,1,"img/Tezzeret_Deck/implementOf.jpeg"));
  tezzeretDeck.addCard(new Card(33,3,0,0,0,1,"img/Tezzeret_Deck/implementOf.jpeg"));
  tezzeretDeck.addCard(new Card(34,6,4,4,1,1,"img/Tezzeret_Deck/ironcladRev.jpeg"));
  tezzeretDeck.addCard(new Card(35,1,1,2,1,1,"img/Tezzeret_Deck/merchantsDock.jpeg"));
  tezzeretDeck.addCard(new Card(36,0,0,2,1,1,"img/Tezzeret_Deck/ornithopter.jpeg"));
  tezzeretDeck.addCard(new Card(37,2,0,0,0,1,"img/Tezzeret_Deck/pendulumOf.jpeg"));
  tezzeretDeck.addCard(new Card(38,2,0,0,0,1,"img/Tezzeret_Deck/pendulumOf.jpeg"));
  tezzeretDeck.addCard(new Card(39,2,0,0,0,1,"img/Tezzeret_Deck/pendulumOf.jpeg"));
  tezzeretDeck.addCard(new Card(40,2,0,0,0,1,"img/Tezzeret_Deck/pendulumOf.jpeg"));
  tezzeretDeck.addCard(new Card(41,4,2,3,1,1,"img/Tezzeret_Deck/quicksmithSpy.jpeg"));
  tezzeretDeck.addCard(new Card(42,5,0,0,0,1,"img/Tezzeret_Deck/reverseEng.jpeg"));
  tezzeretDeck.addCard(new Card(43,0,0,0,0,1,"img/Tezzeret_Deck/submergedBone.jpeg"));
  tezzeretDeck.addCard(new Card(44,0,0,0,0,1,"img/Tezzeret_Deck/submergedBone.jpeg"));
  tezzeretDeck.addCard(new Card(45,0,0,0,0,1,"img/Tezzeret_Deck/submergedBone.jpeg"));
  tezzeretDeck.addCard(new Card(46,0,0,0,0,1,"img/Tezzeret_Deck/submergedBone.jpeg"));
  tezzeretDeck.addCard(new Card(47,5,0,0,0,1,"img/Tezzeret_Deck/tezzeretsBet.jpeg"));
  tezzeretDeck.addCard(new Card(48,5,0,0,0,1,"img/Tezzeret_Deck/tezzeretsBet.jpeg"));
  tezzeretDeck.addCard(new Card(49,3,2,3,1,1,"img/Tezzeret_Deck/tezzeretsSim.jpeg"));
  tezzeretDeck.addCard(new Card(50,3,2,3,1,1,"img/Tezzeret_Deck/tezzeretsSim.jpeg"));
  tezzeretDeck.addCard(new Card(51,3,2,3,1,1,"img/Tezzeret_Deck/tezzeretsSim.jpeg"));
  tezzeretDeck.addCard(new Card(52,3,0,0,0,1,"img/Tezzeret_Deck/tezzeretsTouch.jpeg"));
  tezzeretDeck.addCard(new Card(53,3,0,0,0,1,"img/Tezzeret_Deck/tezzeretsTouch.jpeg"));
  tezzeretDeck.addCard(new Card(54,4,3,3,1,1,"img/Tezzeret_Deck/treasureKee.jpeg"));
  tezzeretDeck.addCard(new Card(55,1,0,0,0,1,"img/Tezzeret_Deck/universalSolv.jpeg"));
  tezzeretDeck.addCard(new Card(56,1,0,0,0,1,"img/Tezzeret_Deck/universalSolv.jpeg"));
  tezzeretDeck.addCard(new Card(57,6,4,3,1,1,"img/Tezzeret_Deck/windkinRai.jpeg"));
  tezzeretDeck.addCard(new Card(58,6,4,3,1,1,"img/Tezzeret_Deck/windkinRai.jpeg"));
  // tezzeretDeck.addCard(new Card(19,6,0,0,0,1,"img/Tezzeret_Deck/tezzeret.jpeg"));
  tezzeretDeck.populateTezzeretHand();
})
