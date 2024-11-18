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

const bt4 = document.getElementById("btn-bt4");

bt4.onclick = () => {
  let minPositive = Infinity;

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0 && numberArray[i] < minPositive) {
      minPositive = numberArray[i];
    }
  }

  if (minPositive === Infinity) {
    document.getElementById("txtMinPos").innerHTML =
      "Không có số dương trong mảng";
  } else {
    document.getElementById("txtMinPos").innerHTML =
      "Số dương nhỏ nhất: " + minPositive;
  }
};

const bt5 = document.getElementById("btn-bt5");

bt5.onclick = () => {
  let lastEven = -1;

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      lastEven = numberArray[i];
    }
  }

  if (lastEven === -1) {
    document.getElementById("txtEven").innerHTML =
      "Không có số chẵn trong mảng";
  } else {
    document.getElementById("txtEven").innerHTML =
      "Số chẵn cuối cùng: " + lastEven;
  }
};

const bt6 = document.getElementById("btn-bt6");

bt6.onclick = () => {
  num1 = document.getElementById("inputIndex1").value * 1;
  num2 = document.getElementById("inputIndex2").value * 1;

  let temp = numberArray[num1];
  numberArray[num1] = numberArray[num2];
  numberArray[num2] = temp;

  document.getElementById("txtChangePos").innerHTML =
    "Mảng sau khi đổi: " + numberArray;
};

const bt7 = document.getElementById("btn-bt7");

bt7.onclick = () => {
  let swap = numberArray[0];

  for (let i = 0; i <= numberArray.length; i++) {
    for (let j = 0; j <= numberArray.length - 1; j++) {
      if (numberArray[i] > numberArray[i + 1]) {
        let swap = numberArray[i];
        numberArray[i] = numberArray[i + 1];
        numberArray[i + 1] = swap;
      }
    }
  }

  document.getElementById("txtIncrease").innerHTML =
    "Mảng sau khi sắp xếp: " + numberArray;
};

const bt8 = document.getElementById("btn-bt8");

bt8.onclick = () => {
  const numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with your actual array

  for (let i = 0; i < numberArray.length; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(numberArray[i]); j++) {
      if (numberArray[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && numberArray[i] > 1) {
      document.getElementById("txtPrime").innerHTML =
        "Số nguyên tố đầu tiên: " + numberArray[i];
      return;
    }
  }

  document.getElementById("txtPrime").innerHTML =
    "Không tìm thấy số nguyên tố trong mảng";
};

const themSoFloat = document.getElementById("btnFloat");
let floatArray = [];

themSoFloat.onclick = () => {
  const number = document.getElementById("inputFloat").value * 1;
  floatArray.push(number),
    (document.getElementById("txtArrayFloat").innerHTML =
      floatArray.join(", "));
};

const bt9 = document.getElementById("btn-bt9");

bt9.onclick = () => {
  let countInt = 0;
  for (let i = 0; i <= floatArray.length; i++) {
    if (Number.isInteger(floatArray[i])) {
      countInt += 1;
    }
  }

  document.getElementById("txtInt").innerHTML = "Số nguyên: " + countInt;
};

const bt10 = document.getElementById("btn-bt10");

bt10.onclick = () => {
  let soDuong = 0;
  let soAm = 0;

  for (let i = 0; i <= numberArray.length; i++) {
    if (numberArray[i] > 0) {
      soDuong += 1;
    } else if (numberArray[i] < 0) {
      soAm += 1;
    }
  }
  if (soDuong > soAm) {
    document.getElementById("txtCompare").innerHTML = "Số dương > Số âm";
  } else if (soDuong < soAm) {
    document.getElementById("txtCompare").innerHTML = "Số âm > Số dương";
  } else {
    document.getElementById("txtCompare").innerHTML = "Số dương = số Âm";
  }
};
