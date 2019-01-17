document.getElementById("btn").addEventListener("click", getPoke);

function getPoke(){
    //Searchvalue to xhr
    PknSearch=document.getElementById("SearchName").value.toLowerCase();
    console.log(PknSearch);
  var xhr = new XMLHttpRequest();
  // xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+SearchName+"/, true);
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+PknSearch+'/', true);

console.log(xhr);
  xhr.onload = function(){
    if(this.status == 200){
      var pokemon = JSON.parse(this.responseText);

      document.getElementById('pknname').innerHTML = pokemon.name;
      document.getElementById('pknid').innerHTML = "ID: #"+pokemon.id;
      document.getElementById('pknimg').src = pokemon.sprites.front_default;
      //Moves with check
      document.getElementById('move1').innerHTML = pokemon.moves[0].move.name;
      if (pokemon.moves[1]!=null) {
          document.getElementById('move2').innerHTML = pokemon.moves[1].move.name;
      }else{
          document.getElementById('move2').innerHTML = "no more moves";
      }
      if (pokemon.moves[2]!=null) {
          document.getElementById('move3').innerHTML = pokemon.moves[2].move.name;
      }else{
                  document.getElementById('move3').innerHTML = "no more moves";
      }

      if (pokemon.moves[3]!=null) {
          document.getElementById('move4').innerHTML = pokemon.moves[3].move.name;
      }else{
                  document.getElementById('move4').innerHTML = "no more moves";
      }


      console.log(this.responseText)
    }
  }

  xhr.send();
};
