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
  position: [3,2],
  direction: 'N'
};

var obstacleArray = [
  [5,8], [3,5], [6,1]
];

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
  var position1, position0;
  switch(rover.direction) {
    case 'N':
      position1 = rover.position[1]+1;
      position0 = rover.position[0];
      break;
    case 'E':
      position1 = rover.position[1];
      position0 = rover.position[0]+1;
      break;
    case 'S':
      position1 = rover.position[1]-1;
      position0 = rover.position[0];
      break;
    case 'W':
      position1 = rover.position[1];
      position0 = rover.position[0]-1;
      break;
    }
  if (obstacle(position0, position1)){
    return true;
  }
    rover.position[0] = position0;
    rover.position[1] = position1;
  if (rover.position[0] >= xMax) {
    rover.position[0] = 0;
  }
  if (rover.position[1] >= yMax) {
    rover.position[1] = 0;
  }

}

  function goBackward(rover) {
    var position1, position0;
    switch(rover.direction) {
      case 'N':
      position1 = rover.position[1]-1;
      position0 = rover.position[0];
        break;
      case 'E':
      position1 = rover.position[1];
      position0 = rover.position[0]-1;
        break;
      case 'S':
      position1 = rover.position[1]+1;
      position0 = rover.position[0];
        break;
      case 'W':
      position1 = rover.position[1];
      position0 = rover.position[0]+1;
          break;
      }
    if (obstacle(position0, position1)){
        return true;
      }
        rover.position[0] = position0;
        rover.position[1] = position1;
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

function obstacle(position0, position1) {
  switch (true){
    case position0 === obstacleArray[0][0] && position1 === obstacleArray[0][1]:
    console.log("Watch out! There seems to be a canyon on your path's way. Try another route.");
    return true;
    case position0 === obstacleArray[1][0] && position1 === obstacleArray[1][1]:
    console.log("Stop! We're not alone! You've found an alien colony. Let's go make some friends :)");
    return true;
    case position0 === obstacleArray[2][0] && position1 === obstacleArray[2][1]:
    console.log("You can't get through...It's an ocean! We might be able to live here after all!");
    return true;
  }
  return false;
}

for (var i = 0; i < input.length; i++){
  if (commands[input[i]](kata)){
    break;
  }
  console.log("Rover Kata's New Position: [" + kata.position[0] + ", " + kata.position[1] + "]" + " facing " + kata.direction);
}
console.log("Rover Kata's Final Position: [" + kata.position[0] + ", " + kata.position[1] + "]" + " facing " + kata.direction);
