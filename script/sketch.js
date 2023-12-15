const tiles = [];
const rowNum = 75,
  colNum = 75;
// 셀의 갯수 설정

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  const w = width / colNum; // 셀의 너비
  const h = w; // 셀의 높이는 너비와 동일

  // 셀을 생성하고 배열에 추가
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      const newTile = new Cell(x, y, w, h);
      tiles.push(newTile);
    }
  }

  // 각 셀에 이웃 셀을 설정
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const neighborsIdx = [
        getIdx(row - 1, col - 1),
        getIdx(row - 1, col),
        getIdx(row - 1, col + 1),
        getIdx(row, col + 1),
        getIdx(row + 1, col + 1),
        getIdx(row + 1, col),
        getIdx(row + 1, col - 1),
        getIdx(row, col - 1),
      ];

      // 테두리에 있는 셀들의 이웃 인덱스 조정

      // 테두리 셀 처리 (1행 중 1번째 열일 때)
      if (col === 0) {
        neighborsIdx[0] = -1; //왼쪽 상단
        neighborsIdx[6] = -1; //좌측
        neighborsIdx[7] = -1; //좌측 하단
      }
      // 테두리 셀 처리 (마지막 행 중 마지막 열일 때)
      else if (col === colNum - 1) {
        neighborsIdx[2] = -1; //오른쪽 상단
        neighborsIdx[3] = -1; //오른쪽
        neighborsIdx[4] = -1; //오른쪽 하단
      }
      // 테두리 셀 처리 (1열 중 1번째 행일 때)
      if (row === 0) {
        neighborsIdx[0] = -1; //왼쪽 상단
        neighborsIdx[1] = -1; //상단
        neighborsIdx[2] = -1; //오른쪽 상단
      }
      // 테두리 셀 처리 (마지막 행 중 1번째 열일 때)
      else if (row === rowNum - 1) {
        neighborsIdx[4] = -1; //왼쪽 하단
        neighborsIdx[5] = -1; //하단
        neighborsIdx[6] = -1; //오른쪽 하단
      }

      // 이웃 배열 생성
      const neighbors = [];
      // neighborsIdx 배열에 있는 각 이웃 셀의 인덱스 순회
      neighborsIdx.forEach((eachIdx) => {
        // 이웃 셀의 인덱스가 유효한 경우
        // 해당 인덱스에 해당하는 tiles 배열의 셀을 neighbors 배열에 추가
        // 그렇지 않으면 null을 추가해 이웃이 없음을 나타내기
        neighbors.push(eachIdx >= 0 ? tiles[eachIdx] : null);
      });

      // 현재 셀의 열과 행을 이용해 인덱스 계산
      const idx = getIdx(row, col);
      // 현재 셀에 이웃 설정
      tiles[idx].setNeighbors(neighbors);
    }
  }

  frameRate(15);
  background(255);
  tiles.forEach((each) => {
    each.display();
  });
}

function draw() {
  background(255);

  tiles.forEach((each) => {
    each.calcNextState();
  });
  tiles.forEach((each) => {
    each.update();
  });

  tiles.forEach((each) => {
    each.display();
  });
}

function getIdx(row, col) {
  return row * colNum + col;
}

// 마우스 클릭 시 실행되는, 모든 셀의 상태를 랜덤하게
function mouseClicked() {
  tiles.forEach((tile) => {
    tile.state = random(['rock', 'paper', 'scissors']);
    tile.nextState = tile.state;
  });
}
