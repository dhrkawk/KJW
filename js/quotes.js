const quotes =[ {
    quote: "The way to get started is to quit talking and begin",
    author: "Walt Disney",
},
    {
        quote: "Life is what happens when you're busy making other peoeple",
        author: "John Lennon",
    },
{
        quote:"When you think you are late, you are late",
        author:"Mr. park",
    },
{
    quote: "Dreams what you want and do that dream right now",
    author:"Jae1",
    }]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");      

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;