class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = random(['rock', 'paper', 'scissors']);
    // 셀의 현재 상태를 랜덤으로 선택 (rock, paper, scissors 중 하나)
    this.nextState = this.state;
    this.neighbors = []; //이웃 셀
    this.RPSCARule = {
      rock: 'scissors', // rock(주먹)이 scissors(가위)를 이김
      paper: 'rock', // paper(보)가 rock(주먹)을 이김
      scissors: 'paper', // scissors(가위)가 paper(보)를 이김
    };
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors; //주변 이웃 셀
  }

  calcNextState() {
    const livingNeighbors = this.neighbors.filter(
      (eachNeighbor) => this.RPSCARule[eachNeighbor?.state] === this.state
    ).length;
    // 자신을 이길 수 있는 이웃 셀의 개수를 계산

    if (livingNeighbors <= 2) {
      // 이길 수 있는 이웃이 2개 이하면
      this.nextState = this.state; // 현재 상태로 유지 (방어)
    } else {
      // 그렇지 않으면
      const livingNeighborsStates = this.neighbors.filter(
        (eachNeighbor) => this.RPSCARule[eachNeighbor?.state] === this.state
      );
      // 자신을 이긴 셀들의 상태를 가져옴
      const randomIndex = Math.floor(
        Math.random() * livingNeighborsStates.length
      );
      this.nextState = livingNeighborsStates[randomIndex].state;
      // 랜덤하게 선택된 이웃의 상태로 변경 (점령당함)
    }
  }

  update() {
    this.state = this.nextState; // 갱신
  }

  // 초호기 color
  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    if (this.state === 'rock') {
      fill('#00ff80'); // rock(주먹) #그린
    } else if (this.state === 'scissors') {
      fill('#151517'); // scissors(가위) #다크그레이
    } else if (this.state === 'paper') {
      fill('#8000ff'); // paper(보) #퍼플
    }
    rect(0, 0, this.w, this.h);
    pop();
  }
}
