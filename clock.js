 setInterval(setClock, 1000);

const hour=document.querySelector("[data-hour]");
const minute=document.querySelector("[data-minute]");
const second=document.querySelector("[data-second]");


function setClock(){    
    const date= new Date()
    const secRatio= date.getSeconds()/60;
    const minRatio= (secRatio+date.getMinutes())/60;
    const hourRatio= (minRatio+date.getHours())/12;
    setRotation(hour, hourRatio);
    setRotation(minute, minRatio);
    setRotation(second, secRatio);    
};


function setRotation(element, rotation){
    element.style.setProperty('--rotation', rotation*360)
}


setClock();