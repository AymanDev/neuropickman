$(document).ready(() => {
  $('#form').on('submit', (e) => {
    $('.modal').modal('show');
    const data = $('#form').serializeArray();

    fetch('http://localhost:8080/getAnalyze', {
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      },
      body: data,
      method: 'POST'
    }).then(data => console.log(data))
      .then(res => console.log(res))
      .catch(err => console.error(err));
    // $.post('localhost:8080/getAnalyze', data, (data, status) => {
    //   console.log(data);
    // });
    // $.ajax({
    //   url: 'localhost:8080/getAnalyze',
    //   type: 'POST',
    //   contentType: "application/json; charset=utf-8",
    //   data: JSON.stringify(data[0]),
    //   dataType: 'jsonp',
    //   success: (json) => {
    //     console.log(json);
    //     console.log('success');
    //   },
    //   error: () => {
    //     $('.modal').modal('hide');
    //     console.log('fail');
    //   }
    // });
    // $.post('localhost:8080/getAnalyze', data, (data) => {
    //   console.log(data);
    //   $('.modal').modal('hide');
    // }).fail(() => {
    //   console.log('fail');
    //   $('.modal').modal('hide');
    // });
    e.preventDefault();
  });
  /*$('#submit-btn').click((e) => {
    $.post('localhost:8080',);
    $('.modal').modal('show');
    e.preventDefault();
  });*/
});