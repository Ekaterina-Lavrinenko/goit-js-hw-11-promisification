const delay = ms => {
  // Твой код
  return new Promise(resolve => resolve(ms));
};

  const logger = time => console.log(`Resolved after ${time}ms`);


// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms



// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5;

//     setTimeout(() => {
//      if (canFulfill) {
//         resolve('Выполнится успешно (исполнен, fulfilled)');
//     }

//     reject('Выполнится с ошибкой (отклонен, rejected)');
//     }, 1000); 
// });

// function onFulfilled(result) {
//     console.log('onFulfilled -> onFulfilled');
//     console.log(`YES ${result}`);
// }

// function onRejected(error) {
//     console.log('onRejected -> onRejected');
//     console.log(`NO ${error}`);
// }


// promise
//     .then(onFulfilled)
//     .then(
//         x => {
//             console.log(x);
//             return 10;
//         })
//     .then(y => {
//         console.log(y);
//     })
//     .catch(error => console.log(error))
//     .finally(() => console.log('Я буду выполнен в любом случае'));