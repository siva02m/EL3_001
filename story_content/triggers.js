function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6IyqjUw3AdN":
        Script1();
        break;
      case "63u03Dri18g":
        Script2();
        break;
      case "6XeTS9xWEcw":
        Script3();
        break;
      case "6ZQkXCS0hUS":
        Script4();
        break;
      case "5hfda7yKF9k":
        Script5();
        break;
      case "5jedCF4CVMd":
        Script6();
        break;
      case "5jJTxuOhCpz":
        Script7();
        break;
      case "5uEzA8NNSGr":
        Script8();
        break;
      case "5Z4TzsaHEoz":
        Script9();
        break;
      case "5aisQDIsp0z":
        Script10();
        break;
      case "6AdnC6HQPsa":
        Script11();
        break;
      case "5wmhninAk0i":
        Script12();
        break;
      case "5V2Ii0ebt9k":
        Script13();
        break;
      case "6LyuQE14sMc":
        Script14();
        break;
      case "6O0rHPsMEjN":
        Script15();
        break;
      case "6AaUvOGnp5o":
        Script16();
        break;
      case "5wDrWkfEMhF":
        Script17();
        break;
      case "6Z639Cj7nyV":
        Script18();
        break;
      case "6dUPz5hnaix":
        Script19();
        break;
      case "5jOhBT2h90M":
        Script20();
        break;
      case "6O7BgsZjSyT":
        Script21();
        break;
      case "5zjNQNN36Be":
        Script22();
        break;
      case "6lvxgWCbfVX":
        Script23();
        break;
      case "5zbcPaYgTeE":
        Script24();
        break;
      case "5r0abiZyawn":
        Script25();
        break;
      case "5fq46Xq3GtI":
        Script26();
        break;
      case "5zgmARYMLHO":
        Script27();
        break;
      case "5XHoNcuNtbC":
        Script28();
        break;
      case "69IwcS4N7XV":
        Script29();
        break;
      case "6HgTwldT1nG":
        Script30();
        break;
      case "6MCknWk7vTR":
        Script31();
        break;
      case "6jst0izZSBZ":
        Script32();
        break;
      case "6kNNYMRjVpa":
        Script33();
        break;
      case "6dko68IWade":
        Script34();
        break;
      case "5h7kdfsui7E":
        Script35();
        break;
      case "6qNjtTyr79O":
        Script36();
        break;
      case "6IGyI1oCst4":
        Script37();
        break;
      case "601vZYXnOFZ":
        Script38();
        break;
      case "6Mv0WQ2U2iA":
        Script39();
        break;
      case "6GODPWFqM1w":
        Script40();
        break;
      case "6Gk1StKmM3l":
        Script41();
        break;
      case "64Fnb4CX0hh":
        Script42();
        break;
      case "6kkWZz14GJ5":
        Script43();
        break;
      case "6jAM7DkkUho":
        Script44();
        break;
      case "6iMDqTkrNvw":
        Script45();
        break;
      case "5vwykditQRd":
        Script46();
        break;
      case "6IP8oGBTFn8":
        Script47();
        break;
      case "6mzeHSITQSw":
        Script48();
        break;
      case "64itxkNS107":
        Script49();
        break;
      case "5Z6oUdNvSxA":
        Script50();
        break;
      case "6esf2dnv8iK":
        Script51();
        break;
      case "5qJSfDGZnqH":
        Script52();
        break;
      case "5jiS3oiH3Tf":
        Script53();
        break;
      case "5j6F0n8YP8Z":
        Script54();
        break;
      case "6kux0ws4kl9":
        Script55();
        break;
      case "6iYUFYDtnC9":
        Script56();
        break;
      case "5YzmyIC7aQt":
        Script57();
        break;
      case "66Xatla96St":
        Script58();
        break;
      case "5uhyKHEhOMV":
        Script59();
        break;
      case "6KGb5DiyvXs":
        Script60();
        break;
      case "5mQoTrVcnNA":
        Script61();
        break;
      case "6iPKsLdcLYm":
        Script62();
        break;
      case "5W10OrXkb9l":
        Script63();
        break;
      case "6Ya00yOn7A6":
        Script64();
        break;
      case "6NeipRA6PRh":
        Script65();
        break;
      case "5aF86ZiEqb3":
        Script66();
        break;
      case "6Ugo9c15yEQ":
        Script67();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5r8DdoiPvvg');
const duration = 3000;
const easing = 'ease-out';
const id = '6riOj3WxyC9';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5r8DdoiPvvg');
const duration = 3000;
const easing = 'ease-out';
const id = '6riOj3WxyC9';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5r8DdoiPvvg');
const duration = 500;
const easing = 'ease-out';
const id = '6kkwdrmgQ67';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5r8DdoiPvvg');
const duration = 500;
const easing = 'ease-out';
const id = '6kkwdrmgQ67_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5V3fwMR3T7O');
const duration = 250;
const easing = 'ease-out';
const id = '6Spucjb5HTQ';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5V3fwMR3T7O');
const duration = 250;
const easing = 'ease-out';
const id = '6Spucjb5HTQ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5kKoI6wc0lc');
const duration = 250;
const easing = 'ease-out';
const id = '5fEPHE19riZ';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5kKoI6wc0lc');
const duration = 250;
const easing = 'ease-out';
const id = '5fEPHE19riZ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6YCZODTRjNL');
const duration = 250;
const easing = 'ease-out';
const id = '6gTgy8yDFoy';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6YCZODTRjNL');
const duration = 250;
const easing = 'ease-out';
const id = '6gTgy8yDFoy_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6376kf9RvuG');
const duration = 250;
const easing = 'ease-out';
const id = '6kFGu82XeJu';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6376kf9RvuG');
const duration = 250;
const easing = 'ease-out';
const id = '6kFGu82XeJu_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('619CWAG6k2l');
const duration = 250;
const easing = 'ease-out';
const id = '6gTgy8yDFoy';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('619CWAG6k2l');
const duration = 250;
const easing = 'ease-out';
const id = '6gTgy8yDFoy_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('64MUYShotam');
const duration = 250;
const easing = 'ease-out';
const id = '5rQy4ZJ4cY0';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('64MUYShotam');
const duration = 250;
const easing = 'ease-out';
const id = '5rQy4ZJ4cY0_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('5tFdEab2FRP');
const duration = 250;
const easing = 'ease-out';
const id = '6gTgy8yDFoy';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('5tFdEab2FRP');
const duration = 250;
const easing = 'ease-out';
const id = '6gTgy8yDFoy_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6IagjdGkxBs');
const duration = 250;
const easing = 'ease-out';
const id = '6csy9ouv72D';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('6IagjdGkxBs');
const duration = 250;
const easing = 'ease-out';
const id = '6csy9ouv72D_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('62WyMUTHXcH');
const duration = 250;
const easing = 'ease-out';
const id = '6WhP3nKfNaF';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('62WyMUTHXcH');
const duration = 250;
const easing = 'ease-out';
const id = '6WhP3nKfNaF_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6XRGI8GVROo');
const duration = 250;
const easing = 'ease-out';
const id = '5mQRDr7IQNt';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6XRGI8GVROo');
const duration = 250;
const easing = 'ease-out';
const id = '5mQRDr7IQNt_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6qUgyAh8Ewv');
const duration = 250;
const easing = 'ease-out';
const id = '5mkdEhhf5D4';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6qUgyAh8Ewv');
const duration = 250;
const easing = 'ease-out';
const id = '5mkdEhhf5D4_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('68JiaZ0msQs');
const duration = 250;
const easing = 'ease-out';
const id = '6ebqWgygesd';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('68JiaZ0msQs');
const duration = 250;
const easing = 'ease-out';
const id = '6ebqWgygesd_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  player.once(() => {
const target = object('608cNRGFZLE');
const duration = 3000;
const easing = 'ease-out';
const id = '6UL0Ws6eqiM';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script30 = function()
{
  const target = object('608cNRGFZLE');
const duration = 3000;
const easing = 'ease-out';
const id = '6UL0Ws6eqiM';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('608cNRGFZLE');
const duration = 500;
const easing = 'ease-out';
const id = '5mJ5xJr89WO';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('608cNRGFZLE');
const duration = 500;
const easing = 'ease-out';
const id = '5mJ5xJr89WO_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('6rTxajxqcTh');
const duration = 750;
const easing = 'ease-out';
const id = '5iucdNU6dJA';
const teeterAmount = 4;
const signs = ['', '-', ''];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('6CnOP9KUykl');
const duration = 750;
const easing = 'ease-out';
const id = '5iucdNU6dJA';
const teeterAmount = 4;
const signs = ['', '-', ''];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('6IlXhZy0hbO');
const duration = 750;
const easing = 'ease-out';
const id = '5iucdNU6dJA';
const teeterAmount = 4;
const signs = ['', '-', ''];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('5ovLXblkIer');
const duration = 750;
const easing = 'ease-out';
const id = '5iucdNU6dJA';
const teeterAmount = 4;
const signs = ['', '-', ''];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('6o60dDGuDVi');
const duration = 750;
const easing = 'ease-out';
const id = '5iucdNU6dJA';
const teeterAmount = 4;
const signs = ['', '-', ''];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('65jG9ArCJlh');
const duration = 750;
const easing = 'ease-out';
const id = '5iucdNU6dJA';
const teeterAmount = 4;
const signs = ['', '-', ''];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('5d9y300BPSv');
const duration = 750;
const easing = 'ease-out';
const id = '5iucdNU6dJA';
const teeterAmount = 4;
const signs = ['', '-', ''];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('6PWVV8PgfBw');
const duration = 750;
const easing = 'ease-out';
const id = '5iucdNU6dJA';
const teeterAmount = 4;
const signs = ['', '-', ''];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('6M87FNs1pfB');
const duration = 750;
const easing = 'ease-out';
const id = '5iucdNU6dJA';
const teeterAmount = 4;
const signs = ['', '-', ''];

player.addForTriggers(
id,
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('6i2rxjA7OkY');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('6i2rxjA7OkY');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('6DpWv8ynWQz');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('6DpWv8ynWQz');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('5atIyOlFZCB');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  const target = object('5atIyOlFZCB');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script48 = function()
{
  const target = object('5zAgp8dZbsS');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script49 = function()
{
  const target = object('5zAgp8dZbsS');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script50 = function()
{
  const target = object('5s9KYnOgOle');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script51 = function()
{
  const target = object('5s9KYnOgOle');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script52 = function()
{
  const target = object('6mroMC0g9rf');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script53 = function()
{
  const target = object('6mroMC0g9rf');
const duration = 250;
const easing = 'ease-out';
const id = '5oU6XLFjEjh_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script54 = function()
{
  player.once(() => {
const target = object('6VCxVGE0cqx');
const duration = 3000;
const easing = 'ease-out';
const id = '5eJLulagtEl';
const shakeAmount = 2;
const delay = 0;
addToTimeline(
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script55 = function()
{
  const target = object('6VCxVGE0cqx');
const duration = 3000;
const easing = 'ease-out';
const id = '5eJLulagtEl';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('6VCxVGE0cqx');
const duration = 500;
const easing = 'ease-out';
const id = '5oxc8GY31sm';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  const target = object('6VCxVGE0cqx');
const duration = 500;
const easing = 'ease-out';
const id = '5oxc8GY31sm_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  const target = object('61ftmdEiGiG');
const duration = 250;
const easing = 'ease-out';
const id = '5mbbqEnyrM1';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script59 = function()
{
  const target = object('61ftmdEiGiG');
const duration = 250;
const easing = 'ease-out';
const id = '5mbbqEnyrM1_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script60 = function()
{
  const target = object('5bmwi7Iq15n');
const duration = 250;
const easing = 'ease-out';
const id = '6OUgv5L0zlF';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script61 = function()
{
  const target = object('5bmwi7Iq15n');
const duration = 250;
const easing = 'ease-out';
const id = '6OUgv5L0zlF_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script62 = function()
{
  const target = object('5sExYDeJIR4');
const duration = 250;
const easing = 'ease-out';
const id = '5lwZ8jqyJAW';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script63 = function()
{
  const target = object('5sExYDeJIR4');
const duration = 250;
const easing = 'ease-out';
const id = '5lwZ8jqyJAW_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script64 = function()
{
  const target = object('6oeRJODjRW2');
const duration = 250;
const easing = 'ease-out';
const id = '6HSWTnXyBDC';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script65 = function()
{
  const target = object('6oeRJODjRW2');
const duration = 250;
const easing = 'ease-out';
const id = '6HSWTnXyBDC_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script66 = function()
{
  const target = object('6U05n6jEHTf');
const duration = 500;
const easing = 'ease-out';
const id = '5zcvOCMBWqT';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script67 = function()
{
  const target = object('6U05n6jEHTf');
const duration = 500;
const easing = 'ease-out';
const id = '5zcvOCMBWqT_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
