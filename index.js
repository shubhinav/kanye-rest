
const refreshQuoteBtn = document.querySelector("#refreshQuote")
const quoteText = document.querySelector("#quoteText")

refreshQuoteBtn.addEventListener("click", function(){
    getData();
})


function getData(){
    
    fetch("https://api.kanye.rest")
    .then(res=>res.json())
    .then(data=>{
        quoteText.innerText = `"${data.quote}"`
    })
}

getData();