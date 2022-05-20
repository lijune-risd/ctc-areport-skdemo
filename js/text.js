// JavaScript Variables.
const words = $('#wordlist').text().split("\n");
const $wordsContainer = $('p.words');
const $editor = $('#editor');
const $clear = $('#clear');

for (let i in words) {
  let word = words[i];
  $wordsContainer.append($('<span class=word>' + word + '</span>'));
}

$wordsContainer.on('click', e => {
  let $word = $(e.target);

  if (!$word.hasClass('word')) {
    return;
  }

  $editor.append($word.clone().addClass('added'));
  setTimeout(function () {
    $('.word.added', $editor).removeClass('added');
  });
});
$clear.on('click', () => {
  $editor.empty();
});
