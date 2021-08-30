/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Бог грома"
    ]
};


document.addEventListener('DOMContentLoaded', () => {
      const adv = document.querySelectorAll('.promo__adv img');


const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
       });
}; 
deleteAdv(adv);    

let genre = document.querySelector('.promo__genre');

console.log(genre);
let bg = document.querySelector('.promo__bg');

let films = document.querySelector('.promo__interactive-list');
const makeChanges = () => {
    genre.textContent="ДРАМА";
    bg.style.backgroundImage='url("img/bg.jpg")'; 
};

makeChanges();


const sortArr = (arr) => {
    arr.sort();
};

let addForm = document.querySelector('form.add'),
addInput = addForm.querySelector('.adding__input'),
checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) =>{
event.preventDefault();

let newFilm = addInput.value;
const favorite = checkbox.checked;

if(newFilm){
    if(newFilm.length>21){
        newFilm = `${newFilm.substring(0,22)}...`;
    }

     if(favorite){
         console.log("Добавляем любимый фильм")
     }

    movieDB.movies.push(newFilm);
    createMovieList(movieDB.movies, films);
}


event.target.reset();
});

function createMovieList(film, parent){
    parent.innerHTML='';
    sortArr(film);
    film.forEach((item, i) => parent.innerHTML+=`<li class="promo__interactive-item">${i+1} ${item}
    <div class="delete"></div>
    </li>`
    );

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(movieDB.movies, films);
    });
    });

}
createMovieList(movieDB.movies, films);

});




