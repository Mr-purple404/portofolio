const nav = document.querySelector('nav');

      window.addEventListener('scroll',() => {
        console.log(window.scrollY);
        if(window.scrollY >=610 && window.scrollY <=1320  ){
          nav.classList.add('test')
        }
        else{
          nav.classList.remove('test')
        }
      }
      )