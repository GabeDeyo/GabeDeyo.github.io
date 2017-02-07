$('p').find('.glyphicon-remove').click(function () {
  $(this).parent().removeClass('selected');
  $(this).hide();
});

$('p').mousedown(function (e) {
  if (!$(this).hasClass('selected')) {
    $(this).addClass('selected');
    $(this).find('span').show();
  }
});

$('#selectAll').click(() => {
  $('p').addClass('selected');
  $('span').show();
});

$('#clearAll').click(() => {
  $('p').removeClass('selected');
  $('p').find('span').hide();
});
