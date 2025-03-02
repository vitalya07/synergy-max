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



