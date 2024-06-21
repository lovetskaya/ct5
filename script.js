document.getElementById("bank").addEventListener("change", function () {
    var bank = document.getElementById("bank").value.toLowerCase();
    var bankLogo = document.querySelector(".bank-logo");
  
    if (bank === "альфа") {
      bankLogo.style.backgroundImage =
        "url(https://credim.ru/Assets/images/logo/alpha.png)";
    } else if (bank === "тинькофф") {
      bankLogo.style.backgroundImage =
        "url(https://avatars.dzeninfra.ru/get-zen_doc/1907878/pub_62af2d31613fe1204aeb995c_62b0778f4666cc6dafce9d86/scale_1200)";
    } else if (bank === "сбер") {
      bankLogo.style.backgroundImage =
        "url(https://avatars.dzeninfra.ru/get-zen_doc/3986249/pub_5f7d9b08f862571092123e24_5f7d9e0fdee6654398e11cdd/scale_1200)";
    } else {
      bankLogo.style.backgroundImage =
        "url(path_to_default_bank_logo/default.png)";
    }
  });
  
  document
    .getElementById("paymentSystem")
    .addEventListener("change", function () {
      var paymentSystem = document
        .getElementById("paymentSystem")
        .value.toLowerCase();
      var paymentSystemLogo = document.querySelector(".payment-system-logo");
  
      if (paymentSystem === "visa") {
        paymentSystemLogo.style.backgroundImage =
          "url(https://kelods.com/wp-content/uploads/2019/06/visa.png)";
      } else if (paymentSystem === "mastercard") {
        paymentSystemLogo.style.backgroundImage =
          "url(https://static.tildacdn.com/tild6163-3135-4961-a438-316466316431/mastercard_PNG23.png)";
      } else if (paymentSystem === "мир") {
        paymentSystemLogo.style.backgroundImage =
          "url(https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-logotip-mir-prozrachnii-fon-9.png)";
      } else {
        paymentSystemLogo.style.backgroundImage =
          "url(path_to_default_payment_system_logo/default.png)";
      }
    });
  document.getElementById("cardNumber").addEventListener("blur", function () {
    var cardNumber = document.getElementById("cardNumber").value;
    if (cardNumber.length !== 16) {
      alert("Номер карты должен состоять из 16 цифр");
      this.value = cardNumber.slice(0, 16);
    }
  });
  
  document.getElementById("cardForm").addEventListener("input", function (event) {
    var cardNumber = document.getElementById("cardNumber").value;
    var holderName = document.getElementById("holderName").value;
    var expiryDate = document.getElementById("expiryDate").value;
  
    var cardNumberElement = document.querySelector(".card-number");
    var cardHolderElement = document.querySelector(".card-holder");
    var cardExpiryElement = document.querySelector(".card-expiry");
  
    cardNumberElement.textContent = cardNumber;
    cardHolderElement.textContent = holderName;
    cardExpiryElement.textContent = expiryDate;
  });
  function isValidCardInfo() {
    var bank = document.getElementById("bank").value.toLowerCase();
    var cardNumber = document.getElementById("cardNumber").value;
    var paymentSystem = document
      .getElementById("paymentSystem")
      .value.toLowerCase();
  
    if (bank !== "альфа" && bank !== "тинькофф" && bank !== "сбер") {
      alert("Некорректный банк");
      return false;
    }
  
    if (
      paymentSystem !== "visa" &&
      paymentSystem !== "mastercard" &&
      paymentSystem !== "мир"
    ) {
      alert("Некорректная платежная система");
      return false;
    }
  
    if (cardNumber.length !== 16) {
      alert("Номер карты должен состоять из 16 цифр");
      return false;
    }
  
    return true;
  }
  document
    .getElementById("cardForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      if (!isValidCardInfo()) {
        return;
      }
  
      var bank = document.getElementById("bank").value;
      var paymentSystem = document.getElementById("paymentSystem").value;
      var cardNumber = document.getElementById("cardNumber").value;
      var holderName = document.getElementById("holderName").value;
      var expiryDate = document.getElementById("expiryDate").value;
      var paymentSystemLogo = document.querySelector(".payment-system-logo");
      var bankLogo = document.querySelector(".bank-logo");
  
      var tableBody = document.querySelector("#cardTable tbody");
      var newRow = tableBody.insertRow();
      newRow.insertCell().textContent = bank;
      newRow.insertCell().textContent = paymentSystem;
      newRow.insertCell().textContent = cardNumber;
      newRow.insertCell().textContent = holderName;
      newRow.insertCell().textContent = expiryDate;
  
      document.getElementById("bank").value = "";
      document.getElementById("paymentSystem").value = "";
      document.getElementById("cardNumber").value = "";
      document.getElementById("holderName").value = "";
      document.getElementById("expiryDate").value = "";
      bankLogo.style.backgroundImage =
        "url(path_to_default_bank_logo/default.png)";
      paymentSystemLogo.style.backgroundImage =
        "url(path_to_default_payment_system_logo/default.png)";
  
      var cardPreview = document.querySelector(".card");
      cardPreview.querySelector(".card-number").textContent = "";
      cardPreview.querySelector(".card-holder").textContent = "";
      cardPreview.querySelector(".card-expiry").textContent = "";
    });