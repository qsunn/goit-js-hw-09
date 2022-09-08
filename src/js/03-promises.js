const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => shouldResolve ? resolve({ position, delay }) : reject({ position, delay }), delay);
  });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const amount = +form.elements.amount.value;
  const step = +form.elements.step.value;
  let delay = +form.elements.delay.value;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then((data) => console.log(`✅ Fulfilled promise ${data.position} in ${data.delay}ms`))
      .catch((data) => console.log(`❌ Rejected promise ${data.position} in ${data.delay}ms`))
      .finally(delay += step);
  };
});