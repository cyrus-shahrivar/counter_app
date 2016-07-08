console.log('connected to appjs');

$(document).ready(function () {
  $('#minus').on('click', function () {
    var currentCounterNum = $('#counter1').text();
    currentCounterNum = parseInt(currentCounterNum) - 1;
    $('#counter1').text(currentCounterNum);
  });
  $('#plus').on('click', function () {
    var currentCounterNum = $('#counter1').text();
    currentCounterNum = parseInt(currentCounterNum) + 1;
    $('#counter1').text(currentCounterNum);
  });
  $('#emailer').on('click', function () {
    var currentHref = $(this).attr('href');
    $(this).attr('href', currentHref + $('#counter1').text());
  });
});
