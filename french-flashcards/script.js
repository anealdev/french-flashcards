var wordArray = [ ["le","the(m)"], ["je","I"], ["de","of"], ["est","is"], ["pas","not"],["vous","you (plural)"],["la","the(f)"],["tu","you"], ["que","that"],["un","a"],["il","he, it"],["et","and"],["à","in, to, at"],["a","has"],["ne","only"],["les","the (plural)"],["en","in, to"],
 ["ça","this, that"],["une","a (f)"],["J'ai","I have"],["pour","for"],["des","from, of the"],["ce","this"],["sur","on, upon, about"] ];
var cardTop = document.getElementById("card-top");
var cardBottom = document.getElementById("card-bottom");
var cardPrev = document.getElementById("card-prev");
var cardNext = document.getElementById("card-next");
var cardRemove = document.getElementById("card-remove");
var completion = document.getElementById("completion");
var accordion = document.getElementById("accordion");
var currentCard = 0;
var iGotIt = [];

function displayCard(){


        if(iGotIt.length == wordArray.length){
          console.log("out of cards");
          completion.style.display = "block";
          accordion.style.display = "none";
          cardPrev.innerHTML = "";
          cardNext.innerHTML = "";
          cardRemove.innerHTML = "";
          return;
        }
      /* else if(iGotIt.length != 0){
          for(var i=0;i < iGotIt.length; i++){
            if (currentCard === iGotIt[i]){

              console.log("Skip this card");
              currentCard++;
              displayCard();

        }
      }
  }
  console.log("The currentCard is : " + currentCard);
  if(currentCard > wordArray.length - 1){
    console.log("The current card is over the array size, starting at beginning");
    currentCard = 0;
  } */
  console.log("curentCard is: " + currentCard);
  cardTop.innerHTML = wordArray[currentCard][0];
  cardBottom.innerHTML = wordArray[currentCard][1];
  cardRemove.innerHTML = "";
  console.log('currentCard is now: ' + currentCard);
  console.log("wordArray length is: " + wordArray.length);
  document.getElementById("collapseOne").className="collapse";
}

function startOver(){
  console.log("startover was clicked ");
  iGotIt = [];
  currentCard = 0;
  completion.style.display = "none";
  accordion.style.display = "flex";
  startCards();
}

function startCards(){
  console.log("Start cards started");
  var startTheCards = document.getElementById("start-the-cards");
  accordion.style.display = "flex";
  startTheCards.innerHTML = '<button type="button" class="btn btn-primary" onclick="startOver()">Start Over</button>';
  cardPrev.innerHTML = '<button type="button" class="btn btn-primary btn-nav" onclick="prevCard()">Previous</button>';
  cardNext.innerHTML = '<button type="button" class="btn btn-primary btn-nav" onclick="nextCard()">Next</button>';

  cardTop.innerHTML = wordArray[currentCard][0];
  cardBottom.innerHTML = wordArray[currentCard][1];
  displayCard();
  }
function checkiGotItNext(){
  console.log("checking for learned card");
  console.log(iGotIt.length);
  for(var i=0;i < iGotIt.length; i++){
    console.log("entering for loop");
    console.log("iGotIt[i] " + iGotIt[i]);
    if (currentCard === iGotIt[i]){ //if card found, increment card and recursive call
      console.log("Skip this card");
      currentCard++;
      if(currentCard >= wordArray.length){
        currentCard = 0
      }
      checkiGotItNext();
}
}
}

function nextCard(){
  currentCard++;
    console.log("reached nextCard");
  if(currentCard >= wordArray.length){
    currentCard = 0;
  }
  if(iGotIt.length != 0){ //if iGotIt is not empty check iGotIt for current card
    checkiGotItNext();
  }
  displayCard();
}

function checkiGotItPrev(){
  console.log("checking for learned prev card");
  console.log(iGotIt.length);
  for(var i=0;i < iGotIt.length; i++){
    console.log("entering for loop");
    console.log("iGotIt[i] " + iGotIt[i]);
    if (currentCard === iGotIt[i]){ //if card found, increment card and recursive call
      console.log("Skip this card");
      currentCard--;
      if(currentCard < 0){
        currentCard = wordArray.length + currentCard;
      }
      checkiGotItPrev();
  }
  }
}

function prevCard(){
  currentCard--;
  console.log("currentCard minus 1 is now: " + currentCard);
  if(currentCard < 0){
    currentCard = wordArray.length + currentCard;
  }
  checkiGotItPrev();

  displayCard();
}

function removeCard(){
  console.log("is the current card already in the array?: " + iGotIt.indexOf(currentCard));
  if(iGotIt.indexOf(currentCard) === -1){
  iGotIt.push(currentCard);
  console.log(iGotIt)
  console.log("card added to iGotIt");
  }else if(iGotIt.indexOf(currentCard) != -1){
    console.log("Card already in array");
    nextCard();
  }

  if(iGotIt.length == wordArray.length){
    console.log("Out of cards!");
    displayCard();
  }else{
    nextCard();
  }

}

function displayRemoveButton(){
  if(iGotIt.length == wordArray.length){
    return;
  }
  cardRemove.innerHTML = '<button type="button" class="btn btn-primary" onclick="removeCard()">I know this one!</button>';
}
