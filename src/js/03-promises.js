const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => resolve({ position, delay }), delay);
    } else {
      setTimeout(() => reject({ position, delay }), delay);
    };
  }).then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }).catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = +form.elements.amount.value;
  const step = +form.elements.step.value;
  let delay = +form.elements.delay.value;
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay);
    delay +=step;
  };
});