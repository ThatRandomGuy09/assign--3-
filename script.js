document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".x-4-container");
  let currentInput = "";

  document
    .querySelectorAll(".placeholder, .div5, .div10, .x")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.textContent.trim();
        console.log(`Button clicked: ${value}`);
        currentInput += value;
        display.textContent = currentInput;
      });
    });

  document.querySelector(".group-button").addEventListener("click", () => {
    console.log("DEL button clicked");
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput;
  });

  document
    .querySelector(".rectangle-parent11")
    .addEventListener("click", () => {
      console.log("RESET button clicked");
      currentInput = "";
      display.textContent = "0";
    });

  document
    .querySelector(".rectangle-parent14")
    .addEventListener("click", () => {
      console.log("= button clicked");
      try {
        let result = currentInput.replace(/x/g, "*");
        result = eval(result); // Evaluate the expression
        if (result === Infinity || isNaN(result)) {
          throw new Error("Invalid calculation");
        }
        display.textContent = result;
        currentInput = result.toString();
      } catch (error) {
        console.error("Calculation error:", error.message);
        display.textContent = "Error";
      }
    });
});
