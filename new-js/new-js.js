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
    'отправить другу смешную гифку',
    'посмотреть скидки на авиабилеты',
    'расставить книги на полке по цвету',
    'читать про зарплаты в Сан-Франциско'];
console.log(phrases[0]);
let randIndex = Math.random() * 4; //вернет случайное число между 0 и 1, включая 0 и не включая 1
console.log(randIndex);
let randIndexInt = Math.floor(randIndex); //отбрасывает дробную часть
console.log(randIndexInt);
console.log(phrases[randIndexInt]); //вызов элемента массива по случайному индексу

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

function getRandomElement(arr) {
    randIndexInt = Math.floor(Math.random() * arr.length); //теперь длину массива не нужно редактировать вручную
    return arr[randIndexInt];
}
let button = document.querySelector('.button');
let advice = document.querySelector('.advice');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.image');

button.addEventListener('click', function () { //по клику выполняет функцию
    phrase.textContent = getRandomElement(phrases); //заменяет текст рандомным из массива
})
