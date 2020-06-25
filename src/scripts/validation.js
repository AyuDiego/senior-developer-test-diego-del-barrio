
function validar(){
    alert("Hello! I am an alert box!!");
    document.getElementById('formId').submit();
  
    var todo_correcto = true;
    
    
    
    
   
    if(!todo_correcto){
    alert('Algunos campos no están correctos, vuelva a revisarlos');
    }
    
    return todo_correcto;
    }
  validar();