const labels = document.querySelectorAll('.form-control label');

console.log(labels)


labels.forEach(element => {
    element.innerHTML= element.innerText
    .split('')
    .map((letter,idx)=> `<span style="transition-delay:${idx *70}ms"> ${letter}</span>`)
    .join('');
    
});

console.log("connected")