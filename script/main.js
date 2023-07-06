//burger
(function () {
    let burger = document.querySelector('.burger-button');
    let mobileMenu = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        mobileMenu.classList.toggle("is-open");
    });
    mobileMenu.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        mobileMenu.classList.toggle("is-open");
    });
}());


//tabs
function openTab(evt, nabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("is-active", "");
    }
    document.getElementById(nabName).style.display = "block";
    evt.currentTarget.className += " is-active";
}

//TODO: refactoring this shit, delete old code modal
//modal
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.header-button');
const btnFormModal = document.querySelector('.modal-button');
const stepOneFormModal = document.querySelector('.step-one');
const stepTwoFormModal = document.querySelector('.step-two');
const stepOneFormModal2 = document.querySelector('.step-one-2');
const stepTwoFormModal2 = document.querySelector('.step-two-2');

const openModal = function () {
    modal.classList.remove('is-hidden');
    overlay.classList.remove('is-hidden');
    body.classList.add('is-no-scroll');
};

const closeModal = function () {
    stepTwoFormModal.classList.remove('is-active');
    stepOneFormModal.classList.add('is-active');
    modal.classList.add('is-hidden');
    overlay.classList.add('is-hidden');
    body.classList.remove('is-no-scroll');

};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
        closeModal();
    }
});

function stepForm() {
    event.preventDefault()
    stepOneFormModal.classList.remove('is-active');
    stepTwoFormModal.classList.add('is-active');
}

function stepForm2() {
    event.preventDefault()
    stepOneFormModal2.classList.remove('is-active');
    stepTwoFormModal2.classList.add('is-active');
}

//subscribe form
const stepOneFormSubscribe = document.querySelector('.subscribe-form-step-one');
const stepTwoFormSubscribe = document.querySelector('.subscribe-form-step-two');

function subscribeForm() {
    event.preventDefault()
    stepOneFormSubscribe.classList.remove('is-active');
    stepTwoFormSubscribe.classList.add('is-active');
}

// new functional modal
const openModalButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');

function openModal2(modal) {
    modal.classList.remove('is-hidden');
}
function closeModal2(modal) {
    modal.classList.add('is-hidden');
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        openModal2(modal);
    });
});

modals.forEach(modal => {
    const closeModalButton = modal.querySelector('.close-modal');
    const overlay = modal.querySelector('.overlay');

    closeModalButton.addEventListener('click', () => {
        closeModal2(modal);
    });

    overlay.addEventListener('click', () => {
        closeModal2(modal);
    });
});

//map
// function initMap() {
//     const map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 50.45464374452758, lng: -30.488302931734445},
//         zoom: 12,
//         // styles: [{
//         //     // Стили скопировать сюда или JSON
//         // }]
//     });
//
//     $.getJSON("style_map.json", function(data) {
//         map.setOptions({styles: data});
//     });
// }

// function initMap() {
//     let coordinates = {lat: 50.45464374452758, lng: 30.488302931734445};
//
//     let map = new google.maps.Map(document.getElementById('map'), {
//         center: coordinates,
//
//     });
//
//     $.getJSON("script/style_map.json", function(data) {
//         map.setOptions({styles: data});
//     });
// }


