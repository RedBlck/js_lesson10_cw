// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let button = document.getElementById('btn');
button.addEventListener('click', function () {
    console.log(document.form1.input1.value);
    console.log(document.form1.input2.value);
    console.log(document.form2.input1.value);
    console.log(document.form2.input2.value);
});


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let form = document.forms.createTable;
createTable.onsubmit = function (e) {
    e.preventDefault();
    let row = +form.rows.value;
    let columns = +form.colums.value;
    let text = form.text.value;

    let table = document.createElement('table');
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            tr.append(td);
            td.innerText = text;
        }
        table.append(tr);
    }
    document.body.append(table);
};


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let arr = ['shit', 'fuck', 'bullshit', 'bitch']
let btnTask3 = document.getElementById('task3');
btnTask3.addEventListener('click', function () {
    let inputTask3 = document.getElementById('input_task3');
    for (const elementArr of arr) {
        if (elementArr === inputTask3.value) {
            alert('Ви ввели нецензурне слово!')
        }
    }
});


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let arrTask4 = ['shit', 'fuck', 'bullshit', 'bitch']
let inputTask4 = document.getElementById('input_task4');
let btnTask4 = document.getElementById('task4');
btnTask4.addEventListener('click', function () {
    let string = inputTask4.value.split(' ')
    for (const stringElement of string) {
        for (const arrElement of arrTask4) {
            if (stringElement === arrElement) {
                alert('Ви ввели нецензурне слово!');
            }
        }
    }

});