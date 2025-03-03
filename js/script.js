//hamburger
const headerMenu = document.querySelector('.header__menu'),
       navigation = document.querySelector('.navigation');
headerMenu.addEventListener('click', (e)=> {
    navigation.classList.toggle('active')
})       
//acardion
const blockInformation = document.querySelectorAll('.information__block'),
    informationItem = document.querySelectorAll('.information__item');

function hiddenInformation() {
    blockInformation.forEach(item => {
        item.classList.remove('active')
    })
}
hiddenInformation();
function openInformation(i) {
    blockInformation[i].classList.toggle('active');
}
informationItem.forEach((item, index)=> {
    item.addEventListener('click', ()=> {
        openInformation(index);
    })
})

const ordersItem = document.querySelectorAll('.private__orders-item');

function hiddenOrder() {
    ordersItem.forEach(item => {
        item.classList.remove('active')
    })
}
hiddenOrder();
function openOrder(i) {
    ordersItem [i].classList.toggle('active');
}
ordersItem.forEach((item, index)=> {
    item.addEventListener('click', ()=> {
        openOrder(index);
    })
})

const listItem = document.querySelectorAll('.list__item');

function hiddenlistItem() {
    ordersItem.forEach(item => {
        item.classList.remove('active')
    })
}
hiddenlistItem();
function openlistItem(i) {
    listItem[i].classList.toggle('active');
}
listItem.forEach((item, index)=> {
    item.addEventListener('click', ()=> {
        openlistItem(index);
    })
})
//sliders

//2
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.speakers__wrapper');
    const sliderInner = document.querySelector('.speakers__slides');
    const slides = document.querySelectorAll('.speakers__slide');

    if (!sliderWrapper || !sliderInner || slides.length === 0) {
        console.error('Не удалось найти необходимые элементы слайдера.');
        return;
    }

    const totalSlides = slides.length;
    let offset = 0;
    let startX = 0;
    let endX = 0;

    const moveSlider = () => {
        sliderInner.style.transform = `translateX(-${offset}px)`;
    };

    const checkWidth = () => {
        if (window.innerWidth < 500) {
            // Устанавливаем слайдер
            sliderInner.style.display = 'flex'; // Слайдер
            slides.forEach(slide => {
                slide.style.minWidth = '80%'; // Каждый слайд занимает всю ширину
            });

            // Добавляем обработчики событий для мобильных устройств
            sliderWrapper.addEventListener('touchstart', touchStartHandler);
            sliderWrapper.addEventListener('touchmove', touchMoveHandler);
            sliderWrapper.addEventListener('touchend', touchEndHandler);
        } else {
            // Убираем слайдер
            sliderInner.style.display = 'flex'; // Обычные блоки
            slides.forEach(slide => {
                slide.style.minWidth = 'auto'; // Автоматическая ширина для обычных блоков
            });

            // Удаляем обработчики событий
            sliderWrapper.removeEventListener('touchstart', touchStartHandler);
            sliderWrapper.removeEventListener('touchmove', touchMoveHandler);
            sliderWrapper.removeEventListener('touchend', touchEndHandler);

            // Сбрасываем offset
            offset = 0;
            moveSlider();
        }
    };

    const touchStartHandler = (e) => {
        startX = e.touches[0].clientX;
    };

    const touchMoveHandler = (e) => {
        endX = e.touches[0].clientX;
    };

    const touchEndHandler = () => {
        if (startX > endX + 50) { // Свайп влево
            if (offset < (sliderWrapper.offsetWidth * (totalSlides - 1))) {
                offset += sliderWrapper.offsetWidth; // Переход к следующему слайду
            }
        } else if (startX < endX - 50) { // Свайп вправо
            if (offset > 0) {
                offset -= sliderWrapper.offsetWidth; // Переход к предыдущему слайду
            }
        }
        moveSlider();
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
});
//3





































let elms = document.getElementsByClassName( 'splide' );

for ( let i = 0; i < elms.length; i++ ) {
  new Splide( elms[i], {
    perPage: 5,
    rewind : true,
    padding: '5rem',
    pagination: false,
    focus  : 'center',
    breakpoints: {
		1750: {
			perPage: 4,
		},
        1400: {
			perPage: 5,
            padding: '3rem',
		},
        993: {
			perPage: 4,
            padding: '3rem',
            arrows: false,
		},
        800: {
			perPage: 3,
            padding: '5rem',
		},
        660: {
			perPage: 3,
            padding: '2rem',
		},
        550: {
			perPage: 2,   
            padding: '5rem',         
		},
        450: {
			perPage: 2,   
            padding: '1rem',         
		},
        370: {
			perPage: 1,   
            padding: '5rem',         
		},
    }
  } ).mount();
}


new Splide('#slider1', {
    perPage: 4,
    rewind : true,
    padding: '1rem',
    pagination: false,
    focus  : 'center',
    breakpoints: {
		1750: {
			perPage: 4,
		},
        1400: {
			perPage: 3,
            padding: '4rem',
		},
        993: {
			perPage: 2,
            padding: '8rem',
            arrows: false,
		},
        800: {
			perPage: 2,
            padding: '1rem',
		},
        660: {
			perPage: 1,
            padding: '8rem',
		},
        550: {   
            padding: '5rem',         
		},
        450: { 
            padding: '3rem',         
		},
        370: {
			perPage: 1,   
            padding: '1rem',         
		},
    }
    
}).mount(); 



