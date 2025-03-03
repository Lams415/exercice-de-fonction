
// exercice 5
 var num1 = 20,
     num2 = 3,
     nom = "licorne";

     function multiplier (){
         return num1 * num2;
     }
     console.log(multiplier());

     // exercice 6

     var nom1 =  "eyal",
        repas1= "poulet", 
        repas2= "riz";

        function repas(){ 
        var date = new Date();

        function manger(){
    return ` ${date} ${nom1} a mangé ces 2 repas qui sont :  ${repas1} et ${repas2}`;
      }
      return manger();
        }
        console.log(repas());