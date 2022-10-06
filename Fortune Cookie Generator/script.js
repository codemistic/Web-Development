var fortunes = [
  "The early bird gets the worm, but the second mouse gets the cheese.",
  "Be on the alert to recognize your prime at whatever time of your life it may occur.",
  "Your road to glory will be rocky, but fulfilling.",
  "Courage is not simply one of the virtues, but the form of every virtue at the testing point.",
  "Patience is your alley at the moment. Don’t worry!",
  "Nothing is impossible to a willing heart.",
  "Don’t worry about money. The best things in life are free.",
  "Don’t pursue happiness – create it.",
  "Courage is not the absence of fear; it is the conquest of it.",
  "Nothing is so much to be feared as fear.",
  "All things are difficult before they are easy.",
  "The real kindness comes from within you.",
  "A ship in harbor is safe, but that’s not why ships are built.",
  "You don’t need strength to let go of something. What you really need is understanding.",
  "If you want the rainbow, you have to tolerate the rain.",
  "Fear is interest paid on a debt you may not owe.",
  "Hardly anyone knows how much is gained by ignoring the future.",
  "The wise man is the one that makes you think that he is dumb.",
  "The usefulness of a cup is in its emptiness.",
  "He who throws mud loses ground.",
  "Success lies in the hands of those who wants it.",
  "To avoid criticism, do nothing, say nothing, be nothing.",
  "Of all our human resources, the most precious is the desire to improve.",
  "People learn little from success, but much from failure.",
  "Be not afraid of growing slowly, be afraid only of standing still.",
  "We must always have old memories and young hopes.",
  "A person who won’t read has no advantage over a person who can’t read.",
  "He who expects no gratitude shall never be disappointed.",
  "The best way to get rid of an enemy is to make a friend.",
  "It’s amazing how much good you can do if you don’t care who gets the credit.",
  "Never forget that a half truth is a whole lie.",
  "Happiness isn’t an outside job, it’s an inside job.",
  "If you do not run your subconscious mind yourself, someone else will.",
  "You have a secret admirer.",
  "The middle of the process is no place to determine the end of it.",
  "Set yourself up to experience what you love.",
  "When you love yourself, people who don't love you back become less interesting.",
  "Self acceptance > self improvement",
  "Somewhere between all those distracting details is the best version of you.",
  "Unlearn everything that you aren’t. Relearn everything that you are.",
  "Change comes with embracing the future, not fighting your past.",
  "To be found, stop hiding.",
];

var paper = document.querySelector(".paper");
var cookieLeft = document.querySelector(".cookieLeft");
var cookieRight = document.querySelector(".cookieRight");
var count = 0;
function displayFortune() {
  paper.classList.remove("animatePaper");
  cookieLeft.classList.remove("animateCookieLeft");
  cookieRight.classList.remove("animateCookieRight");
  paper.innerHTML = "";

  setTimeout(function () {
    paper.classList.add("animatePaper");
    cookieLeft.classList.add("animateCookieLeft");
    cookieRight.classList.add("animateCookieRight");
  }, 1000);

  var num = Math.floor(Math.random() * 42);

  setTimeout(function () {
    paper.innerHTML = fortunes[num];
  }, 2000);
}
