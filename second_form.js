            function plusminusRound(){
                var description = 'Тест по теме "Сложение и вычитание круглых двухзначных чисел"';
                var firstNum = getRandomInt(10,100);
                var secondNum = getRandomInt(10,100);
                
                if(operations==true){
                    while (firstNum %10!==0 || secondNum % 10 !==0 || firstNum+secondNum>100){
                        firstNum = getRandomInt(10,100);
                        secondNum = getRandomInt(10,100);
                    }
                    var example = firstNum+'+'+secondNum;
                    var achieve = firstNum+secondNum;
                    operations=false;
                } else{
                    while (firstNum %10!==0 || secondNum % 10 !==0 || firstNum < secondNum){
                        firstNum = getRandomInt(10,100);
                        secondNum = getRandomInt(10,100);
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
               answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+plusminusRound+')');
               
               $('#workplace').html('<p id="headtitle">'+description+'</p>');
               $('#workplace').append('<p id="headnumber">'+example+'</p>');
               $('#workplace').append(answerfield);
               $('#workplace').append(answerbutton);
               $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
               $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
                
                document.getElementById('answerfield').focus();
            }

            function plusminusDigit(){
                var description = 'Тест по теме "Действия с двухзначными и однозначными числами без перехода через разряд"';
                var firstNum = getRandomInt(10,100);
                var secondNum = getRandomInt(0,9);
               
                while((firstNum%10 - secondNum)<0){
                    secondNum = getRandomInt(0,10);
                }
                
                if(firstNum<secondNum){
                    tmpvar = firstNum;
                    firstNum = secondNum;
                    secondNum = tmpvar;
                }
                
                if(operations==true){
                    while (firstNum%10 + secondNum >=10 || firstNum%10 - secondNum <0 || firstNum+secondNum >100){
                        firstNum = getRandomInt(10,100);
                        secondNum = getRandomInt(0,10);
                    }
                    var example = firstNum+'+'+secondNum;
                    var achieve = firstNum+secondNum;
                    operations=false;
                } else{
                    while (firstNum%10 + secondNum >=10 || firstNum%10 - secondNum <0 || firstNum < secondNum){
                        firstNum = getRandomInt(10,100);
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
               answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+plusminusDigit+')');
               
               $('#workplace').html('<p id="headtitle">'+description+'</p>');
               $('#workplace').append('<p id="headnumber">'+example+'</p>');
               $('#workplace').append(answerfield);
               $('#workplace').append(answerbutton);
               $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
               $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
                
                document.getElementById('answerfield').focus();
            }

            function sumRound(){
                var description = 'Тест по теме "Сложение и вычитание в случаях, когда сумма и уменьшаемое - круглые числа"';
                var firstNum = getRandomInt(0,100);
                var secondNum = getRandomInt(0,100);
                
                if(operations==true){
                    
                while ((firstNum + secondNum)%10 !==0 || firstNum+secondNum  >100){
                   firstNum = getRandomInt(0,100);
                   secondNum = getRandomInt(0,100);
               }
                    var example = firstNum+'+'+secondNum;
                    var achieve = firstNum+secondNum;
                    operations=false;
                } else{
                    while (firstNum%10 !== 0 || firstNum < secondNum){
                        firstNum = getRandomInt(10,100);
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
               answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+sumRound+')');
               
               $('#workplace').html('<p id="headtitle">'+description+'</p>');
               $('#workplace').append('<p id="headnumber">'+example+'</p>');
               $('#workplace').append(answerfield);
               $('#workplace').append(answerbutton);
               $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
               $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
                
                document.getElementById('answerfield').focus();
            }

            function plusminusDblDigit(){
                var description = 'Тест по теме "Действия с двухзначными и однозначными числами с переходом через разряд"';
                var firstNum = getRandomInt(10,100);
                var secondNum = getRandomInt(0,9);
                
                if(operations==true){
                    while((firstNum%10 + secondNum)<=10 || firstNum+secondNum >100){
                        firstNum = getRandomInt(10,100);
                        secondNum = getRandomInt(0,9);
                    }
                    var example = firstNum+'+'+secondNum;
                    var achieve = firstNum+secondNum;
                    operations=false;
                } else{
                    while (firstNum%10 >= secondNum){
                        firstNum = getRandomInt(10,100);
                        secondNum = getRandomInt(0,9);
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
               answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+plusminusDblDigit+')');
               
               $('#workplace').html('<p id="headtitle">'+description+'</p>');
               $('#workplace').append('<p id="headnumber">'+example+'</p>');
               $('#workplace').append(answerfield);
               $('#workplace').append(answerbutton);
               $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
               $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
                
                document.getElementById('answerfield').focus();
            }

            function plusminusTwentyDigit(){
               var description = 'Тест по теме "Действия с двухзначными числами без перехода через разряд"';
               var firstNum = getRandomInt(10,100);
               var secondNum = getRandomInt(10,100);

              if(operations==true){
                    while(firstNum + secondNum >100 || firstNum%10 + secondNum%10 >=10){
                        firstNum = getRandomInt(10,100);
                        secondNum = getRandomInt(10,100);
                    }
                    var example = firstNum+'+'+secondNum;
                    var achieve = firstNum+secondNum;
                    operations=false;
                } else{
                    
                    while(firstNum < secondNum || firstNum%10 < secondNum%10){
                        firstNum = getRandomInt(10,100);
                        secondNum = getRandomInt(10,100);
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
               answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+plusminusTwentyDigit+')');
               
               $('#workplace').html('<p id="headtitle">'+description+'</p>');
               $('#workplace').append('<p id="headnumber">'+example+'</p>');
               $('#workplace').append(answerfield);
               $('#workplace').append(answerbutton);
               $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
               $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
                
                document.getElementById('answerfield').focus();
           }

            function plusDouble(){
                var description = 'Тест по теме "Сложение двухзначных чисел с переходом через разряд"';
                var firstNum = getRandomInt(10,100);
                var secondNum = getRandomInt(10,100);
               
               while (firstNum+secondNum > 100 || firstNum%10+secondNum%10 < 10){
                   firstNum = getRandomInt(10,100);
                   secondNum = getRandomInt(10,100);
               }
                
                var example = firstNum+'+'+secondNum;
                var achieve = firstNum+secondNum;
    
               var answerfield = document.createElement("input");
               answerfield.setAttribute('type', 'text');
               answerfield.setAttribute('id', 'answerfield');
                   
               var answerbutton = document.createElement("input");
               answerbutton.setAttribute('type', 'button');
               answerbutton.setAttribute('value', 'Ответ');
               answerbutton.setAttribute('id', 'answerbutton');
               answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+plusDouble+')');
               
               $('#workplace').html('<p id="headtitle">'+description+'</p>');
               $('#workplace').append('<p id="headnumber">'+example+'</p>');
               $('#workplace').append(answerfield);
               $('#workplace').append(answerbutton);
               $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
               $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
                
                document.getElementById('answerfield').focus();
            }

            function minusDouble(){
                var description = 'Тест по теме "Вычитание двухзначных чисел с переходом через разряд"';
                var firstNum = getRandomInt(10,100);
                var secondNum = getRandomInt(10,100);
               
               while (firstNum < secondNum || firstNum%10 >= secondNum%10){
                   firstNum = getRandomInt(10,100);
                   secondNum = getRandomInt(10,100);
               }
                
                var example = firstNum+'-'+secondNum;
                var achieve = firstNum-secondNum;
    
               var answerfield = document.createElement("input");
               answerfield.setAttribute('type', 'text');
               answerfield.setAttribute('id', 'answerfield');
                   
               var answerbutton = document.createElement("input");
               answerbutton.setAttribute('type', 'button');
               answerbutton.setAttribute('value', 'Ответ');
               answerbutton.setAttribute('id', 'answerbutton');
               answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+minusDouble+')');
               
               $('#workplace').html('<p id="headtitle">'+description+'</p>');
               $('#workplace').append('<p id="headnumber">'+example+'</p>');
               $('#workplace').append(answerfield);
               $('#workplace').append(answerbutton);
               $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
               $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
                
                document.getElementById('answerfield').focus();
            }

            function plusminusDouble(){
                var description = 'Тест по теме "Действия с двухзначными числами с переходом через разряд"';
                var firstNum = getRandomInt(10,100);
                var secondNum = getRandomInt(10,100);
                
                if(operations==true){
                    while(firstNum%10 + secondNum%10 <=10 || firstNum+secondNum > 100){
                        firstNum = getRandomInt(10,100);
                        secondNum = getRandomInt(10,100);
                    }
                    var example = firstNum+'+'+secondNum;
                    var achieve = firstNum+secondNum;
                    operations=false;
                } else{
                    while (firstNum%10 >= secondNum%10 || firstNum < secondNum){
                        firstNum = getRandomInt(10,100);
                        secondNum = getRandomInt(10,100);
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
               answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+plusminusDouble+')');
               
               $('#workplace').html('<p id="headtitle">'+description+'</p>');
               $('#workplace').append('<p id="headnumber">'+example+'</p>');
               $('#workplace').append(answerfield);
               $('#workplace').append(answerbutton);
               $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
               $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
                
                document.getElementById('answerfield').focus();
            }