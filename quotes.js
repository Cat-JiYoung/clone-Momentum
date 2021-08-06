const quotes = [{
    quote: "Quality is never an accident; it is always the result of intelligent effort",
    author: "John Ruskin",
},
{
    quote: "God doesn't require us to succeed he only requires that you try",
    author: "Mother Teresa",
},
{
    quote: "What is written without effort is in general read without pleasure",
    author: "Samuel Johnson",
},
{
    quote: "Sincerity is the way of Heaven",
    author: "Mencius",
},
{
    quote: "Study the past if you would define the future",
    author: "Confucius",
},
{
    quote: "If not be a possibility of avoiding and enjoy!",
    author: "Johnson",
},
{
    quote: "Everything is gonna be alright!",
    author: "Abdul Kalam",
},
{
    quote: "Big goals get big results.",
    author: "Mencius",
},
{
    quote: "Try your best rather than be the best.",
    author: "Friedrich Nietzsche",
},
{
    quote: "Faithfulness makes all things possible.",
    author: "Mencius"
}]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;