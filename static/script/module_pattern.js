var StringTools = (function() {
  //variables
  var concat, toUpper, toLower, toTitle, split, changedWord;
  //functions
  function concat(x, y) {
    console.log(x + y);
  }

  function toUpper(x) {
    console.log(x.toUpperCase());
  }

  function toLower(x) {
    console.log(x.toLowerCase());
  }

  function toTitle(x) {
    changedWord = x[0].toUpperCase() + x;
    changedWord[1] = "";
    console.log(changedWord);
  }

  function split(x, y) {
    console.log(x.slice(y, 10));
  }

  //API

  return {
    cancats: concat,
    toUpper: toUpper,
    toLower: toLower,
    toTitle: toTitle,
    splitsomewords: split,
  }

}());

StringTools.cancats("this", " is a test");
StringTools.toUpper("thisisareallylongtest");
StringTools.toLower("HITHERETHISISAREALLYBIGUPPERCASEWORDS");
StringTools.toTitle("yes this is a pretty awesome test.");
StringTools.splitsomewords("Testing123 Some more testing", 5);
