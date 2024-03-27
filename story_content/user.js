function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pSVjgCJls7":
        Script1();
        break;
      case "61RLa5wJNfq":
        Script2();
        break;
      case "6n2mcLw804z":
        Script3();
        break;
      case "63s8JZeZB0I":
        Script4();
        break;
      case "6k1FRUZcN2C":
        Script5();
        break;
      case "5i6eYn5gG4t":
        Script6();
        break;
      case "6XU0YyvfW8J":
        Script7();
        break;
      case "6TqcmvnLlhi":
        Script8();
        break;
      case "6n8xutf5UyH":
        Script9();
        break;
      case "60nppgeNEaU":
        Script10();
        break;
      case "5gx1pVMPsVr":
        Script11();
        break;
      case "6Tv87RCFGWd":
        Script12();
        break;
      case "6DWXyQMwizG":
        Script13();
        break;
      case "6VMc3B1YH7F":
        Script14();
        break;
      case "6hLU71R8qmK":
        Script15();
        break;
      case "6euCrvM8WzT":
        Script16();
        break;
      case "5XjVENPntYN":
        Script17();
        break;
      case "5hW8QjSd09E":
        Script18();
        break;
      case "5cqd1zB02SI":
        Script19();
        break;
      case "6axre7wXLcZ":
        Script20();
        break;
      case "68HxUBLku68":
        Script21();
        break;
      case "67fdZfZsxLl":
        Script22();
        break;
      case "6Yo9T8S528X":
        Script23();
        break;
      case "6dq5v90f7bD":
        Script24();
        break;
      case "6g2qNmoepHd":
        Script25();
        break;
      case "6Wx183n3iiq":
        Script26();
        break;
      case "5Yxo4UkJfVe":
        Script27();
        break;
      case "6lxqYNhM3bs":
        Script28();
        break;
      case "6LtxTcYQITt":
        Script29();
        break;
      case "5VZbdK4TNv6":
        Script30();
        break;
      case "5blj0qvmfJF":
        Script31();
        break;
      case "6jr16ROUr7a":
        Script32();
        break;
      case "6Go3RUHfgvx":
        Script33();
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

window.Script16 = function()
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

window.Script17 = function()
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

window.Script18 = function()
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

window.Script19 = function()
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

window.Script20 = function()
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

window.Script21 = function()
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

window.Script22 = function()
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

window.Script23 = function()
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

window.Script24 = function()
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

window.Script25 = function()
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

window.Script26 = function()
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

window.Script27 = function()
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

window.Script28 = function()
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

window.Script29 = function()
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

window.Script30 = function()
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

window.Script31 = function()
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

window.Script32 = function()
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

window.Script33 = function()
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

};
