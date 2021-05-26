// Changing the background color of menu button to transparent onclick

let btns = document.querySelectorAll('.toggle');
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        btn.style.backgroundColor = 'transparent'
    })
})

// Changing the menu button to times button onclick
const changBtn = document.querySelector('.btn');
const nextBtn = document.querySelector('.next-btn');
const showBtn = document.querySelector('.show-btn');

changBtn.addEventListener('click',function(){
  changBtn.style.backgroundColor = 'transparent';
  changBtn.classList.toggle('show-btn');
  nextBtn.style.display = 'block'  
})

nextBtn.addEventListener('click',function(){
    nextBtn.style.backgroundColor = 'transparent';
    nextBtn.classList.toggle('next-btn');
    changBtn.classList.remove('show-btn');
    nextBtn.style.display = 'none'
  })