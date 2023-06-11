export function fetchBreeds(){
    return fetch(`https://api.thecatapi.com/v1/breeds`,{headers: {
        'x-api-key': "live_WPzBZmCjUADUK2CU2kUAFQLFhCntDUpz85snWQgTPkRxpqfgkLIaUYUyeLsHkOR2"
      }})
    .then((response) => {
     return response.json();
    })
    .catch(function(error) {
     console.log(error);
    });
}
export function fetchCatByBreed(ID){
    return fetch(`https://api.thecatapi.com/v1/images/search?x-api-key=live_WPzBZmCjUADUK2CU2kUAFQLFhCntDUpz85snWQgTPkRxpqfgkLIaUYUyeLsHkOR2&breed_ids=${ID}`)
    .then((response) => {
     return response.json();
    })
    .catch(function(error) {
     console.log(error);
    });
}