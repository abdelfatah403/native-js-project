
var arrayOfQuotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "So many books, so little time",
    author: " Frank Zappa",
  },
  {
    quote:
      "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    quote: "A room without books is like a body without a soul..",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
];

var lastNumber;
lastNumber=Random





function generatQuotes() {
    

  var Random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  var quote = (document.getElementById(
    "quoteinput"
  ).innerHTML = `${arrayOfQuotes[Random].quote}`);
  var author = (document.getElementById(
    "authorinput"
  ).innerHTML = `${arrayOfQuotes[Random].author}`);

}

// function duplicated(){
//     do {
        
        
//     } while (lastNumber!== random );
// }






