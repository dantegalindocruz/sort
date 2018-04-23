window.addEventListener("load", function(){
var item = document.querySelectorAll('.item');
var block = document.querySelectorAll('.accordian');
var text = document.querySelectorAll('.postContent');

for(let i = 0; i < item.length; i++){
  item[i].addEventListener('click', function(event){
	event.preventDefault();
    for(let j = 0; j < block.length; j++){
    if(item[i].parentNode !== block[j].parentNode || block[j].innerHTML === text[i].innerHTML){
    block[j].style.height="0";
    block[j].innerHTML = '';

  } else{
    block[j].style.transition = 'height .3s ease-in 0s';
    block[j].style.height='400px';
    block[j].innerHTML = text[i].innerHTML;
  }
}
  });
}
});

