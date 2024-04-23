document
  .getElementById("botaoCorRandom") //
  .addEventListener("click", function () {
    var divCor = document.getElementById("alterarCorRandom");
    // Gere uma cor aleatória usando RGB
    var cor =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    divCor.style.backgroundColor = cor;
  });

document
  .getElementById("botaoCorRed") //
  .addEventListener("click", function () {
    var divCor = document.getElementById("alterarCorRed");
    // Gere uma cor aleatória usando RGB
    var cor =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 0) +
      "," +
      Math.floor(Math.random() * 0) +
      ")";
    divCor.style.backgroundColor = cor;
  });

document
  .getElementById("botaoCorGreen") //
  .addEventListener("click", function () {
    var divCor = document.getElementById("alterarCorGreen");
    // Gere uma cor aleatória usando RGB
    var cor =
      "rgb(" +
      Math.floor(Math.random() * 0) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 0) +
      ")";
    divCor.style.backgroundColor = cor;
  });

document
  .getElementById("botaoCorBlue") //
  .addEventListener("click", function () {
    var divCor = document.getElementById("alterarCorBlue");
    // Gere uma cor aleatória usando RGB
    var cor =
      "rgb(" +
      Math.floor(Math.random() * 0) +
      "," +
      Math.floor(Math.random() * 0) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    divCor.style.backgroundColor = cor;
  });

document
  .getElementById("botaoCorYellow") //
  .addEventListener("click", function () {
    var divCor = document.getElementById("alterarCorYellow");
    // Gere uma cor aleatória usando RGB
    var cor =
      "rgb(" +
      Math.floor(Math.random() * 56 + 200) +
      "," +
      Math.floor(Math.random() * 56 + 200) +
      "," +
      Math.floor(Math.random() * 0) +
      ")";
    divCor.style.backgroundColor = cor;
  });
