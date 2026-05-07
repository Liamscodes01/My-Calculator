
const display = document.getElementById("display");
const buttons = document.querySelectorAll("#keys button");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.dataset.value;

    if (value) {
      if (display.value.length < 11) {
        display.value += value;
      }
    }
  });
});

equalsBtn.addEventListener("click", function () {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
});

clearBtn.addEventListener("click", function () {
  display.value = "";
});

