let $mas = document.querySelectorAll('.mas');

$mas.addEventListener('click', () => { 
    if($mas.textContent == '+'){
        $mas.textContent = '-';
    } else  {
        $mas.textContent = '+';
    }    
});
