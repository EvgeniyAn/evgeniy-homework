;(function () {
    function CompletedToDo(event) {
        var input = event.target;
        input.setAttribute('disabled', '');
        var li = input.parentNode.parentNode;
        var listCompleted = document.querySelector('.listToDoCompleted');
        listCompleted.appendChild(li.cloneNode(true));
        var ul = li.parentNode;
        ul.removeChild(li);
    };

    var divListToDo = document.querySelector('.list');
    divListToDo.addEventListener('change', CompletedToDo);
    divListToDo.addEventListener('click', EditOrDelete);

    function EditOrDelete(event) {
        var el = event.target;

        if(el.dataset.event === 'Изменить'){
            var newText = prompt('Введите новый текст','новый текст');
            var li = el.parentNode;
            for (var i = 0; i< li.children.length; i++){
                // console.log(li.children[i]);
                var el = li.children[i];
                if(el.localName === 'label'){
                    var oldText = el.lastChild;
                    oldText.nodeValue = newText;
                }
            }
        } else if(el.dataset.event === 'Удалить'){
            var delTrue = confirm('Вы точно хотите удалить задание?');
            if(delTrue){
                var li = el.parentNode;
                var ul = li.parentNode;
                ul.removeChild(li);
            }
        }
    }
})();

function AddToDoItem() {
    var text = prompt('Введите задачу', 'пойти за покупками');

    var listToDo = document.querySelector('.listToDo');
    var count = listToDo.childElementCount;
    var newElem = CreateNewNode(text + ' ' + (++count));
    listToDo.appendChild(newElem);
};

function CreateNewNode(text) {
    var newLi = document.createElement('li');
    var newLabel = document.createElement('label');
    var newBtnEdit = document.createElement('button');
    var newBtnDelete = document.createElement('button');
    var newInput = document.createElement('input');

    newBtnEdit.innerText = 'Изменить';
    newBtnDelete.innerText = 'Удалить';
    newBtnEdit.setAttribute('data-event','Изменить');
    newBtnDelete.setAttribute('data-event','Удалить');
    newInput.setAttribute('type', 'checkbox');

    newLabel.appendChild(newInput);
    newLabel.innerHTML = newLabel.innerHTML + text;

    newLi.appendChild(newLabel);
    newLi.appendChild(newBtnEdit);
    newLi.appendChild(newBtnDelete);

    return newLi;
};
