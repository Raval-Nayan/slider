const slides =document.querySelectorAll('.slide'); 
    //console.log(slides);
    var counter=0;

    slides.forEach(
        (slide , index) =>
         {
            slide.style.left =   `${index * 100}%`;
             
         }
    )

    const goNext = () => {
        if(counter === slides.length - 1){  
                            // lenth 4 
                            // image 0 1 2 3
                            counter = 0;
                            slideImage()
            return
        }
        counter++
        slideImage()
    }

    const goPre = () => {
        if(counter === 0){
            counter = 3;
            slideImage()
            return
        }
        counter--
        slideImage()
    }

    slideImage = ()=>{
        slides.forEach(
            (slide)=> {
                slide.style.transform = `translateX(-${counter *100}%)`
            }
        )
    }