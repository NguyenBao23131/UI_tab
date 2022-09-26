const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const tabActive = $('.tab-item.active');
const line = $('.tabs .line');



tabs.forEach((tab,index,) => {
    tabs[index].addEventListener('click', () => {
        tabs.forEach(tab => tab.classList.remove('active'));
        tabs[index].classList.add('active');
        line.style.left = `${tabs[index].offsetLeft}px`;
        line.style.width = `${tabs[index].offsetWidth}px`;
        panes.forEach(pane => pane.classList.remove('active'));
        panes[index].classList.add('active');
    }
)});