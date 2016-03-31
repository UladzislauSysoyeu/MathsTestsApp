function measure_weight(){
   var description = 'Тест по теме "Единицы измерения массы"';
    var ton = getRandomInt(1,10);
    var hundweight = getRandomInt(1,100);
    var kilo = getRandomInt(0,1000);
    
    while(hundweight == 100 && kilo==1000){
        hundweight = getRandomInt(1,100);
        kilo = getRandomInt(0,1000);
    }
    
    var ton_to_kg = ton*1000;
    var all_in_kg = hundweight*100+kilo;
    
    var achieve = retMax(ton_to_kg, all_in_kg);
                      
    var ans1 = document.createElement("input");
    ans1.setAttribute('type', 'button');
    ans1.setAttribute('value', ton+'т');
    ans1.setAttribute('class', 'varbutton');
    ans1.setAttribute('onclick', 'compareButton('+ton_to_kg+','+achieve+','+measure_weight+')');
    
    var ans2 = document.createElement("input");
    ans2.setAttribute('type', 'button');
    ans2.setAttribute('value', hundweight+'ц '+kilo+'кг');
    ans2.setAttribute('class', 'varbutton');
    ans2.setAttribute('onclick', 'compareButton('+all_in_kg+','+achieve+','+measure_weight+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headtitle">Выбери, что больше, и нажми на кнопку!</p>');
    $('#workplace').append(ans1);
    $('#workplace').append(ans2);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
}

function measure_time(){
    var description = 'Тест по теме "Единицы измерения времени"';
    var hour = getRandomInt(1,24);
    var minutes = getRandomInt(1,1440);
    var seconds = getRandomInt(1,60);
    
    while(minutes == 60 && seconds==60){
        minutes = getRandomInt(1,60);
        seconds = getRandomInt(1,60);
    }
    
    var hour_to_seconds = hour*60*60;
    var all_in_seconds = minutes*60+seconds;
    
    var achieve = retMax(hour_to_seconds, all_in_seconds);
                      
    var ans1 = document.createElement("input");
    ans1.setAttribute('type', 'button');
    ans1.setAttribute('value', hour+' ч');
    ans1.setAttribute('class', 'varbutton');
    ans1.setAttribute('onclick', 'compareButton('+hour_to_seconds+','+achieve+','+measure_time+')');
    
    var ans2 = document.createElement("input");
    ans2.setAttribute('type', 'button');
    ans2.setAttribute('value', minutes+' мин '+seconds+' сек');
    ans2.setAttribute('class', 'varbutton');
    ans2.setAttribute('onclick', 'compareButton('+all_in_seconds+','+achieve+','+measure_time+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headtitle">Выбери, что больше, и нажми на кнопку!</p>');
    $('#workplace').append(ans1);
    $('#workplace').append(ans2);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
}

function measure_width(){
    var description = 'Тест по теме "Единицы измерения длины"';
    var km = getRandomInt(1,10);
    var meters = getRandomInt(1,10000);
    var decimeters = getRandomInt(1,10);
    var cmeters = getRandomInt(1,10)
    
    while(meters == 10000 && decimeters == 100000 && cmeters == 1000000){
        meters = getRandomInt(1,10000);
        decimeters = getRandomInt(1,100000);
        cmeters = getRandomInt(1,1000000)
        
    }
    
    var km_to_cm = km*100000;
    var all_in_cm = meters*100+decimeters*10+cmeters;
    
    var achieve = retMax(km_to_cm, all_in_cm);
                      
    var ans1 = document.createElement("input");
    ans1.setAttribute('type', 'button');
    ans1.setAttribute('value', km+' км');
    ans1.setAttribute('class', 'varbutton');
    ans1.setAttribute('onclick', 'compareButton('+km_to_cm+','+achieve+','+measure_width+')');
    
    var ans2 = document.createElement("input");
    ans2.setAttribute('type', 'button');
    ans2.setAttribute('value', meters+' м '+decimeters+' дм '+cmeters+' см');
    ans2.setAttribute('class', 'varbutton');
    ans2.setAttribute('onclick', 'compareButton('+all_in_cm+','+achieve+','+measure_width+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headtitle">Выбери, что больше, и нажми на кнопку!</p>');
    $('#workplace').append(ans1);
    $('#workplace').append(ans2);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
}

function partofnumber(){
    var description = 'Тест по теме "Нахождение числа по его доле"';
    var firstNum = getRandomInt(2,9);
    var secondNum = getRandomInt(2,1000);
    
    while(secondNum%firstNum !==0){
        firstNum = getRandomInt(2,9);
        secondNum = getRandomInt(2,1000);
    }
    
    var example = '1/'+firstNum+' числа '+secondNum;
    var achieve = secondNum/firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+partofnumber+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}