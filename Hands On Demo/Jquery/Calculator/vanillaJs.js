
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const result = document.getElementById("result");

  const buttons = {
    add: document.getElementById("add"),
    subtract: document.getElementById("subtract"),
    multiply: document.getElementById("multiply"),
    divide: document.getElementById("divide"),
  };

  // Validation: allow only numbers and one decimal
  function validateInput(e) {
    let value = e.target.value;

    // Remove invalid chars
    value = value.replace(/[^0-9.]/g, "");

    // Prevent multiple decimals
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts[1];
    }

    e.target.value = value;
  }

  num1.addEventListener("input", validateInput);
  num2.addEventListener("input", validateInput);

  function getValues() {
    const val1 = parseFloat(num1.value);
    const val2 = parseFloat(num2.value);

    if (isNaN(val1) || isNaN(val2)) {
      result.className = "alert alert-warning text-center";
      result.textContent = "Please enter valid numbers";
      return null;
    }

    return { val1, val2 };
  }

  function showResult(message, type="info") {
    result.className = `alert alert-${type} text-center`;
    result.textContent = message;
  }

  buttons.add.addEventListener("click", () => {
    const v = getValues(); if (!v) return;
    showResult("Result: " + (v.val1 + v.val2), "primary");
  });

  buttons.subtract.addEventListener("click", () => {
    const v = getValues(); if (!v) return;
    showResult("Result: " + (v.val1 - v.val2), "secondary");
  });

  buttons.multiply.addEventListener("click", () => {
    const v = getValues(); if (!v) return;
    showResult("Result: " + (v.val1 * v.val2), "success");
  });

  buttons.divide.addEventListener("click", () => {
    const v = getValues(); if (!v) return;

    if (v.val2 === 0) {
      showResult("Cannot divide by zero", "danger");
      return;
    }

    showResult("Result: " + (v.val1 / v.val2), "danger");
  });
