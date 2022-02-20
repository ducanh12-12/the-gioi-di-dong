const nextBtn = document.querySelector('.slide-move-next')
const backBtn = document.querySelector('.slide-move-back')
const width = document.querySelector('.slide').clientWidth
const moveSlide = document.querySelector('.slide-img')
const img = moveSlide.getElementsByTagName('img')
const max = width * img.length - width;
let Chuyen = 0
const thumnailFooter = document.querySelector('.thumail-footer')
let thumnailP = thumnailFooter.getElementsByTagName('p')
const thumnailA = [...thumnailP]
let index = 0;
const pullEvent = document.querySelector('.products')
const nextBtnLaptop = document.querySelector('.slide-move-laptop-next')
const backBtnLaptop = document.querySelector('.slide-move-laptop-back')
const moveSlideLaptop = document.querySelector('.products-sale-move')
const moveSlideLaptopWidth = document.querySelector('.products-sale-move').clientWidth
let widthLaptop = 0;
const nextBtnAirpod = document.querySelector('.slide-move-airpod-next')
const backBtnAirpod = document.querySelector('.slide-move-airpod-back')
const moveSlideAirpod = document.querySelector('.products-sale-airpod')
const moveSlideAirpodWidth = document.querySelector('.products-sale-airpod').clientWidth
let widthAirpod = 0;
const listWatch = document.querySelectorAll('.watch-right-header ul li')
const listWatchA = [...listWatch]
const watchChoose = document.querySelectorAll('.product-watch');
const watchMove = document.querySelectorAll('.product-watch');
const watchMoveA = [...watchMove]
const nextBtnWatch = document.querySelector('.slide-move-watch-next')
const backBtnWatch = document.querySelector('.slide-move-watch-back')
let widthWatch = 0;
nextBtn.addEventListener('click',() =>{
    if (Chuyen < max) {
        Chuyen += width
    } else{
        Chuyen = 0
    }
 
    moveSlide.style.marginLeft = `-${Chuyen}px`;
    
})
backBtn.addEventListener('click',() =>{
    if (Chuyen > 0) {
        Chuyen -= width
        moveSlide.style.marginLeft = `-${Chuyen}px`;
    } else {
        Chuyen = max ;
        moveSlide.style.marginLeft = `-${Chuyen}px`;
    }
  
    
})
setInterval(() =>{
    if (Chuyen < max) {
        Chuyen += width
    } else{
        Chuyen = 0
    }
    moveSlide.style.marginLeft = `-${Chuyen}px`;
},3000)
// setInterval(function(){
//      thumnailA.map(function(p){
//         p.classList.remove('synced')
//         return p
//    })
// },6000)
thumnailA.map(function(p,i){
    p.addEventListener('click',function(){
       thumnailA[0].classList.remove('synced')
       thumnailA[1].classList.remove('synced')
       thumnailA[2].classList.remove('synced')
       thumnailA[3].classList.remove('synced')
       thumnailA[4].classList.remove('synced')
       p.classList.add('synced')
       index = i
       
        
     
    })
    // thumnailA[index].classList.remove('synced')
    // if(index = i){
    //     p.classList.add('synced')
    //     index = i;

    // }else if(index <= i ){
    //     p.classList.add('synced')
    //     thumnailA[index].classList.remove('synced')
    //     index = i;
    // }
  
})
thumnailA[index].classList.add('synced')
setInterval(function(){
    
    if(index < thumnailA.length-1){ 
        index++      
        if(index == 0){
            thumnailA[index].classList.add('synced')
        } else {
            thumnailA[index-1].classList.remove('synced')
            thumnailA[index].classList.add('synced')
        }
       
       
    } else if(index == thumnailA.length-1){
        index = 0
        thumnailA[thumnailA.length-1].classList.remove('synced')
        thumnailA[index].classList.add('synced')
    }
    
    
},3000)
     pullEvent.ontouchmove = function(){
        let shiftX = event.clientX - pullEvent.getBoundingClientRect().left;
        if(shiftX >= 2451){
            shiftX = 2451
        }
    
        pullEvent.style.transform = `translate3d(-${shiftX}px, 0px, 0px)`
       
     }
 nextBtnLaptop.addEventListener('click',function(){
     console.log(moveSlideLaptopWidth)
     if(widthLaptop = moveSlideLaptopWidth){
         widthLaptop = moveSlideLaptopWidth-1200
     } else{
         widthLaptop += 1200;
     }
     moveSlideLaptop.style.marginLeft = `-${widthLaptop}px`;
     console.log(widthLaptop)
 })
 backBtnLaptop.addEventListener('click',function(){
    if(widthLaptop > 0){
        widthLaptop -= 1200
    }
    moveSlideLaptop.style.marginLeft = `${widthLaptop}px`;
    console.log(widthLaptop)
})
nextBtnAirpod.addEventListener('click',function(){
    console.log(moveSlideAirpodWidth)
    if(widthAirpod = moveSlideAirpodWidth){
        widthAirpod = moveSlideAirpodWidth-1200
    } else{
        widthAirpod += 1200;
    }
    moveSlideAirpod.style.marginLeft = `-${widthAirpod}px`;
   
})
backBtnAirpod.addEventListener('click',function(){
   if(widthAirpod > 0){
       widthAirpod -= 1200
   }
   moveSlideAirpod.style.marginLeft = `${widthAirpod}px`;
  
})
listWatch[0].classList.add('act')
listWatchA.map(function(li,i){
        li.addEventListener('click',function(){
            listWatchA[0].classList.remove('act')
            listWatchA[1].classList.remove('act')
            listWatchA[2].classList.remove('act')
            listWatchA[3].classList.remove('act')
            li.classList.add('act')
            watchChoose[0].style.display = 'none'
            watchChoose[1].style.display = 'none'
            watchChoose[2].style.display = 'none'
            watchChoose[3].style.display = 'none'
            watchChoose[i].style.display = 'flex'
            widthWatch = 0
            watchMoveA[0].style.marginLeft = `0px`;
            watchMoveA[1].style.marginLeft = `0px`;
            watchMoveA[2].style.marginLeft = `0px`;
            watchMoveA[3].style.marginLeft = `0px`;
        })
    })
    watchMoveA.map(function(i){
    
        nextBtnWatch.addEventListener('click',function(){
            if(widthWatch = i.clientWidth){
                widthWatch = i.clientWidth-960
            } else{
                widthWatch += 960;
            }
            i.style.marginLeft = `-${widthWatch}px`;
            console.log(widthWatch)
        })
        backBtnWatch.addEventListener('click',function(){
           if(widthWatch > 0){
               widthWatch -= 960
           }
           i.style.marginLeft = `${widthWatch}px`;
           console.log(widthWatch)
       })
    })
        
  

 