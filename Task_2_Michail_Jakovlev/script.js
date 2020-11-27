function randomText(text) {
     
     var target = document.getElementById('text');
     var texts = [
         'Hello world',
         'Web',
         'Q-Digital',
         'Cлучайный текст',
         'Java Script',
         'Яковлев Михаил',
         'Вроде работает как надо',
         'Второй случайный текст'
     ];
 
     var x = (Math.random() * texts.length) | 0;
     target.innerText = texts[x];
}

function randomColor(wrapper) {

     var target = document.querySelector(wrapper);
     var background = [
        '#FFC900',
        '#FF7373',
        '#6C48D7',
        '#886ED7',
        '#4A036F',
        '#A60000'

     ]; 

     var color = [
        '#00CC00',
        '#FF7400',
        '#200772',
        '#006A55',
        '#A68900',
        '#48036F'
     ];

     var x = (Math.random() * background.length) | 0;
     target.style.background = background[x];
     var y = (Math.random() * color.length) | 0;
     target.style.color = color[y];
}
