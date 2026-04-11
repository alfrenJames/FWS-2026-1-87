  $(function () {
    function validateInput() {
      let value = $(this).val();

      value = value.replace(/[^0-9.]/g, "");

      const parts = value.split(".");
      if (parts.length > 2) {
        value = parts[0] + "." + parts[1];
      }

      $(this).val(value);
    }
    $("#num1, #num2").on("input", validateInput);

    function getValues() {
      const val1 = parseFloat($("#num1").val());
      const val2 = parseFloat($("#num2").val());

      if (isNaN(val1) || isNaN(val2)) {
        showResult("Please enter valid numbers", "warning");
        return null;
      }

      return { val1, val2 };
    }

    function showResult(message, type="info") {
      $("#result")
        .removeClass()
        .addClass(`alert alert-${type} text-center`)
        .text(message);
    }

    $("#add").click(function () {
      const v = getValues(); if (!v) return;
      showResult("Result: " + (v.val1 + v.val2), "primary");
    });

    $("#subtract").click(function () {
      const v = getValues(); if (!v) return;
      showResult("Result: " + (v.val1 - v.val2), "secondary");
    });

    $("#multiply").click(function () {
      const v = getValues(); if (!v) return;
      showResult("Result: " + (v.val1 * v.val2), "success");
    });

    $("#divide").click(function () {
      const v = getValues(); if (!v) return;

      if (v.val2 === 0) {
        showResult("Cannot divide by zero", "danger");
        return;
      }

      showResult("Result: " + (v.val1 / v.val2), "danger");
    });

  });
