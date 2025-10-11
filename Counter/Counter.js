var $increase = $('#increase');
var $decrease = $('#decrease');
var $reset = $('#reset');
var $number = $('#number');
var i = 0;
$increase.on('click', function () {
  i += 1;
  $number.text(i);
});
$decrease.on('click', function () {
  i -= 1;
  $number.text(i);
});
$reset.on('click', function () {
  i = 0;
  $number.text(i);
});
$('input').on('mouseover click', function () {
  $(this).css({ 'background-color': getRandomColor(), transition: '1s', 'border-color': getRandomColor() });
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
