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