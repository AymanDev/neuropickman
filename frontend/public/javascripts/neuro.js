$(document).ready(() => {
  $('#form').on('submit', (e) => {
    $('#loading-modal').modal('show');
    const data = $('#form').serializeArray();

    fetch('http://localhost:8080/getAnalyze', {
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: data,
      method: 'POST'
    })
      .then(data => {
        setTimeout(() => $('#loading-modal').modal('hide'), 1000);
        data.json().then(dataJson => {
          if (dataJson.status) {
            setTimeout(() => {
              $('#response-success-modal').modal('show');
              $('#response-success-text').text('Доверять такому клиенту можно!');
            }, 2000);
            return;
          }
          setTimeout(() => {
            $('#response-success-modal').modal('show');
            $('#response-success-text').text('Доверять такому клиенту нельзя!');
          }, 2000);
        });
      })
      .catch(err => {
        setTimeout(() => $('#loading-modal').modal('hide'), 1000);
        setTimeout(() => $('#response-error-modal').modal('show'), 2000);
        console.error(err);
      });
    e.preventDefault();
  });
  /*$('#submit-btn').click((e) => {
    $.post('localhost:8080',);
    $('.modal').modal('show');
    e.preventDefault();
  });*/
});