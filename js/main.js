let day = new Date();
let hour = day.getHours();
if (hour>=5 && hour<12) {
  $('h1 .greeting').text('Доброе');
  $('h1.greeting-2').text('утро');
} else if (hour>=0 && hour<5) {
  $('h1 .greeting').text('Доброй');
  $('h1 .greeting-2').text('ночи');
} else if (hour>=12 && hour<18) {
  $('h1 .greeting').text('Добрый');
  $('h1 .greeting-2').text('день');
} else if (hour>=18 && hour<24) {
  $('h1 .greeting').text('Добрый');
  $('h1 .greeting-2').text('вечер');
}