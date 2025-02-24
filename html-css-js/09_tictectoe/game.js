class TicTacToe {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;

    this.start = document.querySelector('#start');
    this.board = document.querySelector('.board');
    this.result = document.querySelector('.result');
    this.return = document.querySelector('#return');
    this.msg = document.querySelector('.msg')

    this.play();
    this.boxList = [];
    this.win = false;
    this.cnt = 0;
    this.turn = 1;
  }

  play() {

    this.start.addEventListener('click', () => {
      this.start.classList.add('hiden');
      this.board.classList.remove('hiden');
    })

    this.return.addEventListener('click', () => {
      this.result.classList.add('hiden');
      this.board.classList.remove('hiden');
      this.reset();
    })

    this.board.addEventListener('click', e => this.checkBox(e))

  }

  reset() {
    this.win = false;
    this.cnt = 0;
    this.turn = 1;
    this.board.innerHTML = `<div class="box" idx="1"></div>
      <div class="box" idx="2"></div>
      <div class="box" idx="3"></div>
      <div class="box" idx="4"></div>
      <div class="box" idx="5"></div>
      <div class="box" idx="6"></div>
      <div class="box" idx="7"></div>
      <div class="box" idx="8"></div>
      <div class="box" idx="9"></div>`
  }

  checkBox = (e) => {
    if (e.target == this.board) return;
    // console.log(e.target);
    // console.log(e.target.getAttribute('idx'))
    if (e.target.innerHTML) return;
    e.target.classList.add(this.turn == 1 ? 'p1' : 'p2');
    e.target.innerHTML = this.turn == 1 ? this.p1.shape : this.p2.shape;
    this.checkWin(e);
    const curP = this.turn == 1 ? this.p1.name : this.p2.name;
    if (this.win) {
      this.msg.innerHTML = `<span id="player"> ${curP}</span><span>님이 게임 승리!</span><br><span>게임종료</span>`;
      this.board.classList.add('hiden');
      this.result.classList.remove('hiden');
      return;
    }
    this.cnt++;
    if (this.cnt >= 9) {
      this.msg.innerHTML = `<span>무승부 입니다</span>`;
      this.board.classList.add('hiden');
      this.result.classList.remove('hiden');
      return;
    }
    this.turn = this.turn == 1 ? 2 : 1;
  }

  checkWin = (e) => {
    const base = e.target.getAttribute('idx') - 1;
    // console.log(base);
    this.boxList = [...document.querySelectorAll('.box')];
    const x = parseInt(base / 3);
    const y = parseInt(base % 3);
    const mark = e.target.innerHTML;
    let cntX = 0;
    let cntY = 0;
    // console.log(this.boxList);

    for (let i = x * 3; i < (x * 3) + 3; i += 1) { // 가로
      if (this.boxList[i].innerHTML == mark) {
        cntX++;
      }
    }

    for (let i = y; i <= y + 6; i += 3) { // 세로
      if (this.boxList[i].innerHTML == mark) {
        cntY++;
      }
    }

    if (cntX == 3 || cntY == 3) {
      this.win = true;
      return;
    }

    let cnt1 = 0;
    let cnt2 = 0;
    if (this.boxList[0].innerHTML == mark) cnt1++;
    if (this.boxList[8].innerHTML == mark) cnt1++;
    if (this.boxList[4].innerHTML == mark) {
      cnt1++;
      cnt2++;
    }
    if (this.boxList[2].innerHTML == mark) cnt2++;
    if (this.boxList[6].innerHTML == mark) cnt2++;


    // console.log('cnt1:' + cnt1);
    // console.log('cnt2:' + cnt2);
    if (cnt1 == 3 || cnt2 == 3) {
      this.win = true;
      return;
    }




  }

}


class Player {
  constructor(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;
  }
}

// window.addEventListener("load", () => {
//   window.game = new TicTacToe(new Player('핑크', 'pink', 'O'), new Player('블루', 'blue', 'X'))
// })

const game = new TicTacToe(new Player('핑크', 'pink', 'O'), new Player('블루', 'blue', 'X'));
console.log(game);


