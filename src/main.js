import string from "./style.js";

const player = {
  //定义定时器
  step: null,
  //每写一个字符
  n: 1,
  //播放速度
  speed: 50,
  //初始化
  init: () => {
    player.ui.version.innerText = string.substring(0, player.n);
    player.ui.style.innerHTML = string.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  ui: {
    version: document.querySelector("#version"),
    style: document.querySelector("#style"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnFast": "fast",
    "#btnNormal": "normal",
    "#btnSlow": "slow",
  },
  bindEvents: () => {
    for (let key in player.events) {
      const value = player.events[key];
      document.querySelector(key).onclick = player[value];
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.step);
    }
    player.ui.version.innerText = string.substring(0, player.n);
    player.ui.style.innerHTML = string.substring(0, player.n);
    player.ui.version.scrollTop = player.ui.version.scrollHeight;
  },
  play: () => {
    player.step = setInterval(player.run, player.speed);
  },
  pause: () => {
    return window.clearInterval(player.step);
  },
  fast: () => {
    player.pause();
    player.speed = 0;
    player.play();
  },
  normal: () => {
    player.pause();
    player.speed = 50;
    player.play();
  },
  slow: () => {
    player.pause();
    player.speed = 300;
    player.play();
  },
};

player.init()