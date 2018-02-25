$(document).ready(function(){
  //type_multiplier = 3;
  mmm=0;
  $("#choosewood").on("click", change_to_wood)
  function change_to_wood(){
    $("#chosensymbol").html("wood");
    $("#chosensymbol").css("color", "brown")
    type_multiplier=3;
  }
   $("#choosestone").on("click", change_to_stone)
  function change_to_stone(){
    $("#chosensymbol").html("stone")
    $("#chosensymbol").css("color", "grey")
    type_multiplier=4;
  }
  $("#removebuttons").on("click", removbtn)
  function removbtn(){
  //$('form:last-child').remove();
  //$('form:last-child').remove();
  //$('form:last-child').remove();
    $('#revealscore').html("Choose one.");
    $('br').remove();
  };
  $("#dice1").on("click", getThatNumber1)
  $("#dice1").on("click", DTT);
  $("#dice2").on("click", getThatNumber2)
  $("#dice2").on("click", DTT);
  $("#dice3").on("click", getThatNumber3)
  $("#dice3").on("click",DTT)
  $("#dice4").on("click", getThatNumber4)
  $("#dice4").on("click",DTT)
  $("#dice5").on("click", getThatNumber5)
  $("#dice5").on("click", DTT)
  $("#dice6").on("click", getThatNumber6)
  $("#dice6").on("click", DTT)
  $("#dice7").on("click", getThatNumber7)
  $("#dice7").on("click",DTT)
  function getThatNumber1(){
    mmm = 1;
  }
  function getThatNumber2(){
    mmm = 2;
  }
   function getThatNumber3(){
    mmm = 3;
  }
  function getThatNumber4(){
    mmm = 4;
  }
   function getThatNumber5(){
    mmm = 5;
  }
  function getThatNumber6(){
    mmm = 6;
  }
  function getThatNumber7(){
    mmm = 7;
  }
  
  function DTT(){
    arrayofrandom = [];
    sum=0;
    //mmm=5;
    for (i=0; i<mmm; i++ ){
   arrayofrandom.push(Math.floor(Math.random()*6)+1);
   sum += parseFloat(arrayofrandom[i]) || 0;
      $("#revealscore").html("Take " + Math.floor(sum / type_multiplier) +" units.");
      //$("#logged").append("You have selected"+ Math.floor(sum / type_multiplier) +" units.");
       console.log(arrayofrandom);
       console.log(sum);
      
    }
    
      }
  
  
  }
  

  

  
  
 
  );