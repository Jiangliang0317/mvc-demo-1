import "./two.css";
import $ from 'jquery';

const select = {
    init: () => {
        const $tabBar = $('#two>ul').children().eq(0).children();
        const $contents = $('#two>ul').children().eq(1).children();
        const index = localStorage.getItem('tabBarIndex')
        index === null ? $tabBar.eq(0).addClass('select') && $contents.eq(0).addClass('show') : $tabBar.eq(index).addClass('select') && $contents.eq(index).addClass('show')
    },
    change: (e) => {
        $(e.target).addClass('select').siblings().removeClass('select');
        const index = $(e.target).index();
        $(e.target).parent().next().children().removeClass('show');
        $(e.target).parent().next().children().eq(index).addClass('show');
        localStorage.setItem('tabBarIndex', index);
    }
}
select.init();
$('#two').on('click', 'li>div', e => select.change(e));
