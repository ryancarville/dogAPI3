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
    console.log(unhappy.message);
    $('.dogResults').append(`We are sorry but your breed doesn't exsist in our image base. ${unhappy.message} Error`)
    $('.dogResults').removeClass('hidden');
 }

function dogSearch(){
    $('form').submit(event => {
        event.preventDefault();
        $('.dogResults').empty();
        let str = document.getElementById("breedOfDog").value;
        let breedOfDog = str.toLowerCase();
        getDogImages(breedOfDog);
    });
}

$(function() {
    console.log('Search is loaded');
    dogSearch();
});


