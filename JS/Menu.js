addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const Menu_items = document.querySelector('.Menu_items')
            Menu_items.classList.toggle('show')
        })
    }
})