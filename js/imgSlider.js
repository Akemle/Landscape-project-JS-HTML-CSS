var img=0;
var slider;
var currentImg = img;

function ImgLimit(){
    if(img>5){
        img=1;
    }
    else if(img<1){
        img=5;
    }
    img++;

    changeImg(img);
}

function changeImg(img){
    if(img>5){
        img=1;
    }
    else if(img<1){
        img=5;
    }
    slider=document.getElementById("imgSlider");
    slider.style.backgroundImage="url(img/imgs/image"+img+".jpg)";
}

function changeImgManual(direction){
    if(img>5){
        img=1;
    }
    else if(img<1){
        img=5;
    }
    img+=direction;
    changeImg(img);
}

setInterval(ImgLimit, 8000);
window.addEventListener("load", ImgLimit);


