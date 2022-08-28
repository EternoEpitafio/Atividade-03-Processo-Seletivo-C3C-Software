const LuidyMoura = (NumeroLimite) => {
    let Resultado = []

    for( let i = 1; i <= NumeroLimite; i+=1){
        Resultado.push(i);
         if(i % 5 == 0){
            Resultado.splice(i,1,"Luidy")
            //Resultado[i] = "Luidy";
         }
         if(i % 9 == 0){
            Resultado.splice(i,1,"Moura")
            //Resultado[i] = "Moura";
         }
         if (i % 5 == 0 && i % 9 == 0){
            Resultado.splice(i,1,"LuidyMoura")
            //Resultado[i] = "LuidyMoura";
         }
    }
    return (Resultado)
 }

 console.log(LuidyMoura(45));