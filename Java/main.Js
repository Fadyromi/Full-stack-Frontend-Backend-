// Define an array of quotes
var quoteOfTheDay = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "Be yourself; everyone else is already taken.-Oscar Wilde",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.― Marilyn Monroe",
    "So many books, so little time.― Frank Zappa",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.― Albert Einstein",
    "A room without books is like a body without a soul.― Marcus Tullius Cicero",
];
var bi1 = document.getElementById('bodyimg');
var bi2 = document.getElementById('bodyimg2');
var Y= document.getElementById('Quotebtn');
function QoD(){
for (var i = 0; i < quoteOfTheDay.length; i += 1) {

    var x = quoteOfTheDay[Math.floor(Math.random() * quoteOfTheDay.length)];

    document.getElementById('Quote').innerText = x;
}
}

var Y= document.getElementById('Quotebtn');
// Y.onclick = QoD


function lightin1() {
   
    if (bi1.style.display === "none") {
        bi1.style.display = "block";
    } else {
        bi1.style.display = "none";
    }
  };
//   Y.onclick = lightin1
// Y.onclick = "QoD ; lightin1";
function lightin2() {
   
    if (bi2.style.display === "none") {
        bi2.style.display = "block";
    } else {
        bi2.style.display = "none";
    }
  };

