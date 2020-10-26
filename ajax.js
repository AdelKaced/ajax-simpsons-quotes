
function fetchPokemonJsom () {
axios.get("https://simpsons-quotes-api.herokuapp.com/quotes").then(function(response){
    return response.data ;
})
.then(function(result){
    console.log("hello")
    
})

}