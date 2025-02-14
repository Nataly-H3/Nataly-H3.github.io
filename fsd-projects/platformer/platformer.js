$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 680, 300, 20, "blue");
    createPlatform(900, 550, 200, 20, "blue");
    createPlatform(450, 500, 300, 20, "blue");
    createPlatform(100, 400, 200, 20, "blue");
    createPlatform(500, 300, 100, 20, "blue");
    createPlatform(800, 250, 200, 20, "blue");
    createPlatform(1150, 200, 150, 20, "blue");
    createPlatform(100, 100, 20, 300, "blue");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 170, 0.3);
    createCollectable("database", 900, 200);
    createCollectable("kennedi", 500, 550, 0.1);


    
    // TODO 4 - Create Cannons
    createCannon("top", 400, 1000);
    createCannon("bottom", 1050, 850);
    createCannon("right", 330, 2000);
    createCannon("left", 505, 850);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
