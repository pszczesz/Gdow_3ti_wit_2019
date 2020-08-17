window.onload = function () {
  const array = [12, 34, 45, 3, 4];
  // document.querySelector("#root1").innerHTML = fun1(array);
  // document.querySelector("#root2").innerHTML = fun2(array);
  let result = [];
  array.forEach((v, i) => {
    console.log(v + 2, i);
    result.push(v + 2);
  });
  console.log(result);
  console.log(array.map((v) => { return v + 2; }));
}

