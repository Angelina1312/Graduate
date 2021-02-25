var form = document.getElementsByTagName('form')[0];
var button = document.getElementsByClassName('btn');
var name = document.getElementById('name1');
var phone = document.getElementById('phone1');
var email = document.getElementById('exampleInputEmail1');
var name2 = document.getElementById('name2');
var fields = document.getElementsByClassName('field');

var generateError = function (text) {
  var error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
}

var removeValidation = function () {
  var errors = form.querySelectorAll('.error');

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
}

var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i]);
      var error = generateError('Cannot be blank');
      form[i].parentElement.insertBefore(error, fields[i]);
    }
  }
}

var checkNameMatch = function () {
  if (name.value !== 'dddddddd') {
    console.log('not equals');
    var error = generateError('Не верное имя');
    name.parentElement.insertBefore(error, name);
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  removeValidation();

  checkFieldsPresence();

  checkNameMatch();
}); 


/*
//получаем форму и электронную почту
//поле ввода, а также элемент span, в который мы поместим сообщение об ошибке.
var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('exampleInputEmail1');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
 // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
  // является ли корректным поле электронной почты.
  if (email.validity.valid) {
    // В случае появления сообщения об ошибке, если поле
    // является корректным, мы удаляем сообщение об ошибке.
    error.innerHTML = ""; // Сбросить содержимое сообщения
    error.className = "error"; // Сбросить визуальное состояние сообщения
  }
}, false);
form.addEventListener("submit", function (event) {
  // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
   // валидность поля электронной почты.
  if (!email.validity.valid) {

    // Если поле невалидно, отображается пользовательское
    // сообщение об ошибке.
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    // И мы предотвращаем отправку формы путем отмены события
    event.preventDefault();
  }
}, false); */