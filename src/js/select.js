

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select-type__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    selectHeader.forEach(item => {
        item.addEventListener('keydown', selectToggleOnEnter);
    });

    selectItem.forEach(item => {
        item.addEventListener('keydown', selectChooseOnEnter);
    });

    function selectToggleOnEnter(e) {
        if (e.key === 'Enter') {
            this.parentElement.classList.toggle('is-active');
        }
        return;
    }

    function selectChooseOnEnter(e) {
        if (e.key === 'Enter') {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select-type__current');
            currentText.innerText = text;
            select.classList.remove('is-active');
        }
    }

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select-type__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};
select();
