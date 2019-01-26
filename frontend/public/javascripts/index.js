$(document).ready(() => {
  $('#form').on('submit', (e) => {
    $('.modal').modal('show');
    const data = $('#form').serializeArray();
    $.post('localhost:8080/getAnalyze', data, (data) => {
      console.log(data);
      $('.modal').modal('hide');
    });
    e.preventDefault();
  });
  /*$('#submit-btn').click((e) => {
    $.post('localhost:8080',);
    $('.modal').modal('show');
    e.preventDefault();
  });*/
});