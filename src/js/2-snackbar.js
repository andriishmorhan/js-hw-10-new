import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const { delay, state } = event.target.elements;
  const delayValue = Number(delay.value);
  const stateValue = state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delayValue}ms`);
      } else {
        reject(`❌ Rejected promise in ${delayValue}ms`);
      }
    }, delayValue);
  });
  promise
    .then(value => {
      iziToast.show({
        title: 'OK',
        message: value,
        color: 'green',
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        message: error,
        color: 'red',
        position: 'topRight',
      });
    });
}
