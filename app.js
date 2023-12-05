let imgBox = document.getElementById("imgBox");
let imgQR = document.querySelector("#qrimg");
let qrText = document.querySelector("#qrText");

function generatorQR(params) {
  if (qrText.value.length > 0) {
    imgQR.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("showImg");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
