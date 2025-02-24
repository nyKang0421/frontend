class Game1To50 {
  constructor() {
    this.nodeList = [];
    this.frontList = [];
    this.backList = [];
    this.board = document.querySelector('.board');
    this.finish = document.querySelector('.finish');
    this.reset = document.querySelector('#reset');
    this.timer = document.querySelector('.timer');
    this.msg = document.querySelector('.msg');


    this.init();
    this.endtime;
    this.count = 1;
    this.lastTime = '';
  }

  init() {
    // console.log("Test");
    this.makeNum();
    this.openCard();
    this.play();
  }




  openCard() {
    // console.log(this.board);
    this.board.innerHTML = '';
    this.frontList.forEach(num => {
      this.board.innerHTML += `<div>${num}</div>`
    })
  }

  makeNum() {
    let front = [];
    let back = [];
    for (let i = 0; i < 25; i++) {
      front.push(i + 1);
      back.push((i + 1) + 25);
    }
    for (let i = 0; i < 1000; i++) {
      const rdNum1 = parseInt(Math.random() * 25)
      const rdNum2 = parseInt(Math.random() * 25)
      // console.log(rdNum1);
      // console.log(rdNum2);
      const temp1 = front[0];
      front[0] = front[rdNum1];
      front[rdNum1] = temp1;

      const temp2 = back[0];
      back[0] = back[rdNum2];
      back[rdNum2] = temp2;
    }
    this.frontList = [...front];
    this.backList = [...back];
    // console.log(this.frontList);
    // console.log(this.backList);
  }

  play() {
    let msec = 0;
    let sec = 0;
    let min = 0;
    const interval = setInterval(() => {
      this.timer.innerHTML = '00:00:00';
      msec += 1;
      if (msec == 100) {
        sec++;
        msec = 0;
      }
      if (sec == 60) {
        min++;
        sec = 0;
      }
      let msecT = msec < 10 ? `0${msec}` : `${msec}`;
      let secT = sec < 10 ? `0${sec}` : `${sec}`;
      let minT = min < 10 ? `0${min}` : `${min}`;
      this.timer.innerHTML = `${minT}:${secT}:${msecT}`;
      this.lastTime = `${minT}:${secT}:${msecT}`;
      // console.log(test);
    }, 10);
    this.board.addEventListener('click', e => {
      this.changeNum(e);
      this.hint();
      if (this.count > 50) {
        // console.log('lasttest');
        this.board.classList.add('hidden');
        this.finish.classList.remove('hidden');
        clearInterval(interval);
        this.msg.innerHTML = `완료 기록<br>${this.lastTime}`
      }
      this.replay();
    })
  }

  replay() {
    this.reset.addEventListener('click', () => {
      this.board.classList.remove('hidden');
      this.finish.classList.add('hidden');
      this.count = 1;
      this.init();
    })
  }

  hint() {
    if (this.count == 51) return;
    const info = [...document.querySelectorAll('.board div')];
    // console.log(info);
    let idx = -1;
    for (let i = 0; i < info.length; i++) {
      if (info[i].innerHTML == this.count) {
        idx = i;
      }
    }
    // console.log(idx);
    // console.log(info[idx]);
    info[idx].classList.add('hint');
    setTimeout(() => {
      info[idx].classList.remove('hint');
    }, 100)
  }

  changeNum(e) {
    const num = e.target.innerHTML.trim();
    if (num != this.count) {
      return;
    } else {
      if (num > 25) {
        e.target.classList.add('last');
        this.count++;
      } else {
        let idx = -1;
        // console.log(this.frontList.length);
        for (let i = 0; i < this.frontList.length; i++) {
          // console.log('test')
          // console.log(this.frontList[i]);
          if (this.frontList[i] == num) {
            idx = i;
            break;
          }
        }
        // console.log(idx);
        e.target.innerHTML = `${this.backList[idx]}`
        this.count++;
      }
    }

  }





}

window.game = new Game1To50();