

let ALLquote =[

{
        Quot:"  “Be the change that you wish to see in the world.” ",
        author:"   ― Mahatma Gandhi "


},
{
        Quot:"  “In three words I can sum up everything I've learned about life: it goes on.” ",
        author:"   ― Robert Frost "


},
{
        Quot:` “Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend”  `,
        author:" ― Albert Camus   "


},
{
        Quot:" “If you tell the truth, you don't have to remember anything.”  ",
        author:" ― Mark Twain   "


},
{
        Quot:"  “A friend is someone who knows all about you and still loves you.” ",
        author:"   ― Elbert Hubbard "


},
{
        Quot:"   “To live is the rarest thing in the world. Most people exist, that is all.”",
        author:"   ― Oscar Wilde "


},
{
        Quot:`  “Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”   `,
        author:"  ― H. Jackson Brown Jr., P.S. I Love You  "


},
{
    Quot:` “I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”    `,
    author:" ― Marilyn Monroe"


}
,
{
    Quot:`   “I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”  `,
    author:"  ― Maya Angelou  "


}
,
{
        Quot:"  “Live as if you were to die tomorrow. Learn as if you were to live forever.” ",
        author:"   ― Mahatma Gandhi "


}

]


// let cartona ={};



function newQuote() {



for (let i = 0; i < ALLquote.length; i++) {

        let x= Math.random();
        let y=x*10;
        let z=Math.floor(y)  

        Quot=ALLquote[z].Quot
        author=ALLquote[z].author

    
    
    


    
    }
    
    document.querySelector(".quote").innerHTML=Quot
    document.querySelector(".name").innerHTML=author


    console.log(Quot);
}