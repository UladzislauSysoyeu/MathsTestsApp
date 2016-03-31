var answrs = new Array();
function digitNumber(){
                   var description = 'Тест по теме "Состав однозначного числа"';
                   var dNumber = getRandomInt(0,9);
                    var achieve = [];
                    var flds = [];
    
                    for(var i = 0; i<=dNumber; i++){
                        achieve[i]=i;
                    }
                        for(var j = 0; j<=dNumber;j++){
                            answrs[j]=achieve[j]+' и '+achieve[dNumber-j];
                        }
    
                    for(var k=0;k<(dNumber+1)*2;k++){
                        var answerfield = document.createElement("input");
                        answerfield.setAttribute('type', 'text');
                        answerfield.setAttribute('class', 'numfield');
                        answerfield.setAttribute('id', 'fld'+k);
                        flds[k] = answerfield;
                    }
                    
                   var answerbutton = document.createElement("input");
                   answerbutton.setAttribute('type', 'button');
                   answerbutton.setAttribute('value', 'Ответ');
                   answerbutton.setAttribute('id', 'answerbutton1');
                   answerbutton.setAttribute('onclick', 'squadofNumber('+k+','+digitNumber+')');
                   
                   $('#workplace').html('<p id="headtitle">'+description+'</p>');
                   $('#workplace').append('<p id="headnumber1">'+dNumber+'</p>');
                   $('#workplace').append('<p id="headtitle1"> У тебя '+(dNumber+1)+' вариантов</p>');
                   $('#workplace').append(flds);
                   $('#workplace').append(answerbutton);
                   $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
                   $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
                    
                   document.getElementById('fld0').focus();
            }

 function squadofNumber(count, func){
     
     if(counter == true){
               name_of_function = func.toString().match(/function ([^(]*)\(/)[1];
               counter = false;    
               }
               if (name_of_function != func.toString().match(/function ([^(]*)\(/)[1]){
                   answertrue = 0;
                   answerfalse = 0;
                   counter = true;
               }
               name_of_function = func.toString().match(/function ([^(]*)\(/)[1];
     
                var rightcount=0;
                var reshenie=[];
                for(var i=0; i<count;i++){
                    var answer = $('#fld'+i).val();
                    var answer2 = $('#fld'+(i+1)).val();
                    reshenie[reshenie.length] = answer+' и '+answer2;
                    i+=1;
                }
                for(var k=0; k<answrs.length;k++){
                    for(var l=0;l<reshenie.length;l++){
                        if(answrs[k]===reshenie[l]){
                            rightcount+=1;
                            delete answrs[k];
                        }
                    }    
                }
        
                if(rightcount===reshenie.length){
                        answertrue+=1;
                    }else{
                        answerfalse+=1;
                    }
               func();
                if((answertrue+answerfalse)>9){
                       $('#finishdialog').html('<p>Спасибо, теперь можешь отдохнуть :)</p><br>');
                       $('#finishdialog').append('<p>Позови учителя к себе.</p><br>');
                       $('#finishdialog').append('<p>Правильных ответов: '+answertrue+'</p><br>');
                       $('#finishdialog').append('<p>Неправильных ответов: '+answerfalse+'</p>');
                        answertrue = 0;
                        answerfalse = 0;
                       $('#finishdialog').dialog({
                           modal: true,
                           height: 420,
                           width: 560
                       }).prev(".ui-dialog-titlebar").css({"background":"transparent"});
                   }
            }

            function dbldigitNumber(){
                   var description = 'Тест по теме "Состав двухзначного числа"';
                   var dNumber = getRandomInt(10,20);
                    var achieve = [];
                    var flds = [];
    
                    for(var i = 0; i<=dNumber; i++){
                        achieve[i]=i;
                    }
                        for(var j = 0; j<=dNumber;j++){
                            answrs[j]=achieve[j]+' и '+achieve[dNumber-j];
                        }
    
                    for(var k=0;k<(dNumber+1)*2;k++){
                        var answerfield = document.createElement("input");
                        answerfield.setAttribute('type', 'text');
                        answerfield.setAttribute('class', 'numfield');
                        answerfield.setAttribute('id', 'fld'+k);
                        flds[k] = answerfield;
                    }
                    
                   var answerbutton = document.createElement("input");
                   answerbutton.setAttribute('type', 'button');
                   answerbutton.setAttribute('value', 'Ответ');
                   answerbutton.setAttribute('id', 'answerbutton1');
                   answerbutton.setAttribute('onclick', 'squadofNumber('+k+','+dbldigitNumber+')');
                   
                   $('#workplace').html('<p id="headtitle">'+description+'</p>');
                   $('#workplace').append('<p id="headnumber1">'+dNumber+'</p>');
                   $('#workplace').append('<p id="headtitle1"> У тебя '+(dNumber+1)+' вариантов</p>');
                   $('#workplace').append(flds);
                   $('#workplace').append(answerbutton);
                   $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
                   $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
                    
                   document.getElementById('fld0').focus();
           }
           
           function plusminusTen(){
               var description = 'Тест по теме "Сложение и вычитание в пределах 10"';
               var firstNum = getRandomInt(0,10);
               var secondNum = getRandomInt(0,10);
               
               if(operations==true){
                    while ((firstNum+secondNum)>10){
                        firstNum = getRandomInt(0,10);
                        secondNum = getRandomInt(0,10);
                    }
                    var example = firstNum+'+'+secondNum;
                    var achieve = firstNum+secondNum;
                    operations=false;
                } else{
                    while(firstNum < secondNum){
                        firstNum = getRandomInt(0,10);
                        secondNum = getRandomInt(0,10);
                    }
                    var example = firstNum+'-'+secondNum;
                    var achieve = firstNum-secondNum;
                    operations=true;
                }
               
               var answerfield = document.createElement("input");
               answerfield.setAttribute('type', 'text');
               answerfield.setAttribute('id', 'answerfield');
                   
               var answerbutton = document.createElement("input");
               answerbutton.setAttribute('type', 'button');
               answerbutton.setAttribute('value', 'Ответ');
               answerbutton.setAttribute('id', 'answerbutton');
               answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+plusminusTen+')');
                              
               $('#workplace').html('<p id="headtitle">'+description+'</p>');
               $('#workplace').append('<p id="headnumber">'+example+'</p>');
               $('#workplace').append(answerfield);
               $('#workplace').append(answerbutton);
               $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
               $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
               document.getElementById('answerfield').focus();

           }
           
           function plusminusTwenty(){
               var description = 'Тест по теме "Сложение и вычитание в пределах 20"';
               var firstNum = getRandomInt(0,20);
               var secondNum = getRandomInt(0,20);
               
                if(operations==true){
                    while ((firstNum+secondNum)>20){
                        firstNum = getRandomInt(0,20);
                        secondNum = getRandomInt(0,20);
                    }
                    var example = firstNum+'+'+secondNum;
                    var achieve = firstNum+secondNum;
                    operations=false;
                } else{
                    while(firstNum < secondNum){
                        firstNum = getRandomInt(0,20);
                        secondNum = getRandomInt(0,20);
                    }
                    var example = firstNum+'-'+secondNum;
                    var achieve = firstNum-secondNum;
                    operations=true;
                }
               
               var answerfield = document.createElement("input");
               answerfield.setAttribute('type', 'text');
               answerfield.setAttribute('id', 'answerfield');
                   
               var answerbutton = document.createElement("input");
               answerbutton.setAttribute('type', 'button');
               answerbutton.setAttribute('value', 'Ответ');
               answerbutton.setAttribute('id', 'answerbutton');
               answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+plusminusTwenty+')');
               
               $('#workplace').html('<p id="headtitle">'+description+'</p>');
               $('#workplace').append('<p id="headnumber">'+example+'</p>');
               $('#workplace').append(answerfield);
               $('#workplace').append(answerbutton);
               $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
               $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
               
               document.getElementById('answerfield').focus();
           }