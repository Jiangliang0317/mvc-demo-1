import $ from 'jquery';
import './three.css';

$('#three').on('click', 'div', e => {
    $(e.target).toggleClass('active');
    console.log($(e.target).hasClass('active'));
})