(function() {
    $('.glyphicon-chevron-right').addClass('glyphicon');
    $('.glyphicon-remove').addClass('glyphicon');
    $('.glyphicon-menu-up').addClass('glyphicon');
})();

$('p').find('.glyphicon-remove').click(function () {
  $(this).parent().removeClass('selected');
  $(this).hide();
});
$('pre').find('.glyphicon-remove').click(function () {
  $(this).parent().removeClass('selected');
  $(this).hide();
});

$('p').mousedown(function (e) {
  if (!$(this).hasClass('selected')) {
    $(this).addClass('selected');
    $(this).find('span').show();
  }
});
$('pre').mousedown(function (e) {
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
