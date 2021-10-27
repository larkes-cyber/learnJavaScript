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

document.addEventListener('DOMContentLoaded',()=>{
    //
    let addFilm=(item,movieList)=>{
        if(item!=''){
            if(item.length>21){
                movieDB.movies.push(`${item.slice(0,21)}...`);
            }
            else{
                console.log(item)
                movieDB.movies.push(item);
            }
        }
        movieList.innerHTML='';
        document.querySelector('.adding__input').value=' ';
        movieDB.movies.sort();
        movieDB.movies.forEach(function(item,index){
            movieList.innerHTML+=`
             <li class="promo__interactive-item"> ${index+1} ${item}
            <div class="delete"></div>
            </li>
            `
        });
        let btns=document.querySelectorAll('.delete');
            btns.forEach((item,i)=>{
                item.addEventListener('click',()=>{
                    movieDB.movies.splice(i,1);
                    item.parentNode.remove();
                   
                    
                });
            });
    }
    //
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const arr= document.querySelector('#arr');
    const div=document.querySelector('.promo__bg');
    const movieList=document.querySelector('.promo__interactive-list');
    const addForm=document.querySelector('#sumb');
   //
    function make(){
        document.querySelector('.promo__adv').remove();
        document.querySelector('.promo__genre').textContent='драма';
        div.style.cssText='background: url("img/bg.jpg"); background-position: center; background-size: cover; background-repeat: no-repeat;';
    }
   //

    //
    addForm.addEventListener('click',(event)=>{
        event.preventDefault();
        let item=document.querySelector('.adding__input').value;
        movieDB.movies.sort();
        if(item){
            addFilm(item,movieList);
           
        }
    
       
    });


    document.querySelectorAll('.delete').forEach((item,i)=>{
        item.addEventListener('click',()=>{
            movieDB.movies.splice(i,1);
            item.parentNode.remove();
          
            console.log(movieDB.movies)
            
        });
    });
   //
    make();
    
    
    
});
/*
function search(film){
       let array=movieDB.movies;
       for(let i=0;i<array.length;i++){
           array[i]=array[i].toLowerCase();
       }
       let fim=film.toLowerCase();
       console.log(fim,array);
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            console.log(element==fim)
            if (element===fim){
               alert(1)
                if(index==0){
                    array.shift(array[index]);
                    return array;
                    break;
                 
                }
                if(index==array.length-1){
                     array.pop(array[index]);
                     return array;
                     break;
                   
                }
                else{
                    array.slice(index,1);
                    return array;
                    break;
                 
                }
            }
            
        }
    }
    
    let btns=document.querySelectorAll('.delete');
        btns.forEach(item=>{
            item.addEventListener('click',()=>{
                movieDB.movies=search(item.parentNode.textContent);
                item.parentNode.remove();

                console.log( movieDB.movies)
                
            });
        });
        */