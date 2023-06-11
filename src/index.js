import Notiflix from 'notiflix';
import {fetchBreeds} from './cat-api';

 let storedBreeds = []
 const select_element = document.querySelector(".breed-select");
 const CatInfo = document.querySelector(".cat-info");
 select_element.addEventListener('change', OnChangeSelect);
 const ErrorInfo = document.querySelector(".error");
 const LoaderInfo = document.querySelector(".loader");

 ErrorInfo.style.display = 'none';


 fetchBreeds()
 .then((data) => {
LoaderInfo.style.display = 'none';
createOptionList(data);
storedBreeds=data;
})
.catch(function(error) {
ErrorInfo.style.display = 'block';
 console.log(error);
 Notiflix.Notify.failure('Error');
});

function createOptionList(cats) {
    const readyList = cats.map((c) => 
        `<option value="${c.id}">${c.name}</option>`
        )
        .join("");
        select_element.insertAdjacentHTML('beforeend', readyList);
};

function OnChangeSelect(){
    clearAll();
    LoaderInfo.style.display = 'block';
    const index=select_element.selectedIndex
    console.log(storedBreeds[index]); 
    CatInfo.insertAdjacentHTML('beforeend', createOneOption(storedBreeds[index]));
    LoaderInfo.style.display = 'none';
}

function createOneOption(option) {
return `<div>
<img src="${option.image.url}" alt="${option.name}"  height="300">
<div>
    <h1>${option.name}</h1>
    <p>${option.description}</p>
    <p>Temperament: ${option.temperament}</p>
</div>
</div>`
};

function clearAll() {
    CatInfo.innerHTML = '';
  };



