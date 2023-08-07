const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [
"«Nothing is impossible. The word itself says 'I'm possible!», - Audrey Hepburn",
"«If life were predictable it would cease to be life, and be without flavor»,  — Eleanor Roosevelt",
"«The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart», — Helen Keller",
"«It is during our darkest moments that we must focus to see the light»,  — Aristotle",
"«Live in the sunshine, swim the sea, drink the wild air.» - Ralph Waldo Emerson",
"«Only put off until tomorrow what you are willing to die having left undone»,  — Pablo Picasso",
"«Nothing great was ever achieved without enthusiasm»,  — Ralph Waldo Emerson",
"«Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally», - David Frost",
"«In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it», - Jane Smiley",
"«Only those who will risk going too far can possibly find out how far one can go», - T. S. Eliot",
"«Courage is grace under pressure», - Ernest Hemingway"
]

button.addEventListener("click", function () {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})