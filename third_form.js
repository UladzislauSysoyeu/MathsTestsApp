function mulOne(){
    var description = 'Тест по теме "Умножение на 1"';
    var firstNum = 1;
    var secondNum = getRandomInt(1,10);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulOne+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulTwo(){
    var description = 'Тест по теме "Умножение на 2"';
    var firstNum = 2;
    var secondNum = getRandomInt(1,10);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulTwo+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulThree(){
    var description = 'Тест по теме "Умножение на 3"';
    var firstNum = 3;
    var secondNum = getRandomInt(1,10);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulThree+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulFour(){
    var description = 'Тест по теме "Умножение на 4"';
    var firstNum = 4;
    var secondNum = getRandomInt(1,10);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulFour+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulFive(){
    var description = 'Тест по теме "Умножение на 5"';
    var firstNum = 5;
    var secondNum = getRandomInt(1,10);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulFive+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulSix(){
    var description = 'Тест по теме "Умножение на 6"';
    var firstNum = 6;
    var secondNum = getRandomInt(1,10);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulSix+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulSeven(){
    var description = 'Тест по теме "Умножение на 7"';
    var firstNum = 7;
    var secondNum = getRandomInt(1,10);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulSeven+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulEight(){
    var description = 'Тест по теме "Умножение на 8"';
    var firstNum = 8;
    var secondNum = getRandomInt(1,10);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulEight+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulNine(){
    var description = 'Тест по теме "Умножение на 9"';
    var firstNum = 9;
    var secondNum = getRandomInt(1,10);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulNine+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulTen(){
    var description = 'Тест по теме "Умножение на 10"';
    var firstNum = 10;
    var secondNum = getRandomInt(1,10);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulTen+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulDoubleDigit(){
    var description = 'Тест по теме "Умножение двухзначных на однозначное число"';
    var firstNum = getRandomInt(1,9);
    var secondNum = getRandomInt(10,100);
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulDoubleDigit+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulRound(){
    var description = 'Тест по теме "Умножение круглых чисел"';
    var firstNum = getRandomInt(1,9);
    var secondNum = getRandomInt(10,1000);
    
    while(secondNum%10 !== 0 || firstNum*secondNum > 999){
        secondNum = getRandomInt(10,1000);
    }
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulRound+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}

function mulTripleDigit(){
    var description = 'Тест по теме "Умножение трехзначных на однозначное"';
    var firstNum = getRandomInt(1,9);
    var secondNum = getRandomInt(10,1000);
    
    while(firstNum*secondNum > 999){
        secondNum = getRandomInt(10,1000);
    }
    
    var example = secondNum+'x'+firstNum;
    var achieve = secondNum*firstNum;
                
    var answerfield = document.createElement("input");
    answerfield.setAttribute('type', 'text');
    answerfield.setAttribute('id', 'answerfield');
                   
    var answerbutton = document.createElement("input");
    answerbutton.setAttribute('type', 'button');
    answerbutton.setAttribute('value', 'Ответ');
    answerbutton.setAttribute('id', 'answerbutton');
    answerbutton.setAttribute('onclick', 'answerfunc('+achieve+','+mulTripleDigit+')');
               
    $('#workplace').html('<p id="headtitle">'+description+'</p>');
    $('#workplace').append('<p id="headnumber">'+example+'</p>');
    $('#workplace').append(answerfield);
    $('#workplace').append(answerbutton);
    $('#workplace').append('<p id="answertext"> Правильных ответов ' + answertrue+'</p>');
    $('#workplace').append('<p id="answertext"> Неправильных ответов ' + answerfalse+'</p>');
    
    document.getElementById('answerfield').focus();
}