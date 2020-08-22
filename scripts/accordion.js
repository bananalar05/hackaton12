'use strict'
function accordion(){

  let btnItems = document.querySelectorAll('.collapse .collapse__tittle');

  for(let i=0; i< btnItems.length; i++ ) {

    btnItems[i].addEventListener('click',function(e) {

      let btn = e.target;

      if(btn.className=="collapse__tittle active") {
        removerClase()
      } else {
        removerClase();
        btn.classList.add("active");
      }
    })
  }

  function removerClase(){
    for(let i=0; i<btnItems.length; i++){
      btnItems[i].classList.remove("active");
    }
  }

}

export default accordion