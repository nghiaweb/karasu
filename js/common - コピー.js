const CLASSNAME = "-visible";
const TIMEOUT = 1000;
const $target = $(".mv-title");
const $target02 = $(".mv-subtitle");
const $target03 = $(".mv2-line01");
const $target04 = $(".mv2-line02");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    $target02.addClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);

setInterval(() => {
  $target03.addClass(CLASSNAME);
  setTimeout(() => {
    $target04.addClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);
