//business logic
var emptyArray = []

var basic = function(words) {
  debugger;
  emptyArray =[];
  var replaceStuff = words.replace(/[.,\/#@<>*?'! $%\^&\*;:{}=\-_`~()]/g,"");
  var finalStuff = replaceStuff.replace(/\s{2,}/g," ");
  var splitIt = finalStuff.split("");
  emptyArray.push(splitIt);

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
