const Quotes=[{
    id:1,
    quote:'If plan A doesnt work, there are 25 more letters in the alphabet!',
    author:'CLAIRE COOK'
},
{
    id:2,
    quote:'For every minute you are angry you lose sixty seconds of happiness',
    author:'Ralph Waldo Emerson'  
},
{
    id:3,
    quote:'Count your age by friends, not years. Count your life by smiles, not tears',
    author:'John Lennon'
},
{
    id:4,
    quote:'Happiness is a warm puppy.',
    author:'Charles M. Schulz'
},
{
    id:5,
    quote:'Success is getting what you want. Happiness is wanting what you get',
    author:'Dale Carnegie'
},
{
    id:6,
    quote:'The best way to cheer yourself up is to try to cheer somebody else up',
    author:'Mark Twain'
},
{
    id:7,
    quote:'The only joy in the world is to begin',
    author:'Cesare Pavese'
},
{
    id:8,
    quote:'Remember this, that very little is needed to make a happy life',
    autho:'Marcus Aurelius'
},
{
    id:9,
    quote:'Positive thinking will let you do everything better than negative thinking wil',
    author:'ZIG ZIGLAR'
},
{
    id:10,
    quote:'I like my peace. I am happy in my space.',
    author:'Randhir Kapoor' 
},
]

//accessing the html elements
const QuoteElem=document.getElementById('quote')
const AuthorEle=document.getElementById('author')
const BtnEle=document.getElementById('btn')
console.log(Quotes.length)

//function to generate random quotes
BtnEle.addEventListener('click',()=>{
    let i=Math.floor(Math.random()* Quotes.length)
    QuoteElem.innerText=Quotes[i].quote
    AuthorEle.innerText=Quotes[i].author
})