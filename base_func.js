    var answertrue = 0;
    var answerfalse = 0;
    var operations = true;
    var tmpvar = 0;
    var counter = true;
    var name_of_function = "";
           
           function getRandomInt(min, max) {
               return Math.floor(Math.random() * (max - min + 1)) + min;
           }
               
           function answerfunc(achieve, func){
               var answer = $('#answerfield').val();
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
               
                   if (achieve!=answer){
                   answerfalse+=1;
                    }else{
                    answertrue+=1;
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

            function authors(){
                $('#authors').dialog({
                           modal: true,
                           height: 420,
                           width: 560
                       }).prev(".ui-dialog-titlebar").css({"background":"transparent"});
            }

            function retMax(frst,scnd){
                if(frst>scnd){
                    return frst;
                }
                if(scnd>frst){
                    return scnd;
                }
            }

            function compareButton(num, achieve, func){
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
                
                if(num == achieve){
                    answertrue += 1;
                } else{
                    answerfalse += 1;
                }
                func();
                if((answertrue+answerfalse)>9){
                       $('#finishdialog').html('<p>Спасибо, теперь можешь отдохнуть :)</p>');
                       $('#finishdialog').append('<p>Позови учителя к себе.</p>');
                       $('#finishdialog').append('<p>Правильных ответов: '+answertrue+'</p>');
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