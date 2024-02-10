const Quotes=[{
    id:1,
    quote:'If plan A doesnt work, there are 25 more letters in the alphabet!',
    author:'CLAIRE COOK'
},
{
    id:2,
    quote:'If plan A doesnt work, there are 25 more letters in the alphabet!',
    author:'CLAIRE COOK'  
},
{
    id:3,
    quote:'If plan A doesnt work, there are 25 more letters in the alphabet!',
    author:'CLAIRE COOK'
},
{
    id:4,
    quote:'If plan A doesnt work, there are 25 more letters in the alphabet!',
    author:'CLAIRE COOK'
},
{
    id:5,
    quote:'If plan A doesnt work, there are 25 more letters in the alphabet!',
    author:'CLAIRE COOK'
},
{
    id:6,
    quote:'If plan A doesnt work, there are 25 more letters in the alphabet!',
    author:'CLAIRE COOK'
},
{
    id:7,
    quote:'If plan A doesnt work, there are 25 more letters in the alphabet!',
    author:'CLAIRE COOK'
},
{
    id:8,
    quote:'When we forgive we choose to be empowered, rather than being a victim',
    autho:'CLAIRE COOK'
},
{
    id:9,
    quote:'Positive thinking will let you do everything better than negative thinking wil',
    author:'ZIG ZIGLAR'
},
{
    id:10,
    quote:'Nothing is impossible. The word itself says ‘I’m possible',
    author:'CLAIRE COOK' 
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
    QuoteElem.innerText=Quotes[i].Quote
    AuthorEle.innerText=Quotes[i].author
})