var button = document.getElementById("idBtn");
button.onclick = function () {
  validar();
};

function validar(){
  

  
  var name = document.getElementById("name");
  var subname = document.getElementById("subname");
  if (name.value.trim() == "" || subname.value.trim()== "" ) {
    document.getElementById("nameerror").style.display = "block";
    document.getElementById("nameerror").innerHTML = "Este campo es obligatorio.";
    
    document.getElementById("subnamerror").style.display = "block";
    document.getElementById("subnamerror").innerHTML = "Este campo es obligatorio.";
    
    return false;
  } else {
    document.getElementById("nameerror").style.display = "none";
    document.getElementById("nameerror").innerHTML = "none";

    document.getElementById("subnamerror").style.display = "none";
    document.getElementById("subnamerror").innerHTML = "none";
    // document.getElementById("succesuname").style.display = "block";
    // document.getElementById("succesuname").innerHTML = "Success";
    true;
  }
  
}  