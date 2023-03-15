let imgList = Array.from(document.querySelectorAll(".item img"));
let lightBoxContainer = document.querySelector('.lightBoxContainer');
let lightBoxItem = document.querySelector('.lightBoxItem');
let currentSlideIndex  ;
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let closeBtn = document.getElementById('close');

 for(let i = 0 ; i<imgList.length ; i++)
 {
    imgList[i].addEventListener('click' , function(e)
    {
       currentSlideIndex = imgList.indexOf(e.target);
        let imgSrc = e.target.getAttribute('src');
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`
        lightBoxContainer.classList.replace('d-none' , 'd-flex');
    })
 }

 function nextSlide ()
 {
    currentSlideIndex++
    if(currentSlideIndex == imgList.length)
    {
        currentSlideIndex = 0 ;
    }
   let imgSrc = imgList[currentSlideIndex].getAttribute('src');
   console.log(imgSrc);
   lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    
 }
 function prevSlide ()
 {
    currentSlideIndex--
    if(currentSlideIndex < 0)
    {
        currentSlideIndex = imgList.length-1 ;
    }
   let imgSrc = imgList[currentSlideIndex].getAttribute('src');
   console.log(imgSrc);
   lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    
 }
  

 nextBtn.addEventListener('click' , nextSlide);
 prevBtn.addEventListener('click' , prevSlide);
 closeBtn.addEventListener('click' , function()
 {
    lightBoxContainer.classList.replace('d-flex' , 'd-none');
    console.log("hello");
 })