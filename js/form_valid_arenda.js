//получаем форму и электронную почту
//поле ввода, а также элемент span, в котором будет сообщение об ошибке.
var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('exampleInputEmail1');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
 // Каждый раз, когда пользователь вводит что-либо, проверяем,
  // является ли корректным поле электронной почты.
  if (email.validity.valid) {
    // В случае появления сообщения об ошибке, если поле
    // является корректным, удаляем сообщение об ошибке.
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
    // предотвращаем отправку формы путем отмены события
    event.preventDefault();
  }
}, false);





