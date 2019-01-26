$(document).ready(() => {
  $('#submit-btn').click((e) => {
    $('.modal').modal('show');
    e.preventDefault();
  });
});