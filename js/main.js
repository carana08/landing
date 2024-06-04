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
  
        alert('Ingrese un texto válido')
  
        return;
      }
  
      debugger;
  
    })
  
  }
window.addEventListener('DOMContentLoaded', loaded);

