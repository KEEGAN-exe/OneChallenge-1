var CajaDatos = document.getElementById("input")
var Encriptar = document.getElementById("encriptar")
var MostrarResultado = document.getElementById("resultado")
var Desencriptar = document.getElementById("desencriptar")
var CopiarTexto = document.getElementById("copiar")

function validarCadena() {
    var valores = /^[a-zA-Z0-9 ]*$/;
    return valores.test(CajaDatos.value);
}

function limpiar(){
    CajaDatos.focus()
    CajaDatos.value = ""
}

function encriptacion(){

    var mensaje = CajaDatos.value
    var resultado = ""

    if(validarCadena()){
        if(mensaje != ""){
            if(mensaje != mensaje.toUpperCase()){
                for (let i = 0; i < mensaje.length; i++) {
        
                    if(mensaje[i] === "a"){
                        resultado += "ai"
                    }else if (mensaje[i] === "e"){
                        resultado += "enter"
                    }else if (mensaje[i] === "i"){
                        resultado += "imes"
                    }else if (mensaje[i] === "o"){
                        resultado += "ober"
                    }else if (mensaje[i] === "u"){
                        resultado += "ufat"
                    }else{
                        resultado += mensaje[i]
                    }
                }

                MostrarResultado.innerHTML = resultado
            }
            else{
                alert("Error, campo de texto con mayusculas")
                limpiar()
            }
        }else{
            alert("Error, campo de texto vacio")
        }
    }else{
        alert("Error, campo de texto con caracteres especiales")
        limpiar()
    }

}

function desencriptar(){
    var mensaje = CajaDatos.value
    var resultado = ""

    if(validarCadena()){
        if(mensaje != ""){
            if(mensaje != mensaje.toUpperCase()){
                for (let i = 0; i < mensaje.length; i++) {
                    if(mensaje.substring(i,i+2) === "ai"){
                        resultado += "a"
                        i += 1
                    }else if(mensaje.substring(i,i+4) === "ober"){
                        resultado += "o"
                        i += 3
                    }else if(mensaje.substring(i,i+4) === "imes"){
                        resultado += "i"
                        i += 3
                    }else if(mensaje.substring(i,i+4) === "ufat"){
                        resultado += "u"
                        i += 3
                    }else if(mensaje.substring(i,i+5) === "enter"){
                        resultado += "e"
                        i += 4
                    }else{
                        resultado += mensaje[i]
                    }  
                }
                MostrarResultado.innerHTML = resultado

            }else{
                alert("Error, campo de texto con mayusculas")
                limpiar()
            }
        }else{
            alert("Error, campo de texto vacio")
        }
    }else{
        alert("Error, campo de texto con caracteres especiales")
        limpiar()
    }
}

function copiar(){
    var contenido = document.getElementById("resultado").innerText
    navigator.clipboard.writeText(contenido).then(function(){
        alert("El texto ha sido copiado")
    })

    .catch(function(error){
        alert("Ocurrio un error")
    });
}

CopiarTexto.onclick = copiar
Encriptar.onclick = encriptacion
Desencriptar.onclick = desencriptar
