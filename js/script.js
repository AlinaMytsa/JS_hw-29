'use strict';
( () => {
  const example = () => {
    const arr = [];
    const func = () =>{
      if (arr.length > 100) return arr;
      let randomNum = Math.floor((Math.random() * 100) + 1);
      arr.includes(randomNum) ? func() : arr.push(randomNum);
      return arr;
    }
    return func;
  }
  let exampleFunc = example();
  exampleFunc()
  exampleFunc()
  exampleFunc()
  exampleFunc()
  console.log(exampleFunc());
})()
