
    var width = 300;
    var count = 1; 

    var div = document.getElementById('counter');
    var carousel = document.getElementById('carousel');
    
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');

    var position = 0;

    var counter=1;

    carousel.querySelector('.prev').onclick = function() {
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
      if(counter!==1){counter--;}
      div.childNodes[0].textContent = counter+"/"+3;
    };

    carousel.querySelector('.next').onclick = function() {
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
      if(counter!==3){counter++;}
      div.childNodes[0].textContent = counter+"/"+3
    };


    var carousel1 = document.getElementById('carousel1');
    var div1 = document.getElementById('counter1');

    var list1 = carousel1.querySelector('ul');
    var listElems1 = carousel1.querySelectorAll('li');

    var counter1=1;


    carousel1.querySelector('.prev1').onclick = function() {
      position = Math.min(position + width * count, 0)
      list1.style.marginLeft = position + 'px';
      if(counter1!==1){counter1--;}
      div1.childNodes[0].textContent = counter1+"/"+3;
    };

    carousel1.querySelector('.next1').onclick = function() {
      position = Math.max(position - width * count, -width * (listElems1.length - count));
      list1.style.marginLeft = position + 'px';
      if(counter1!==3){counter1++;}
      div1.childNodes[0].textContent = counter1+"/"+3
    };


    var carousel2 = document.getElementById('carousel2');
    var div2 = document.getElementById('counter2');

    var list2 = carousel2.querySelector('ul');
    var listElems2 = carousel2.querySelectorAll('li');

    var counter2=1;


    carousel2.querySelector('.prev2').onclick = function() {
      position = Math.min(position + width * count, 0)
      list2.style.marginLeft = position + 'px';
      if(counter2!==1){counter2--;}
      div2.childNodes[0].textContent = counter2+"/"+3;
    };

    carousel2.querySelector('.next2').onclick = function() {
      position = Math.max(position - width * count, -width * (listElems2.length - count));
      list2.style.marginLeft = position + 'px';
      if(counter2!==3){counter2++;}
      div2.childNodes[0].textContent = counter2+"/"+3
    };