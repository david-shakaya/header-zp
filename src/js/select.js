// import { tns } from 'tiny-slider';

console.log(tns);
var slider = tns({
    container: '#responsive',
    responsive: {
        320: {
            items: 1,
            center: true,
            fixedWidth: 287,
            loop: false,
            swipeAngle: true,
            speed: 400,
            gutter: 30,
            rewind: true,
            startIndex: 2,
            controlsText: ['', ''],
        },
        768: {
            fixedWidth: 731,
            startIndex: 2,
            gutter: 70,
            items: 1,
            center: true,
            loop: false,
            swipeAngle: true,
            speed: 400,
            rewind: true,
            controlsText: ['', ''],
        },
        1160: {
            fixedWidth: 731,
            startIndex: 2,
            gutter: 70,
            items: 1,
            center: true,
            loop: false,
            swipeAngle: true,
            speed: 400,
            rewind: true,
            controlsText: ['', ''],
        },
    },
});

// "responsive": {
//     "350": {
//       "items": 3,
//       "controls": true,
//       "edgePadding": 30
//     },
//     "500": {
//       "items": 4
//     }
//   },

console.log(slider.getInfo().navCurrent);

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
