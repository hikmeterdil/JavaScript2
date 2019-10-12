'use strict';
const quotes = [
    {
      quote: "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
      author: "John Keats"
    },
    {
      quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
      author: "Ernest Hemingway"
    },
    {
      quote: "When you reach the end of your rope, tie a knot in it and hang on.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "There is nothing permanent except change.",
      author: "Heraclitus"
    },
    {
      quote: "You cannot shake hands with a clenched fist.",
      author: "Indira Gandhi"
    },
    {
      quote: "Let us sacrifice our today so that our children can have a better tomorrow.",
      author: "A. P. J. Abdul Kalam"
    },
    {
      quote: "It is better to be feared than loved, if you cannot be both.",
      author: "Niccolo Machiavelli"
    },
    {
      quote: "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
      author: "Amelia Earhart"
    },
    {
      quote: "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself.",
      author: "Henry James"
    }

]



    function getQuote() {
        var randomNumber = Math.floor(Math.random() * quotes.length);
        document.querySelector('.quotes').innerHTML = quotes[randomNumber].quote;
        document.querySelector('.authors').innerHTML = quotes[randomNumber].author;
      };



const button = document.querySelector('.btn');
console.log(button);

button.addEventListener("click", getQuote);