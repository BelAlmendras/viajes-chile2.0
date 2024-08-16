import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//tooltip
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });

  //alert
  document.getElementById('alertButton').addEventListener('click', function() {
    alert('El mensaje fue enviado con éxito');
  });