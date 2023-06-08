import { useEffect } from "react";


const Scroll = () => {
    useEffect(() => {

        function handleScroll(){
    
            const elements = document.querySelectorAll('.slide-in');
             
            elements.forEach((element) => {
              const slideInAt= (window.scrollY + window.innerHeight) - (element.offsetHeight*0.5);
              const elementBottom = element.offsetTop + element.offsetHeight;
              const isHalfShown = slideInAt > element.offsetTop;
              const isNotScrolledPast = window.scrollY < elementBottom;
    
              
              if(isHalfShown && isNotScrolledPast) {
                      element.classList.add('active');
              } else{
                      element.classList.remove('active');
                  }
    
            });
    
        }
    
        window.addEventListener('scroll', handleScroll);
    
      },[]);

}


export default Scroll;

