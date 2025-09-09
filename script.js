//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [ 
    {
        quote: `"Fate leads the willing, and drags the unwilling."`,
        author: `Seneca`
    },
    {
        quote: `"First say to yourself what you would be; and then do what you have to do."`,
        author: `Epictetus`
    },
    {
        quote: `"Waste no more time arguing what a good man should be. Be one."`,
        author: `Marcus Aurelius`
    },
    {
        quote: `If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it—and this you have the power to revoke at any moment."`,
        author: `Marcus Aurelius`
    },
    {
        quote: `"We suffer more often in imagination than in reality."`,
        author: `Seneca the Younger`
    },
    {
        quote: `"No man is free who is not master of himself."`,
        author: `Epictetus`
    },
    {
        quote: `“Love is not just a verb, it's you looking in the mirror.”`,
        author: `Kendrick Lamar`
    },
    {
        quote: `“We gon' be alright.”`,
        author: `Kendrick Lamar`
    },
    {
        quote: `“I can't change the world until I change myself first.”`,
        author: `Kendrick Lamar`
    },
    {
        quote: `“No such thing as a life that's better than yours.”`,
        author: `J. Cole`
    },
];

btn.addEventListener('click' , function ()
{
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].author;
});