function deleteRow(row) {
  row.parentNode.parentNode.remove();
}

document.addEventListener("DOMContentLoaded", function () {
  const deleteButtons = document.querySelectorAll(".button-delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      deleteRow(this);
    });
  });

  const updateButtons = document.querySelectorAll(".button-update");
  updateButtons.forEach((button) => {
    button.addEventListener("click", function () {
      updateRow(this);
    });
  });
});
