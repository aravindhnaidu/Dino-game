
  const dino = document.getElementById('dino');
  const obstacle = document.getElementById('obstacle');

  let isJumping = false;

  function jump() {
    if (!isJumping) {
      isJumping = true;
      let jumpCount = 1;
      const jumpInterval = setInterval(() => {
        const bottomPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
        if (bottomPosition < 150 && jumpCount < 15) {
          dino.style.bottom = (bottomPosition + 10) + 'px';
          jumpCount++;
        } else if (jumpCount >= 15) {
          clearInterval(jumpInterval);
          const fallInterval = setInterval(() => {
            const bottomPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
            if (bottomPosition > 0) {
              dino.style.bottom = (bottomPosition - 10) + 'px';
            } else {
              clearInterval(fallInterval);
              isJumping = false;
            }
          }, 20);
        }
      }, 20);
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      jump();
    }
  });

  function moveObstacle() {
    let obstaclePosition = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
    if (obstaclePosition < 1000) {
      obstacle.style.right = (obstaclePosition + 5) + 'px';
    } else {
      obstacle.style.right = '-50px';
    }
  }

  setInterval(moveObstacle, 20);
