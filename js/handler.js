var linkLoading = document.querySelector('.loading');
var popupLoading = document.querySelector('.files-loading-popup');
var overlayLoading = document.querySelector('.overlay');
var closeLoading = document.querySelector('.overlay');

linkLoading.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupLoading.classList.add('modal-show');
    overlayLoading.classList.add('overlay-show');
    popupCalculator.classList.remove('modal-show');
    popupOperator.classList.remove('modal-show');
    popupHelping.classList.remove('modal-show');
  });

closeLoading.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupLoading.classList.remove('modal-show');
    overlayLoading.classList.remove("overlay-show");
    popupLoading.classList.remove("modal-error");
});

var linkCalculator = document.querySelector('.calculator');
var popupCalculator = document.querySelector('.files-calculator-popup');
var closeCalculator= document.querySelector('.overlay');

linkCalculator.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupCalculator.classList.add('modal-show');
    overlayLoading.classList.add('overlay-show');    
    popupLoading.classList.remove('modal-show');
    popupOperator.classList.remove('modal-show');
    popupHelping.classList.remove('modal-show');
  });

closeCalculator.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCalculator.classList.remove('modal-show');
    overlayLoading.classList.remove("overlay-show");
});

var linkOperator = document.querySelector('.operator');
var popupOperator = document.querySelector('.files-operator-popup');
var closeOperator = document.querySelector('.overlay');

linkOperator.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOperator.classList.add('modal-show');
    overlayLoading.classList.add('overlay-show');
    popupLoading.classList.remove('modal-show');
    popupCalculator.classList.remove('modal-show');
    popupHelping.classList.remove('modal-show');
  });

closeOperator.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupOperator.classList.remove('modal-show');
    overlayLoading.classList.remove("overlay-show");
});

var linkHelping = document.querySelector('.helping');
var popupHelping = document.querySelector('.files-helping-popup');
var closeHelping = document.querySelector('.overlay');

linkHelping.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupHelping.classList.add('modal-show');
    overlayLoading.classList.add('overlay-show');
    popupLoading.classList.remove('modal-show');
    popupCalculator.classList.remove('modal-show');
    popupOperator.classList.remove('modal-show');
  });

closeHelping .addEventListener("click", function (evt) {
    evt.preventDefault();
    popupHelping.classList.remove('modal-show');
    overlayLoading.classList.remove("overlay-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupLoading.classList.contains("modal-show")) {
        popupLoading.classList.remove("modal-show");
        overlayLoading.classList.remove("overlay-show");
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupCalculator.classList.contains('modal-show')) {
        popupCalculator.classList.remove('modal-show');
        overlayLoading.classList.remove("overlay-show");
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupOperator.classList.contains('modal-show')) {
        popupOperator.classList.remove('modal-show');
        overlayLoading.classList.remove("overlay-show");
      }
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupHelping.classList.contains('modal-show')) {
        popupHelping.classList.remove('modal-show');
        overlayLoading.classList.remove("overlay-show");
      }
    }
  });