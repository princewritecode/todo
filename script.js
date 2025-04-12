const btn = document.querySelector('.add-btn');
console.log(btn);
const input = document.querySelector('.item-add-input');
console.log(input)
let inputValue;
input.addEventListener('change', (e) => {
  inputValue = e.target.value;
})
btn.addEventListener('click', e => {
    // console.log('click');
    // console.log(inputValue);

    if (inputValue===undefined || inputValue === '') {
        alert('List cannot be empty')
    }
    else{
        const createNewDiv = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const createTaskPara = document.createElement('span');
        const checkBox = document.createElement('input'); // Create an input element
        checkBox.setAttribute('type', 'checkbox'); // Set its type to 'checkbox'
        deleteBtn.innerText = 'Delete';
        createTaskPara.textContent = inputValue;
        createNewDiv.append(createTaskPara);
        createNewDiv.append(deleteBtn);
        createTaskPara.append(checkBox);
        document.body.append(createNewDiv);
        checkBox.addEventListener('change', function (e) {
            if (checkBox.checked) {
                console.log('Checkbox is checked');
                console.log(e.target.parentNode);
                e.target.parentNode.style.textDecoration = 'line-through';
            } else {
                console.log('Checkbox is unchecked');
                e.target.parentNode.style.textDecoration = 'none';
            }
        });
        deleteBtn.addEventListener('click', e => {
            e.target.parentNode.style.display='none';
            inputValue = '';
        })
    }
})
