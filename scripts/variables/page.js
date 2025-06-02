export const page = {
  menu: {
    menu: document.querySelector('.menu'),
    menuList: document.querySelector('.menu__list'),
    menuAddBtn: document.querySelector('.menu__add'),
  },
  header: {
    h1: document.querySelector('.h1'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar'),
  },
  main: {
    main: document.querySelector('main'),
    days: document.querySelector('.days'),
    habbit: {
      day: document.querySelector('.habbit__day'),
      form: document.querySelector('.habbit__form'),
      delete: document.querySelector('.habbit__delete'),
      comments: document.querySelectorAll('.habbit__comment'),
    },
  },
  popup: {
    cover: document.querySelector('.cover'),
    close: document.querySelector('.popup__close'),
    iconBtns: document.querySelectorAll('.popup__icon'),
    form: document.querySelector('.popup__form'),
    iconInput: document.getElementById('icon-input'),
  },
};
