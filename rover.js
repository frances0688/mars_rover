var xMax = 10;
var yMax = 10;
var grid = new Array ();

for (x = 0; x<xMax; x++) {
  grid[x] = new Array ();
  for (y = 0; y<yMax; y++) {
    grid[x][y] = 0;
  }
}

//ADD YOUR COMMANDS HERE! Save and run to find out the rover's position.
var input = "fffrfrrffflbblfffffffffff";


var kata = {
  position: [3,1],
  direction: 'N'
};

var right = {
  N: 'E',
  E: 'S',
  S: 'W',
  W: 'N'
};

var left = {
  N: 'W',
  E: 'N',
  S: 'E',
  W: 'S'
};

var commands = {
  "f": goForward,
  "b": goBackward,
  "r": turnRight,
  "l": turnLeft
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++;
      break;
    case 'E':
      rover.position[0]++;
      break;
    case 'S':
      rover.position[1]--;
      break;
    case 'W':
      rover.position[0]--;
      break;
    }
  if (rover.position[0] >= xMax) {
    rover.position[0] = 0;
  }
  if (rover.position[1] >= yMax) {
    rover.position[1] = 0;
  }

}

  function goBackward(rover) {
    switch(rover.direction) {
      case 'N':
        rover.position[1]--;
        break;
      case 'E':
        rover.position[0]--;
        break;
      case 'S':
        rover.position[1]++;
        break;
      case 'W':
        rover.position[0]++;
          break;
      }
    if (rover.position[0] >= xMax) {
      rover.position[0] = 0;
    }
    if (rover.position[1] >= yMax) {
      rover.position[1] = 0;
    }
  }

    function turnRight(rover) {
      rover.direction = right[rover.direction];
    }

    function turnLeft(rover) {
      rover.direction = left[rover.direction];
}

for (var i = 0; i < input.length; i++){
  commands[input[i]](kata);
  console.log("Rover Kata's New Position: [" + kata.position[0] + ", " + kata.position[1] + "]" + " facing " + kata.direction);
}
console.log("Rover Kata's Final Position: [" + kata.position[0] + ", " + kata.position[1] + "]" + " facing " + kata.direction);
