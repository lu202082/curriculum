let c1=document.getElementById("c1");
let c2=document.getElementById("c2");
let c3=document.getElementById("c3");
let c4=document.getElementById("c4");
let c5=document.getElementById("c5");
let c6=document.getElementById("c6");
let c7=document.getElementById("c7");

	c1.onclick = function(){
		document.getElementById("c8").innerHTML="Nombre y Apellido: ";
		document.getElementById("c9").innerHTML="Luis Fernandez Petra";
}
	c2.onclick = function(){
		document.getElementById("c8").innerHTML="Telefono: ";
		document.getElementById("c9").innerHTML="054 3537 608413";

}

	c3.onclick = function(){
		document.getElementById("c8").innerHTML="E-mail: ";
		document.getElementById("c9").innerHTML="luisfernandezpetra@gmail.com";
    }


	c4.onclick = function(){
        document.getElementById("c8").innerHTML="Domicilio: ";
        document.getElementById("c9").innerHTML="Velez Sarsfield 159 - Bell Ville - Cordoba - Argentina";
        }


    c5.onclick = function(){
        document.getElementById("c8").innerHTML="Fecha de Nacimiento: ";
        document.getElementById("c9").innerHTML="27 de Abril de 1967";
        }

    c6.onclick = function(){
        document.getElementById("8").innerHTML="Estudios: ";
        document.getElementById("9").innerHTML="Bachiller - Programador Web";
                
        }

    c7.onclick = function(){
        document.getElementById("c8").innerHTML="Trabajos: ";
        document.getElementById("c9").innerHTML="Banco Sudecor Litoral SA   -   SISCARD SA";
        }
