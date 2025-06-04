export const page = {
  menu: {
    menu: document.querySelector('.menu'),
    menuList: document.querySelector('.menu__list'),
    menuAddBtn: document.querySelector('.menu__add'),
  },
  header: {
    h1: document.querySelector('.header__title'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar'),
  },
  content: document.querySelector('.content'),
  main: {
    main: document.querySelector('main'),
    days: document.querySelector('.days'),
    habbit: {
      day: document.querySelectorAll('.habbit__day'),
      form: document.querySelector('.habbit__form'),
      delete: document.querySelector('.habbit__delete'),
      comments: document.querySelectorAll('.habbit__comment'),
      formReset: document.querySelector('.habbit__skip-comment'),
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
