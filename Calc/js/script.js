'use strict';

const inputEur=document.querySelector('#eur'),
    inputUsd = document.querySelector('#usd'),
    inputRub = document.querySelector('#rub');

    inputEur.addEventListener('input', ()=>{
        const request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('load', ()=>{
            if(request.status===200){
                const data=JSON.parse(request.response);
                inputUsd.value=(+inputEur.value*data.current.usd).toFixed(2);
                inputRub.value = (+inputEur.value * data.current.rub).toFixed(3);
            }else{
                inputUsd.value="что-то пошло не так";
                inputRub.value = "что-то пошло не так";
            }
        });
    });

