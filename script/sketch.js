// 매터 쓰기 위한 기본 변수
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  Common = Matter.Common,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

// 엔진 만들기
var engine = Engine.create({ gravity: { x: 0, y: 0 } }),
  world = engine.world;

// 러너 만들고 실행하기
var runner = Runner.create();
Runner.run(runner, engine);

// draw에서도 쓸 수 있게 변수 선언만 여기서
let stack;
const walls = [];
let m;
let mc;
const originalWidth = 1080;
const originalHeight = 720;

// 이미지 로드할 변수 선언
let box1Images = [];
let box2Images = [];
let box3Images = [];
let box4Images = [];
let box5Images = [];
let box6Images = [];
let box7Images = [];
let box8Images = [];
let box9Images = [];
let box10Images = [];
let box11Images = [];
let box12Images = [];

// 현재까지 몇 번째 이미지를 선택했는지 추적하는 변수
let box1ImageIndex1 = 0;
let box2ImageIndex2 = 0;
let box3ImageIndex3 = 0;
let box4ImageIndex4 = 0;
let box5ImageIndex5 = 0;
let box6ImageIndex6 = 0;
let box7ImageIndex7 = 0;
let box8ImageIndex8 = 0;
let box9ImageIndex9 = 0;
let box10ImageIndex10 = 0;
let box11ImageIndex11 = 0;
let box12ImageIndex12 = 0;

// preload 함수에서 이미지 로드
function preload() {
  for (let i = 4; i <= 8; i++) {
    box1Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 9; i <= 14; i++) {
    box2Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 16; i <= 22; i++) {
    box3Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 23; i <= 29; i++) {
    box4Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 30; i <= 36; i++) {
    box5Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 37; i <= 43; i++) {
    box6Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 44; i <= 50; i++) {
    box7Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 51; i <= 57; i++) {
    box8Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 58; i <= 63; i++) {
    box9Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 65; i <= 66; i++) {
    box10Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 67; i <= 68; i++) {
    box11Images.push(loadImage(`./3dpng/0-${i}.png`));
  }
  for (let i = 1; i <= 9; i++) {
    box12Images.push(loadImage(`./3dpng/1-${i}.png`));
  }

  // 이미지 배열 랜덤 셔플
  shuffleArray(box1Images);
  shuffleArray(box2Images);
  shuffleArray(box3Images);
  shuffleArray(box4Images);
  shuffleArray(box5Images);
  shuffleArray(box6Images);
  shuffleArray(box7Images);
  shuffleArray(box8Images);
  shuffleArray(box9Images);
  shuffleArray(box10Images);
  shuffleArray(box11Images);
  shuffleArray(box12Images);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);
  world.bodies = [];

  //위
  walls.push(Bodies.rectangle(540, 0, 1080, 10, { isStatic: true }));
  //아래
  walls.push(Bodies.rectangle(540, 720, 1080, 10, { isStatic: true }));
  //오른쪽
  walls.push(Bodies.rectangle(1080, 360, 10, 720, { isStatic: true }));
  //왼쪽
  walls.push(Bodies.rectangle(0, 360, 10, 720, { isStatic: true }));
  Composite.add(world, walls);

  // 도형과 이미지
  stack = Composite.create();
  // 생성할 사각형 갯수
  const numRectangles1 = 5;
  const numRectangles2 = 6;
  const numRectangles3 = 7;
  const numRectangles4 = 7;
  const numRectangles5 = 7;
  const numRectangles6 = 7;
  const numRectangles7 = 7;
  const numRectangles8 = 7;
  const numRectangles9 = 6;
  const numRectangles10 = 2;
  const numRectangles11 = 1;
  const numRectangles12 = 9;

  //사각형에 이미지 넣기
  //11번 눈금박스 2개 //맨뒤
  for (let i = 0; i < numRectangles11; i++) {
    const x = 805 + i * 1; // x 위치를 고정
    const y = 435; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 30, 30, {
        isStatic: true,
        render: {
          sprite: {
            texture: box11Images[box11ImageIndex11 % box11Images.length],
          },
        },
      })
    );

    box11ImageIndex11++;
  }
  //12번 글자박스 9개 //맨뒤
  for (let i = 0; i < numRectangles12; i++) {
    const x = 50; // x 위치를 고정
    const y = 100 + i * 68; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 30, 30, {
        isStatic: true,
        render: {
          sprite: {
            texture: box12Images[box12ImageIndex12 % box12Images.length],
          },
        },
      })
    );

    box12ImageIndex12++;
  }
  //1줄 5개
  for (let i = 0; i < numRectangles1; i++) {
    const x = 158 + i * 160; // x 위치를 고정
    const y = 50;

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 100, 150, {
        render: {
          sprite: {
            texture: box1Images[box1ImageIndex1 % box1Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box1ImageIndex1++;
  }
  //2줄 7개
  for (let i = 0; i < numRectangles2; i++) {
    const x = 220 + i * 115; // x 위치를 고정
    const y = 235; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          sprite: {
            texture: box2Images[box2ImageIndex2 % box2Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box2ImageIndex2++;
  }
  //3줄 7개
  for (let i = 0; i < numRectangles3; i++) {
    const x = 245 + i * 90; // x 위치를 고정
    const y = 338; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          sprite: {
            texture: box3Images[box3ImageIndex3 % box3Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box3ImageIndex3++;
  }
  //4줄 7개
  for (let i = 0; i < numRectangles4; i++) {
    const x = 280 + i * 80; // x 위치를 고정
    const y = 415; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          sprite: {
            texture: box4Images[box4ImageIndex4 % box4Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box4ImageIndex4++;
  }
  //5줄 7개
  for (let i = 0; i < numRectangles5; i++) {
    const x = 308 + i * 71; // x 위치를 고정
    const y = 478; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          sprite: {
            texture: box5Images[box5ImageIndex5 % box5Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box5ImageIndex5++;
  }
  //6줄 7개
  for (let i = 0; i < numRectangles6; i++) {
    const x = 335 + i * 65; // x 위치를 고정
    const y = 530; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 40, 40, {
        render: {
          sprite: {
            texture: box6Images[box6ImageIndex6 % box6Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box6ImageIndex6++;
  }
  //7줄 7개
  for (let i = 0; i < numRectangles7; i++) {
    const x = 360 + i * 58; // x 위치를 고정
    const y = 575; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 30, 30, {
        render: {
          sprite: {
            texture: box7Images[box7ImageIndex7 % box7Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box7ImageIndex7++;
  }
  //8줄 7개
  for (let i = 0; i < numRectangles8; i++) {
    const x = 385 + i * 49; // x 위치를 고정
    const y = 615; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 30, 30, {
        render: {
          sprite: {
            texture: box8Images[box8ImageIndex8 % box8Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box8ImageIndex8++;
  }
  //9줄 6개
  for (let i = 0; i < numRectangles9; i++) {
    const x = 418 + i * 49; // x 위치를 고정
    const y = 650; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 30, 30, {
        render: {
          sprite: {
            texture: box9Images[box9ImageIndex9 % box9Images.length], // 중복을 방지하기 위해 배열 크기로 나눔
          },
        },
      })
    );

    box9ImageIndex9++;
  }
  //10번 컬러박스 2개
  for (let i = 0; i < numRectangles10; i++) {
    const x = 125 + i * 94; // x 위치를 고정
    const y = 570; // y 위치를 조절하여 15씩 차이 나게 설정

    Composite.add(
      stack,
      Bodies.rectangle(x, y, 30, 30, {
        isStatic: true,
        render: {
          sprite: {
            texture: box10Images[box10ImageIndex10 % box10Images.length],
          },
        },
      })
    );

    box10ImageIndex10++;
  }
  // 만든 바디를 세계에 추가
  Composite.add(world, stack);

  // 마우스
  m = Mouse.create(document.querySelector('canvas'));
  m.pixelRatio = (pixelDensity() * width) / originalWidth;
  mc = MouseConstraint.create(engine, {
    mouse: m,
    constraint: {
      stiffness: 0.2,
    },
  });

  Composite.add(world, mc);
  background('white');
}

function draw() {
  background('white');
  noStroke();
  noFill();
  walls.forEach((eachWall) => {
    beginShape();
    eachWall.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });

  stack.bodies.forEach((eachBody) => {
    const pos = eachBody.position;
    const angle = eachBody.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    if (eachBody.render.sprite && eachBody.render.sprite.texture) {
      image(
        eachBody.render.sprite.texture,
        -eachBody.render.sprite.xOffset,
        -eachBody.render.sprite.yOffset,
        eachBody.render.sprite.width,
        eachBody.render.sprite.height
      );
    }
    pop();
  });
}
