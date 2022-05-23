import $ from 'jquery';
import './four.css';

$('#four').on('mouseenter', 'div', e => {
    $(e.target).addClass('active');
}).on('mouseleave', 'div', e => {
    $(e.target).removeClass('active');
})
