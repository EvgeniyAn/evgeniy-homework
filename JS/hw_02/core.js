function Summ () {
    var num1 = document.getElementById('numb1').value;
    var num2 = document.getElementById('numb2').value;
    var result = document.getElementsByClassName('result')[0];

    var numTemp = parseInt(num1) + parseInt(num2);
    result.innerHTML = 'Результат: <b style="color: brown; margin-left: 5px">' + numTemp + '</b>';
};

function Login() {
    var login = prompt('Кто пришел? (введите \"Отмена\" для отмены)'),
    password = null;
    if(login === 'Отмена'){
        alert('Вход отменен!');
    } else if(login === 'Админ'){
        password = prompt('Пароль?');

        if(password === 'Отмена'){
            alert('Вход отменен!');
        } else if(password === 'Черный Властелин'){
            alert('Добро пожаловать!');
        } else {
            alert('Пароль не верен!');
        }
    } else {
        alert('Я вас не знаю!');
    }
};