class Pokemon{
    constructor(name, source, pokedex){
        this._name = name;
        this._source = source;
        this._pokedex = pokedex;
    }

    //Getters
    get name(){
        return this._name;
    }
    get source(){
        return this._source;
    }
    get pokedex(){
        return this._pokedex;
    }

    //Setters
    set name(newName){
        this._name = newName;
    }
    set source(newSource){
        this._source = newSource;
    }
    set pokedex(newPokedex){
        this._pokedex = newPokedex;
    }
}

//Creating pokemons
const Bulbasaur= new Pokemon('Bulbasaur','assets/images/1Bulbasaur.png','');
const Ivysaur= new Pokemon('Ivysaur','assets/images/2Ivysaur.png','');
const Venusaur= new Pokemon('Venusaur','assets/images/3Venusaur.png','');
const Charmander= new Pokemon('Charmander','assets/images/4Charmander.png','');
const Charmeleon= new Pokemon('Charmeleon','assets/images/5Charmeleon.png','');
const Charizard= new Pokemon('Charizard','assets/images/6Charizard.png','');
const Squirtle= new Pokemon('Squirtle','assets/images/7Squirtle.png','');
const Wartortle= new Pokemon('Wartortle','assets/images/8Wartortle.png','');
const Blastoise= new Pokemon('Blastoise','assets/images/9Blastoise.png','');
const Caterpie= new Pokemon('Caterpie','assets/images/10Caterpie.png','');
const Metapod= new Pokemon('Metapod','assets/images/11Metapod.png','');
const Butterfree= new Pokemon('Butterfree','assets/images/12Butterfree.png','');
const Weedle= new Pokemon('Weedle','assets/images/13Weedle.png','');
const Kakuna= new Pokemon('Kakuna','assets/images/14Kakuna.png','');
const Beedrill= new Pokemon('Beedrill','assets/images/15Beedrill.png','');
const Pidgey= new Pokemon('Pidgey','assets/images/16Pidgey.png','');
const Pidgeotto= new Pokemon('Pidgeotto','assets/images/17Pidgeotto.png','');
const Pidgeot= new Pokemon('Pidgeot','assets/images/18Pidgeot.png','');
const Rattata= new Pokemon('Rattata','assets/images/19Rattata.png','');
const Rattata_alola= new Pokemon('Rattata_alola','assets/images/19Rattata_alola.png','');
const Raticate= new Pokemon('Raticate','assets/images/20Raticate.png','');
const Raticate_alola= new Pokemon('Raticate_alola','assets/images/20Raticate_alola.png','');
const Spearow= new Pokemon('Spearow','assets/images/21Spearow.png','');
const Fearow= new Pokemon('Fearow','assets/images/22Fearow.png','');
const Ekans= new Pokemon('Ekans','assets/images/23Ekans.png','');
const Arbok= new Pokemon('Arbok','assets/images/24Arbok.png','');
const Pikachu= new Pokemon('Pikachu','assets/images/25Pikachu.png','');
const Raichu= new Pokemon('Raichu','assets/images/26Raichu.png','');
const Raichu_alola= new Pokemon('Raichu_alola','assets/images/26Raichu_alola.png','');
const Sandshrew= new Pokemon('Sandshrew','assets/images/27Sandshrew.png','');
const Sandshrew_alola= new Pokemon('Sandshrew_alola','assets/images/27Sandshrew_alola.png','');
const Sandslash= new Pokemon('Sandslash','assets/images/28Sandslash.png','');
const Sandslash_alola= new Pokemon('Sandslash_alola','assets/images/28Sandslash_alola.png','');
const Nidoran_f= new Pokemon('Nidoran_f','assets/images/29Nidoran_f.png','');
const Nidorina= new Pokemon('Nidorina','assets/images/30Nidorina.png','');
const Nidoqueen= new Pokemon('Nidoqueen','assets/images/31Nidoqueen.png','');
const Nidoran_m= new Pokemon('Nidoran_m','assets/images/32Nidoran_m.png','');
const Nidorino= new Pokemon('Nidorino','assets/images/33Nidorino.png','');
const Nidoking= new Pokemon('Nidoking','assets/images/34Nidoking.png','');
const Clefairy= new Pokemon('Clefairy','assets/images/35Clefairy.png','');
const Clefable= new Pokemon('Clefable','assets/images/36Clefable.png','');
const Vulpix= new Pokemon('Vulpix','assets/images/37Vulpix.png','');
const Vulpix_alola= new Pokemon('Vulpix_alola','assets/images/37Vulpix_alola.png','');
const Ninetales= new Pokemon('Ninetales','assets/images/38Ninetales.png','');
const Ninetales_alola= new Pokemon('Ninetales_alola','assets/images/38Ninetales_alola.png','');
const Jigglypuff= new Pokemon('Jigglypuff','assets/images/39Jigglypuff.png','');
const Wigglytuff= new Pokemon('Wigglytuff','assets/images/40Wigglytuff.png','');
const Zubat= new Pokemon('Zubat','assets/images/41Zubat.png','');
const Golbat= new Pokemon('Golbat','assets/images/42Golbat.png','');
const Oddish= new Pokemon('Oddish','assets/images/43Oddish.png','');
const Gloom= new Pokemon('Gloom','assets/images/44Gloom.png','');
const Vileplume= new Pokemon('Vileplume','assets/images/45Vileplume.png','');
const Paras= new Pokemon('Paras','assets/images/46Paras.png','');
const Parasect= new Pokemon('Parasect','assets/images/47Parasect.png','');

//Declaring variables

//Variable that contains the available pokemon objects
var pokemon_array = [Bulbasaur,Ivysaur,Venusaur,Charmander,Charmeleon,Charizard,Squirtle,Wartortle,Blastoise,Caterpie,Metapod,Butterfree,Weedle,Kakuna,Beedrill,Pidgey,Pidgeotto,Pidgeot,Rattata,Rattata_alola,Raticate,Raticate_alola,Spearow,Fearow,Ekans,Arbok,Pikachu,Raichu,Raichu_alola,Sandshrew,Sandshrew_alola,Sandslash,Sandslash_alola,Nidoran_f,Nidorina,Nidoqueen,Nidoran_m,Nidorino,Nidoking,Clefairy,Clefable,Vulpix,Vulpix_alola,Ninetales,Ninetales_alola,Jigglypuff,Wigglytuff,Zubat,Golbat,Oddish,Gloom,Vileplume,Paras,Parasect];
//Keeps track of the position in the shuffled array
var index=0;
//To generate the game cycle the pokemon_array is shuffled and the game runs from 1 to 10 or full length depending on the user
var shuffled_array = [];
var timer = 10;
var intervalId;
var points = 0;

//Starts when the document is ready
$(document).ready(function(){
    //Generates a random order to use
    shuffled_array = shuffle(pokemon_array);
    console.log(shuffled_array);
    let newDiv = $('<div class="newDiv cell align-center h2">');
    let newImg = $('<img class="pkmn-image newImg">');
    //When the submit button is clicked the game starts
    $(".submit-button").unbind().on('click', function(){
        //Removes the div with the answer
        $('.newDiv').empty();
        $('.newDiv').remove();
        
        $('.roundNum').text(" "+(index+1));
        //Changes the start button text to submit
        console.log("1 ciclo " + index);
        //Hides the submit/next button
        $('.submit-button').hide();
        //Activates the buttons with the answers
        $('.pkmn').removeAttr('disabled');
        $('.pkmn').addClass('active');
        //Randomly assigns a number between 0 and the lenght of the shuffled array to select the fake answers
        let shuffle_1 = Math.floor(Math.random()*shuffled_array.length);
        let shuffle_2 = Math.floor(Math.random()*shuffled_array.length);
        let shuffle_3 = Math.floor(Math.random()*shuffled_array.length);
        console.log("1 " +shuffle_1+" 2 " +shuffle_2+" 3 " +shuffle_3);
        //Creates an array with the right answer and the fake ones mixed in
        shuffled_answers = [shuffled_array[index],shuffled_array[shuffle_1],shuffled_array[shuffle_2], shuffled_array[shuffle_3]];
        //Shuffles the answers so that the order is always different
        shuffled_answers = shuffle(shuffled_answers);
        //Adds the attributes to the image and the buttons
        $('.pkmn-image').attr('src',shuffled_array[index].source);
        $('.button.first').text(shuffled_answers[0].name);
        $('.button.second').text(shuffled_answers[1].name);
        $('.button.third').text(shuffled_answers[2].name);
        $('.button.fourth').text(shuffled_answers[3].name);
        console.log("3 index " + index);
        //Sets the timer to 10 and displays it on the screen
        timer = 10;
        $('.timer').text(timer);
        //Starts the countdown
        intervalId = setInterval(count,1000);
        //Adds the empty div to the answer section
        $('.answer').prepend(newDiv);
        //Unbinds so the clicks are only registered once
        $('.pkmn.active').unbind().on('click', function(event){
            console.log(event);
            console.log("5 " +this.innerText)
            console.log("6 " +shuffled_array[index].name)
            //Compares the button's text with the right answer
            if(this.innerText === shuffled_array[index].name){
                //If it's correct it hides the main section and shows a message congratulating the player
                $('.main').hide();
                newImg.attr('src',shuffled_array[index].source)
                $('.answer').append(newImg);
                console.log("7 correct");
                $(newDiv).text("Correct!");
                //Increases the points
                points++;
                $('.points').text(points);                
            }else{
                //If the answer is incorrect shows a message
                $(newDiv).text("Incorrect! It's "+shuffled_array[index].name+"!");
                //lives--;
                console.log("8 incorrect");
            }
            //Starts timeout for next round
            setTimeout(reset, 2000);
            //Clears the interval
            clearInterval(intervalId);
        })
        
    })


});


//Fisher-Yates (aka Knuth) Shuffle
function shuffle(arr1) {
    let ctr = arr1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arr1[ctr];
        arr1[ctr] = arr1[index];
        arr1[index] = temp;
    }
    return arr1;
}

function reset(){
    $('.main').show();
    $('.newImg').empty();
    $('.newImg').remove();
    //Adds 1 to index to move to next pokemon
    index++;
    console.log("reset");
    //Inactivates the pkmn buttons
    $('.pkmn').attr('disabled','disabled');
    //Shows submit button
    $('.submit-button').show();
    //Changes text of start button to next
    $('.submit-button').text("Next!");

}

function count() {
    console.log(timer);
    //Increment time by 1.
    timer--;
    // Show how much time is left
    $(".timer").text(timer);
    if(timer < 0){
        //clears the interval
        clearInterval(intervalId);
        timeOut();
        setTimeout(reset,2000);
    }
}

function timeOut(){
    
    console.log("Interval clear!");
    //Makes sure timer shows 0
    $('.timer').text(0);
    //Shows the 
    $('.newDiv').text("Time out! It's "+shuffled_array[index].name+"!");
    $('.pkmn').removeClass('active');
}
