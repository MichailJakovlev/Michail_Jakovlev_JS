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

function randomStyle(wrapper) {

     var style = [
        'style_1',
        'style_2',
        'style_3',
        'style_4',
        'style_5',
        'style_6'

     ]; 

     var x = (Math.random() * style.length) | 0;
     document.querySelector(wrapper).className = style[x];
     
}
