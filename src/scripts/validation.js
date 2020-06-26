var button = document.getElementById("idBtn");
button.onclick = function () {
  validar();
};

function validar() {



  var name = document.getElementById("name");
  var subname = document.getElementById("subname");
  var adress = document.getElementById("adress");
  var postalcode = document.getElementById("postalcode");
  var city = document.getElementById("city");
  var provincia = document.getElementById("provincia");
  var phone = document.getElementById("phone");
   




  if (name.value.trim() == "" || subname.value.trim() == "" ||
      adress.value.trim() == "" || postalcode.value.trim() == "" ||
      city.value.trim() == "" || provincia.value.trim() == "" ||
      phone.value.trim() == "" ) {

    document.getElementById("nameerror").style.display = "block";
    document.getElementById("nameerror").innerHTML = "Este campo es obligatorio.";

    document.getElementById("subnamerror").style.display = "block";
    document.getElementById("subnamerror").innerHTML = "Este campo es obligatorio.";

    document.getElementById("adresserror").style.display = "block";
    document.getElementById("adresserror").innerHTML = "Este campo es obligatorio.";

    document.getElementById("postalcodeerror").style.display = "block";
    document.getElementById("postalcodeerror").innerHTML = "Este campo es obligatorio.";

    document.getElementById("cityerror").style.display = "block";
    document.getElementById("cityerror").innerHTML = "Este campo es obligatorio.";

    document.getElementById("provinciaerror").style.display = "block";
    document.getElementById("provinciaerror").innerHTML = "Este campo es obligatorio.";
    
    document.getElementById("phoneerror").style.display = "block";
    document.getElementById("phoneerror").innerHTML = "Este campo es obligatorio.";



    return false;
  } else {
    document.getElementById("nameerror").style.display = "none";

    document.getElementById("subnamerror").style.display = "none";

    document.getElementById("adresserror").style.display = "none";

    document.getElementById("postalcodeerror").style.display = "none";

    document.getElementById("cityerror").style.display = "none";

    document.getElementById("provinciaerror").style.display = "none";

    document.getElementById("phoneerror").style.display = "none";

    true;
  }

}