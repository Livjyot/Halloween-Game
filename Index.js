function refresh() {
    const bg_img = ['url("./Images/2.jpg")','url("./Images/5.jpg")','url("./Images/6.jpg")','url("./Images/7.jpg")','url("./Images/8.png")','url("./Images/9.png")']

    const section = document.getElementById('holloween_bg');

    const bg = bg_img[Math.floor(Math.random() * bg_img.length)];
    section.style.backgroundImage = bg;
}
setInterval(refresh, 5000);

function change (){
     document.getElementById('chan').style.cssText = 'display:flex;'
     document.getElementById('model_box').style.cssText = 'display:none;'
     var a = document.getElementById('play');
     a.play();
     document.getElementById('boy_char').style.cssText = 'display:flex;'
     document.getElementById('game_text').style.cssText = 'display:flex;'

}

// for task1
// Story 1 
function response (){
  document.getElementById("response1").style.cssText = 'display:block;'
  document.getElementById("task2").style.cssText = 'display:none;' 
  document.getElementById("task4").style.cssText = 'display:block;' 
  document.getElementById("task3").style.cssText = 'display:block;' 

}
// for task 2 
function response2 (){
  document.getElementById("response2").style.cssText = 'display:block;'
  document.getElementById("task1").style.cssText = 'display:none;' 
  document.getElementById("task3").style.cssText = 'display:none;' 
  document.getElementById("task4").style.cssText = 'display:none;'
}

// for task 3
function response3 (){
  document.getElementById("response3").style.cssText = 'display:block;'
  document.getElementById("task4").style.cssText = 'display:none;' 
}
function response4 (){
  document.getElementById("response4").style.cssText = 'display:block;'
  document.getElementById("task3").style.cssText = 'display:none;' 
}

// Story 2 
function resultTwo1(){
   document.getElementById("rsTask2").style.cssText = 'display:none;' 
   document.getElementById("rsTask3").style.cssText = 'display:block;' 
   document.getElementById("rsTask3").style.cssText = 'display:block;' 
   document.getElementById("rsTask4").style.cssText = 'display:block;' 
   document.getElementById("resultTwo1").style.cssText = 'display:block;' 
}
function resultTwo2(){
     document.getElementById("rsTask7").style.cssText = 'display:block;' 
     document.getElementById("rsTask8").style.cssText = 'display:block;'
     document.getElementById("resultTwo6").style.cssText = 'display:block;'
}

function resultTwo3(){
   document.getElementById("rsTask5").style.cssText = 'display:block;' 
   document.getElementById("rsTask6").style.cssText = 'display:block;' 
   document.getElementById("resultTwo2").style.cssText = 'display:block;' 
   document.getElementById("rsTask4").style.cssText = 'display:none;' 
}
function resultTwo4(){
     document.getElementById("rsTask3").style.cssText = 'display:block;' 
     
   document.getElementById("resultTwo5").style.cssText = 'display:block;' 
    
}
function resultTwo5(){
   document.getElementById("resultTwo3").style.cssText = 'display:block;' 
   document.getElementById("rsTask6").style.cssText = 'display:none;' 
    
}
function resultTwo6(){
    document.getElementById("resultTwo4").style.cssText = 'display:block;' 
   document.getElementById("rsTask5").style.cssText = 'display:none;' 
}
function resultTwo7(){
    document.getElementById("resultTwo7").style.cssText = 'display:block;' 
    document.getElementById("rsTask8").style.cssText = 'display:none;' 
    
}
function resultTwo8(){
    document.getElementById("resultTwo8").style.cssText = 'display:block;' 
    document.getElementById("rsTask7").style.cssText = 'display:none;' 
}

// Story 3
function resultThree1(){
    document.getElementById("rs3Task1").style.cssText = 'display:block;' 
    document.getElementById("rs3Task3").style.cssText = 'display:block;' 
    document.getElementById("rs3Task4").style.cssText = 'display:block;' 
    document.getElementById("rs3Task2").style.cssText = 'display:none;' 
    document.getElementById("resultThree1").style.cssText = 'display:block;' 
}
function resultThree2(){
    document.getElementById("resultThree4").style.cssText = 'display:block;' 
    document.getElementById("rs3Task1").style.cssText = 'display:none;' 
}
function resultThree3(){
    document.getElementById("rs3Task4").style.cssText = 'display:none;' 
    document.getElementById("resultThree3").style.cssText = 'display:block;' 

}
function resultThree4(){
 document.getElementById("rs3Task3").style.cssText = 'display:none;' 
    document.getElementById("resultThree4").style.cssText = 'display:block;'
}


// Story 4 
function resultFour1(){
 document.getElementById("rs4Task2").style.cssText = 'display:none;' 
 document.getElementById("rs4Task3").style.cssText = 'display:block;' 
 document.getElementById("rs4Task4").style.cssText = 'display:block;' 
 document.getElementById("resultFour2").style.cssText = 'display:block;' 

}
function resultFour2(){
 document.getElementById("rs4Task1").style.cssText = 'display:none;' 
 document.getElementById("rs4Task5").style.cssText = 'display:block;' 
 document.getElementById("rs4Task6").style.cssText = 'display:block;' 
 document.getElementById("resultFour1").style.cssText = 'display:block;' 

}
function resultFour3(){
 document.getElementById("rs4Task4").style.cssText = 'display:none;' 
 document.getElementById("resultFour3").style.cssText = 'display:block;' 

}
function resultFour4(){
  document.getElementById("rs4Task3").style.cssText = 'display:none;' 
 document.getElementById("resultFour4").style.cssText = 'display:block;' 

}
function resultFour5(){
  document.getElementById("rs4Task6").style.cssText = 'display:none;' 
 document.getElementById("resultFour5").style.cssText = 'display:block;' 

}
function resultFour6(){
  document.getElementById("rs4Task5").style.cssText = 'display:none;' 
 document.getElementById("resultFour6").style.cssText = 'display:block;' 

}




// random stories
function randomTask1() {
    document.getElementById("story1").style.cssText = 'display:block;' 
    document.getElementById("story2").style.cssText = 'display:none;' 
    document.getElementById("story3").style.cssText = 'display:none;' 
    document.getElementById("story4").style.cssText = 'display:none;' 
}
function randomTask2() {
    document.getElementById("story1").style.cssText = 'display:none;' 
    document.getElementById("story2").style.cssText = 'display:block;' 
    document.getElementById("story3").style.cssText = 'display:none;' 
    document.getElementById("story4").style.cssText = 'display:none;' 
}
function randomTask3() {
    document.getElementById("story1").style.cssText = 'display:none;'
    document.getElementById("story2").style.cssText = 'display:none;'
    document.getElementById("story3").style.cssText = 'display:block;'
    document.getElementById("story4").style.cssText = 'display:none;'
}
function randomTask4(){
 
  document.getElementById("story1").style.cssText = 'display:none;' 
  document.getElementById("story2").style.cssText = 'display:none;' 
  document.getElementById("story3").style.cssText = 'display:none;' 
  document.getElementById("story4").style.cssText = 'display:block;' 

    // var stories = ['-apocalyptic imaginary city of Sarrant', 'inary city '];
    
    // document.getElementById("arBtn").onclick = randomTask;
    // randomParagraph = Math.floor(Math.random()*stories.length); 
    // document.getElementById('result').innerHTML = randomTask(randomParagraph);
}