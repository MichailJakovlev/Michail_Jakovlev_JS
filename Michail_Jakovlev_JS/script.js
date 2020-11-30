   // Переменные 
   
     var random_style = document.getElementById('random_style');
     var clear = document.getElementById('clear');
     var display = document.getElementById('display');
     var text = document.getElementById('text');

   // Массивы

     var styles = ['style_1', 'style_2', 'style_3', 'style_4', 'style_5', 'style_6'];
     var texts = ['Hello world', 'Java Script', 'Q-Digital','Michail Jakovlev', 'Random text', 'GitHub'];

   // Функции 

     function generationStyle() {
     
     var x = (Math.random() * styles.length) | 0;
     display.className = styles[x];

     var y = (Math.random() * texts.length) | 0;
     text.innerText = texts[y];
     
     }

     function clearAll () {

     display.classList.remove('style_1', 'style_2', 'style_3', 'style_4', 'style_5', 'style_6');
     text.innerHTML = " ";
       
     }

   // События
    
     random_style.addEventListener('click', generationStyle);
     clear.addEventListener('click', clearAll);

   