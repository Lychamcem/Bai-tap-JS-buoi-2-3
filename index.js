// BÀI 1
/* Mô hình 3 khối
* input: tiền lương 1 ngày, số ngày làm
* process: 
+ bước 1: lấy dữ liệu từ input
+ bước 2: tính lương = số ngày x tiền lương 1 ngày
+ bước 3: hiển thị kết quả trên browser
* output: tính lương
*/

document.getElementById("calc1").onclick = function () {
  let perDay = +document.getElementById("salaryperday").value;
  let workDay = +document.getElementById("numofworkday").value;
  let answer1 = perDay * workDay;
  let announce1 = document.getElementById("output1");
  announce1.style.display = "block";
  announce1.style.padding = "20px";
  announce1.innerHTML = answer1;
};

// BÀI 2
/* Mô hình 3 khối
* input: 5 số bất kì
* process:
+ bước 1: lấy 5 số được nhập
+ bước 2: tính tổng và chia 5
+ bước 3: hiển thị kết quả trên browser
* output: tính trung bình cộng của 5 số
*/

document.getElementById("calc2").onclick = function () {
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  let num4 = +document.getElementById("num4").value;
  let num5 = +document.getElementById("num5").value;

  let sum5Num = num1 + num2 + num3 + num4 + num5;
  let answer2 = sum5Num / 5;
  let announce2 = document.getElementById("output2");
  announce2.style.display = "block";
  announce2.style.padding = "20px";
  announce2.innerHTML = answer2;
};

// BÀI 3
/* Mô hình 3 khối
* input: số tiền USD cần quy đổi
* process:
+ bước 1: lấy số tiền USD được nhập
+ bước 2: số tiền USD x tỉ giá tiền VND
+ bước 3: hiển thị kết quả trên browser
* output: số tiền VND được chuyển đổi từ số tiền USD 
*/

document.getElementById("calc3").onclick = function () {
  let usd = +document.getElementById("usd").value;
  const number = 23500;
  let answer3 = number * usd;
  let announce3 = document.getElementById("output3");
  announce3.style.display = "block";
  announce3.style.padding = "20px";
  announce3.innerHTML = new Intl.NumberFormat("vn-VN").format(answer3);
};

// BÀI 4
/* Mô hình 3 khối
* input: chiều dài, chiều rộng hình chữ nhật
* process:
+ bước 1: lấy chiều dài, chiều rộng được nhập
+ bước 2: diện tích = dài x rộng, chu vi = (dài + rộng) x2
+ bước 3: hiển thị kết quả trên browser
* output: diện tích, chu vi hình chữ nhật
*/

document.getElementById("calc4").onclick = function () {
  let dai = +document.getElementById("dai").value;
  let rong = +document.getElementById("rong").value;
  let chuvi = (dai + rong) * 2;
  let dientich = dai * rong;
  let announce4 = document.getElementById("output4");
  announce4.style.display = "block";
  announce4.style.padding = "20px";
  announce4.innerHTML =
    "Diện tích: " + dientich + ";" + " " + "Chu vi: " + chuvi;
};

// BÀI 5
/* Mô hình 3 khối
* input: 1 số có 2 chữ số
* process:
+ bước 1: số có 2 chữ số vừa nhập
+ bước 2: số hàng chục = số / 10 (làm tròn xuống)
+ bước 3: số hàng đơn vị = 
* output: tổng của 2 chữ số đó
*/

document.getElementById("calc5").onclick = function () {
  let numBer = +document.getElementById("numBer").value;
  let hangChuc = Math.floor(numBer / 10);
  let HangDonVi = Math.floor(numBer % 10);
  let answer5 = hangChuc + HangDonVi;
  let announce5 = document.getElementById("output5");
  announce5.style.display = "block";
  announce5.style.padding = "20px";
  announce5.innerHTML = answer5;
};
