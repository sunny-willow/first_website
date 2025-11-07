document.write('Учимся считать в консоли');
console.log(2 + 2); // в консоли 4
console.log(2 * 2); // 4
console.log(2 - 2); // 0
console.log(2 / 2); // 1
console.log(2 ** 3)  // возведение в степень даст 8
console.log((2 + 2) / 2);
alert("Привет, я уведомление от сайта")

let time; //объявили переменную, она считает оставшееся время поездки
time = 34;
console.log('Старт поездки. Осталось минут: ' + time); //конкатенация - сложение строк, строка с числом тоже вернёт строку
time = time-15;
console.log('Немного сториз в соцсетях. Осталось минут: ' + time);
time = time-10;
console.log('Немного не новостей, но событий. Осталось минут: ' + time);
time = 0;
console.log('Вы приехали. Добро пожаловать в Таллин');

let phrases = [
    {text: 'отправить другу красивую гифку', image: 'waterfall.gif'},
    {text: 'посмотреть скидки на авиабилеты', image: 'airplane.png'},
    {text: 'расставить книги на полке по цвету', image: 'books.png'},
    {text: 'читать про зарплаты в Сан-Франциско', image: 'salary.png'},
    {text: 'прочитать новости и ужаснуться в комментариях', image: 'newspaper.png'},
    {text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'notes.png'},
    {text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'tv.png'},
    {text: 'проверить непрочитанное в мессенджерах', image: 'telegram.png'},
    ];
console.log(phrases[0].text);
let randIndex = Math.random() * 8; //вернет случайное число между 0 и 1, включая 0 и не включая 1
console.log(randIndex);
let randIndexInt = Math.floor(randIndex); //отбрасывает дробную часть
console.log(randIndexInt);
console.log(phrases[randIndexInt].text); //вызов элемента массива по случайному индексу

function hello() {
    console.log('Привет, это выполнение простой функции');
}
hello();

function sayHello(name) { //функция с аргументом
  alert('Привет, ' + name);
} 
sayHello('Анна');

function sayHello2(name) { //функция с возвращаемым значением
  return 'Привет, ' + name;
} 
let greeting = sayHello2('Анна');
console.log(greeting);
let age = 24;
console.log(age > 21); //вернет ответ true

let user = { //объект
    name: 'Мария',
    dotaLevel: 21,
    dogName: 'Железногорск'
};
console.log(user.dotaLevel); // 21

function getRandomElement(arr) {
    randIndexInt = Math.floor(Math.random() * arr.length); //теперь длину массива не нужно редактировать вручную
    return arr[randIndexInt];
}
let button = document.querySelector('.button'); //выбираем объект по классу button и называем переменную также
let advice = document.querySelector('.advice');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.image');
button.addEventListener('click', function () { //по клику выполняет функцию
    let randomElement = getRandomElement(phrases); //заменяет текст рандомным из массива
    /*phrase.textContent = randomElement.text; текстовое содержимое тега с классом phrase = ...*/
    smoothly(phrase, 'textContent', randomElement.text); //тоже самое с плавным переходом по библиотеке smoothly
    //(элемент, что изменится, новое содержимое)
    if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
    } else {
    advice.style.fontSize = '42px';
    }
    /*image.src = randomElement.image;*/
    smoothly(image,'src', randomElement.image) //также со smoothly отредактировали замену картинки на плавный переход
})

console.log(image.src); //вызов значения объекта image по ключу src
//можно даже одному объекту присвоить значение переменной или свойства другого объекта

let array = ['животные', 'растения', 'грибы', 'микроорганизмы', 'вирусы'];
for (let i = 0; i <= 4; i = i + 1) { //i в качестве индекса
  console.log(array[i]); //цикл хорошо подходит для перечисления элементов массива
}
for (let i = 0; i <= 2; i = i + 1) { //при загрузке страницы плавно поменяет 3 картинки и фразы
  smoothly(phrase, 'textContent', phrases[i].text)
  smoothly(image, 'src', phrases[i].image)
}
