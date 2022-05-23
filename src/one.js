import $ from 'jquery'
import './one.css';

const $value = $('#one>div>span');
const operate = {
    "init": () => $value.text(localStorage.getItem('value') === null ? '100' : localStorage.getItem('value')),
    "+": () => $value.text(Number($value.text()) + 1),
    "-": () => $value.text(Number($value.text()) - 1),
    "×": () => $value.text(Number($value.text()) * 2),
    "÷": () => $value.text(Number($value.text()) / 2)
}
operate.init();
$('#one>button').on('click', (e) => {
    operate[e.target.innerText]();
    localStorage.setItem('value', $value.text());
})