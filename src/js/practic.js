// -------------------------------------CALLBACK---------------------------------------------

// const doMath = (a, b, callback) => {
//     console.log(callback(a,b));
// }
// const add = (x, y) => {
//     return x + y;
// };
// const multiply = (t, v) => {
//     return t * v;
// }

// doMath(5, 5, add);
// doMath(5, 5, multiply);

 // ------------ інлайн функція(типу одноразова, анонімна)--------------
// doMath(5, 5, (x, y) => {
//     return x + y;
// });
// doMath(5, 5, (t, v) => {
//     return t * v;
// });


// -----------------------приклад від Репети(модуль 4. заняття 7(20 хв.))-----------------------------
                     // 1. використовується при реєстрації події//


// const buttonRef = document.querySelector('.js-button');

// const handleButtonClick = () => {
//     console.log('Клік по кнопці')
// }

// buttonRef.addEventListener('click', handleButtonClick);

                       //2. відкладиний виклик геопозицій//

// const onGetPositionSuccsess = (position) => {
//     console.log(position);
//  }

// const onGetPositionError = (error) => {
//     console.log(error);
// }
// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccsess, onGetPositionError);




// const filter = (array,test) => {
//     const filteredArray = [];
    
//    array.forEach(el => {
//        console.log(el);   
//        if (test(el)) {
//            filteredArray.push(el);  
//        }
//    });
//     return filteredArray;
// }

// const callback1 = value => {
//     return value >= 3;
// }
// const callback2 = value => {
//     return value <= 4;
// }


// console.log(filter([1, 2, 3, 4, 5], callback1));
// console.log(filter([1, 2, 3, 4, 5,6,7,8],callback2));