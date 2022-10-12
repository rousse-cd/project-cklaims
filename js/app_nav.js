addEventListener('DOMContentLoaded', () => {
    const check_btn = document.querySelector ('.checkbtn')
    if(check_btn){
        check_btn.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

}
)