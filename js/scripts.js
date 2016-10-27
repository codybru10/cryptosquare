//business logic
var emptyArray = []
var Array2 = []
var Arrayby2 = []
var basic = function(words) {
  debugger;
  emptyArray =[];
  var replaceStuff = words.replace(/[.,\/#@<>*?'! $%\^&\*;:{}=\-_`~()]/g,"");
  var finalStuff = replaceStuff.replace(/\s{2,}/g," ");
  var splitIt = finalStuff.split("");
  emptyArray.push(splitIt);
  var numberOfRows = parseInt(Math.sqrt(emptyArray.length));
  var numberOfColumns = numberOfRows + 1;

  //var column =

    //for(var index = 0; index < emptyArray.length; index++) {
      //if (emptyArray.length < 5) {
      //Array2.push(emptyArray[0]) {

    //} else

    //}
  //}
  return emptyArray
};


//user interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
debugger;
  var userInput = $("#input").val();
  var result = basic(userInput);
  $("h3").text(result);
  });
});
