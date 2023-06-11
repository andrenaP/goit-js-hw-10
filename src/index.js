import Notiflix from 'notiflix';
import {fetchBreeds,fetchCatByBreed} from './cat-api';
import SlimSelect from 'slim-select'

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
new SlimSelect({
    select: '.breed-select'
  });
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
    fetchCatByBreed(storedBreeds[index].id).then((data) => {
        
        CatInfo.insertAdjacentHTML('beforeend', createOneOption(storedBreeds[index],data[0].url));
        })
        .catch(function(error) {
        ErrorInfo.style.display = 'block';
         console.log(error);
         Notiflix.Notify.failure('Error');
        });
}

function createOneOption(option,url) {
    CatInfo.classList.toggle("hidden");
loadImage(url).then((data)=>{CatInfo.classList.toggle("hidden"); LoaderInfo.style.display = 'none';})
return `<div>
<img src="${url}" alt="${option.name}"  height="300">
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



  const loadImage = src =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  })  
;
