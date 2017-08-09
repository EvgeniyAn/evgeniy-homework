;(function(){

    function PressKeyDown(event) {
        var div = document.querySelector('.wrapper div.main'),
            textarea = document.querySelector('.wrapper textarea.main');

        if(event.key === 'e' && event.ctrlKey){
            event.preventDefault();

            textarea.value = div.innerText;
            textarea.style.display = 'block';
            div.style.display = 'none';
            textarea.focus();

        } else if(event.key === 's' && event.ctrlKey){
            event.preventDefault();

            div.innerHTML = textarea.value;
            div.style.display = 'block';
            textarea.style.display = 'none';

        } else if(event.key === 'Escape'){
            event.preventDefault();

            textarea.value = div.innerText;
            div.style.display = 'block';
            textarea.style.display = 'none';
        }
    }

    window.addEventListener('keydown', PressKeyDown);
})();
