'use strict';

function getDogImages(breed){
    let search = 'https://dog.ceo/api/breed/'+ breed +'/images/random';
    fetch(search)
        .then(response => {
            if (!response.ok) {
                throw Error(response.status);
            }
            return response;
            })
            .then(response => response.json())
            .then(responseJson => 
                displayDogs(responseJson))
            .catch(err => 
                failureCallback(err))
}

function displayDogs(happy){
    console.log(happy);
    $('.dogResults').append(`<img src="${happy.message}">`)
    $('.dogResults').removeClass('hidden');
}
 function failureCallback(unhappy) {
    console.log(`Error from API: ${unhappy.message} code`);
    $('.dogResults').append(`Uo oh!  Where are all the puppies!?<br>Please check your spelling.<br>If it is correct then the breed doesn't exsist in our image base.<br>${unhappy.message} Error`)
    $('.dogResults').removeClass('hidden');
 }

function dogSearch(){
    $('form').submit(event => {
        event.preventDefault();
        let str = document.getElementById("breedOfDog").value;
        let breedOfDog = str.toLowerCase();
        getDogImages(breedOfDog);
        $('.dogResults').empty();
        document.getElementById("userForm").reset();
        
    });
}

$(function() {
    console.log('Search is loaded');
    dogSearch();
});


