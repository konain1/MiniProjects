
const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
const title = document.querySelector('h3');


let currentActive = 1;

next.addEventListener('click',()=>{
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    console.log(currentActive);
    update();
})

prev.addEventListener('click',()=>{
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }

    update();
    console.log(currentActive);
})

function update(){
    circles.forEach((c,idx)=>{

        if(idx < currentActive){
            c.classList.add('active');
        }else {
            c.classList.remove('active');
        }

    })
    const actives = document.querySelectorAll('.active');

   
    let bar = progress.style.width = (actives.length -1) / (circles.length-1) * 100 + '%';
    console.log(bar)
    if(currentActive <= 2){
        
        title.style.color = 'yellow';
    }else if(currentActive >= 3){
        title.style.color = 'aqua';
    }else {
        title.style.color = 'grey';
    }

    if(currentActive === 1){
        prev.disabled =  true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }
    else {
        prev.disabled= false;
        next.disabled = false;
    }
}