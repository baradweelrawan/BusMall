'use strict'
let attempts=0;
let maxAttempts = 25;
let attemptsEl = document.getElementById('attempts');
let products = [];

function productsImg(productName){
    this.productName=productName.split('.')[0];
    this.source='images/' + productName ;
    this.clicks=0;
    this.views=0;
    products.push(this);

}
let productsImags=['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','boots.jpg','breakfast.jpg',
'bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg',
'scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg'];

for(let i=0; i<productsImags.length; i++ )
{
    new productsImg(productsImags[i])
}

function generateImg(){
    return Math.floor(Math.random()*products.length);

}

let lftImgEl= document.getElementById('leftImg');
let mdltImgEl= document.getElementById('middleImg');
let rghtImgEl= document.getElementById('rightImg');

let leftImgIndex;
let middleImgIndex;
let rightImgIndex;


function renderImg(){
    leftImgIndex=generateImg();
    middleImgIndex=generateImg();
    rightImgIndex=generateImg();

 while (leftImgIndex === middleImgIndex && leftImgIndex===rightImgIndex ) {
    leftImgIndex=generateImg();
 }  
 lftImgEl.setAttribute('src',products[leftImgIndex].source);
 products[leftImgIndex].views++;

 mdltImgEl.setAttribute('src',products[middleImgIndex].source);
 products[middleImgIndex].views++;

 rghtImgEl.setAttribute('src',products[rightImgIndex].source);
 products[rightImgIndex].views++;

 attemptsEl.textContent=attempts;

}

renderImg();

lftImgEl.addEventListener('click',handelClicks);
mdltImgEl.addEventListener('click',handelClicks);
rghtImgEl.addEventListener('click',handelClicks);

function handelClicks(event){
    attempts ++;
    if (attempts <= maxAttempts ){
        console.log(event.target.id)

        if (event.target.id ==='leftImg'){
            products[leftImgIndex].clicks++;

        }else if (event.target.id ==='middleImg'){
            products[middleImgIndex].clicks++;   

    } else if (event.target.id ==='rightImg'){
        products[rightImgIndex].clicks++;
}
renderImg();

}else {
    
    let buttonEl=document.getElementById('rslt')
    let ulEl=document.createElement('results')
    buttonEl.appendChild(ulEl)
    let liEl;
    for (let i=0; i<products.length ;i++ ){
        liEl=document.createElement('li');
        ulEl.appendChild(liEl)
        liEl.textContent = `${products[i].productName} has ${products[i].views} views and has ${products[i].clicks} clicks.`
    }
    lftImgEl.removeEventListener('click', handelClicks);
    mdltImgEl.removeEventListener('click', handelClicks);
    rghtImgEl.removeEventListener('click', handelClicks);

}
}




   