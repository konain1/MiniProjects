const panels = document.querySelectorAll('.panel');

panels.forEach((e)=>{

    e.addEventListener('click',()=>{

        activeRemover();
        e.classList.add('active');
        console.log('clicked');
    })
    

    function activeRemover(){
        panels.forEach((e)=>{
            e.classList.remove('active');
        })
    }
})