'use strict';
const settings = {
  rowCount: 10,
  colCount: 10,
  startPositionX: 0,
  startPositionY: 0,
  startDirection: 'right',
  stepsInSecond: 5,
  playerCellColor: '#aa3333',
  emptyCellColor: '#eee',
};

const player = {
  x: null,
  y: null,
  direction: null,

  setDirection(direction) {
    this.direction = direction;
  },

  init(startX, startY, startDirection) {
    this.x = startX;
    this.y = startY;
    this.direction = startDirection;
  },

  makeStep() {
    const nextPoint = this.getNextStepPoint();

    this.x = nextPoint.x;
    this.y = nextPoint.y;
  },

  getNextStepPoint() {
    const point = {
      x: this.x,
      y: this.y,
    };

    switch (this.direction) {
      case 'up':
        point.y--;
        break;
      case 'right':
        point.x++;
        break;
      case 'down':
        point.y++;
        break;
      case 'left':
        point.x--;
        break;
    }

    return point;
  init(startX, startY) {
    this.x = startX;
    this.y = startY;
  },
  move(direction) {
    switch (direction) {
      case 2:
        this.y++;
        break;
      case 4:
        this.x--;
        break;
      case 6:
        this.x++;
        break;
      case 8:
        this.y--;
    }},
};

const game = {
  player,
  settings,
  containerElement: null,
  cellElements: [],

  run() {
    this.init();
    this.render();

    setInterval(() => {
      if (this.canPlayerMakeStep()) {
        this.player.makeStep();
        this.render();
      }
    }, 1000 / this.settings.stepsInSecond);
  },

  init() {
    this.player.init(
      this.settings.startPositionX,
      this.settings.startPositionY,
      this.settings.startDirection
    );

    this.containerElement = document.getElementById('game');

    this.initCells();
    this.initEventHandlers();
  },

  initCells() {
    this.containerElement.innerHTML = '';
    this.cellElements = [];

    for (let row = 0; row < this.settings.rowCount; row++) {
      const trElem = document.createElement('tr');
      this.containerElement.appendChild(trElem);

      for (let col = 0; col < this.settings.colCount; col++) {
        const cell = document.createElement('td');
        trElem.appendChild(cell);

        this.cellElements.push(cell);
      }
    }
  },

  initEventHandlers() {
    document.addEventListener('keydown', event => this.keyDownHandler(event))
  },

  keyDownHandler(event) {
    switch (event.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.player.setDirection('up');
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.player.setDirection('right');
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.player.setDirection('down');
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.player.setDirection('left');
        break;
    }
  },

  render() {
    this.cellElements.forEach(cell => cell.style.backgroundColor = this.settings.emptyCellColor);

    const playerCell = document
      .querySelector(`tr:nth-child(${this.player.y + 1})`)
      .querySelector(`td:nth-child(${this.player.x + 1})`);

    playerCell.style.backgroundColor = this.settings.playerCellColor;
  },

  canPlayerMakeStep() {
    const nextPoint = this.player.getNextStepPoint();

    return nextPoint.x >= 0 && nextPoint.x < this.settings.colCount
      && nextPoint.y >= 0 && nextPoint.y < this.settings.rowCount;
  },
};

window.addEventListener('load', () => game.run());
 settings,
  player,

  run() {
    this.player.init(this.settings.startPositionX, this.settings.startPositionY);

    while (true) {
      this.render();

      const direction = this.getDirection();

      if (direction === -1) {
        return alert('До свидания!');
      }

      this.player.move(direction);
    }
  },

  render() {
    let map = '';

    for (let row = 0; row < this.settings.rowCount; row++) {
      for (let col = 0; col < this.settings.colCount; col++) {
        if (this.player.y === row && this.player.x === col) {
          map += 'o ';
        } else {
          map += 'x ';
        }
      }
      map += '\n';
    }

    console.clear();
    console.log(map);
  },

  getDirection() {
    const availableDirections = [-1, 2, 4, 6, 8];

    while (true) {
      const direction = parseInt(prompt('Введите число, куда хотите переместиться или -1 для выхода.'));

      if (!availableDirections.includes(direction)) {
        alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
        continue;
      }

      return direction;
    }
  },
};

game.run();

