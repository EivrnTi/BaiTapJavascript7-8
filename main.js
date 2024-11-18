const themSo = document.getElementById("btn");
let numberArray = [];

themSo.onclick = () => {
  const number = document.getElementById("inputNum").value * 1;
  numberArray.push(number),
    (document.getElementById("txtArray").innerHTML = numberArray.join(", "));
};

const bt1 = document.getElementById("btn-bt1");

bt1.onclick = () => {
  let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      sum += numberArray[i];
    }
  }

  document.getElementById("txtSum").innerHTML = "Tổng số Dương: " + sum;
};

const bt2 = document.getElementById("btn-bt2");

bt2.onclick = () => {
  let countPositive = 0;

  for (let i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] > 0) {
      countPositive += 1;
    }
  }

  document.getElementById("txtCount").innerHTML = "Số dương: " + countPositive;
};

const bt3 = document.getElementById("btn-bt3");

bt3.onclick = () => {
  let min = numberArray[0];

  for (let i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] < min) {
      min = numberArray[i];
    }
  }

  document.getElementById("txtMin").innerHTML = "Số nhỏ nhất: " + min;
};


const bt4 = document.getElementById('btn-bt4');

bt4.onclick = () => {
  let minPositive = Infinity;

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0 && numberArray[i] < minPositive) {
      minPositive = numberArray[i];
    }
  }

  if (minPositive === Infinity) {
    document.getElementById('txtMinPos').innerHTML = "Không có số dương trong mảng";
  } else {
    document.getElementById('txtMinPos').innerHTML = "Số dương nhỏ nhất: " + minPositive;
  }
};

const bt5 = document.getElementById('btn-bt5');

bt5.onclick = () => {
  let lastEven = -1;

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      lastEven = numberArray[i];
    }
  }

  if (lastEven === -1) {
    document.getElementById('txtEven').innerHTML = "Không có số chẵn trong mảng";
  } else {
    document.getElementById('txtEven').innerHTML = "Số chẵn cuối cùng: " + lastEven;
  }
};
