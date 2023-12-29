function calcularNivel(vitorias , derrotas){
    var saldodeRackeadas = Math.abs( vitorias - derrotas);
    var nivel;
    
    if(vitorias < 10){
        nivel = "Ferro"
      }else if(vitorias >=11 && vitorias <=20){
        nivel ="Bronze"
      }else if(vitorias >=21 &&  vitorias <=50 ){
        nivel ="Prata "
      }else if(vitorias >=51 &&  vitorias <=80 ){
          nivel ="Ouro"
      }else if(vitorias >=81 && vitorias <=90 ){
          nivel ="Diamante"
      }else if(vitorias >=91 && vitorias <=100){
          nivel = "Lendario"
      }else{
       nivel ="Imortal"
       }
        return{saldodeRackeadas , nivel}
        
    }
    
    var vitorias =parseInt( "75")
    var derrotas = parseInt("20")
    
    var resultado = calcularNivel(vitorias,derrotas)
    
    console.log(" O Heroi tem o saldo igual a  " +  vitorias  +" esta no nivel "+ resultado.nivel +"!!!")
    
    