var input = document.getElementById("SearchName");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("btn").click();
  }
});


document.getElementById("btn").addEventListener("click", getPoke);

function getPoke(){
    //Searchvalue to xhr
    PknSearch=document.getElementById("SearchName").value.toLowerCase();
    if(PknSearch=="ross geller"){
    document.location.replace("http://images4.fanpop.com/image/photos/16300000/David-S0chwimmer-Ross-Geller-ross-geller-16348282-2115-2560.jpg")
  }
    var xhr = new XMLHttpRequest();
    var xhr2 = new XMLHttpRequest();
    var xhr3 = new XMLHttpRequest();

    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+PknSearch+'/', true);
    xhr2.open('GET', 'https://pokeapi.co/api/v2/pokemon-species/'+PknSearch+'/', true);
    console.log(xhr2);
    xhr2.onload=function(){
        if(this.status == 200){
            var pokemonPre = JSON.parse(this.responseText);
            if (pokemonPre.evolves_from_species!=null){
                console.log(pokemonPre.evolves_from_species.name)
                document.getElementById('prevo').innerHTML=pokemonPre.evolves_from_species.name;

                xhr3.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+pokemonPre.evolves_from_species.name+'/', true);
                xhr3.send();
                xhr3.onload=function(){
                    console.log(xhr3);
                    var pokemonPreI = JSON.parse(this.responseText);
                    console.log(pokemonPreI);
                    document.getElementById('pknimg2').src=pokemonPreI.sprites.front_default;
                }
            }else{
            document.getElementById('prevo').innerHTML="No pre-evolution";
            document.getElementById('pknimg2').src="assets/img/noprevo.jpg";
}
        }
    };

    xhr.onload = function(){
        if(this.status == 200){
            var pokemon = JSON.parse(this.responseText);

            document.getElementById('pknname').innerHTML = pokemon.name;
            document.getElementById('pknid').innerHTML = pokemon.id;
            document.getElementById('pknimg').src = pokemon.sprites.front_default;
            //Moves with check
            document.getElementById('move1').innerHTML = pokemon.moves[0].move.name;
            if (pokemon.moves[1]!=null) {
                document.getElementById('move2').innerHTML = pokemon.moves[1].move.name;
            }else{
                document.getElementById('move2').innerHTML = "No more moves";
            }
            if (pokemon.moves[2]!=null) {
                document.getElementById('move3').innerHTML = pokemon.moves[2].move.name;
            }else{
                document.getElementById('move3').innerHTML = "No more moves";
            }

            if (pokemon.moves[3]!=null) {
                document.getElementById('move4').innerHTML = pokemon.moves[3].move.name;
            }else{
                document.getElementById('move4').innerHTML = "No more moves";
            }


        }
    }

    xhr.send();
    xhr2.send();
};
