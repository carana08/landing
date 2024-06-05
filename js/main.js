/*let loaded = ( eventLoaded ) => {
  
    window.alert("landing page loaded");
    console.log( eventLoaded );
    debugger;
  
}*/



let loaded = ( eventLoaded ) => {

    let myform = document.getElementById('formulario');
   
    myform.addEventListener('submit', ( event) => {
        event.preventDefault();
    const element1 = document.getElementById('element1');
 
 
  
      let element1Value = element1.value;
      
      // Validación del contenido del input 
  
      if( element1Value.length == 0 ) {
        
        element1.focus()
  
        alert('Ingrese su nombre por favor')
  
        return;
      }
  
      debugger;
  
    })
  
  }
  let loaded2 = ( eventLoaded ) => {

    let myform = document.getElementById('formulario');
   
    myform.addEventListener('submit', ( event) => {
        event.preventDefault();
    const element2 = document.getElementById('element2');
 
 
  
      let element2Value = element2.value;
      
      // Validación del contenido del input 
  
      if( element2Value.length == 0 ) {
        
        element2.focus()
  
        alert('Ingrese su email por favor')
  
        return;
      }
  
      debugger;
  
    })
  
  }
window.addEventListener('DOMContentLoaded', loaded);
window.addEventListener('DOMContentLoaded', loaded2);

