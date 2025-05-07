let initialized = false;

function updateClock() {
  const now = new Date();
  const ms = now.getMilliseconds();
  const seconds = now.getSeconds() + ms / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = now.getHours() % 12 + minutes / 60;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6;
  const hourDeg = hours * 30;

  const secHand = document.getElementById('second-hand');
  const minHand = document.getElementById('minute-hand');
  const hourHand = document.getElementById('hour-hand');

  // Убираем transition для первой установки
  if (!initialized) {
    [secHand, minHand, hourHand].forEach(hand => {
      hand.style.transition = 'none';
    });

    // Установим позиции
    secHand.style.transform = `rotate(${secondDeg}deg)`;
    minHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    // Включаем плавность после одной итерации
    requestAnimationFrame(() => {
      [secHand, minHand, hourHand].forEach(hand => {
        hand.style.transition = 'transform 0.05s linear';
      });
      initialized = true;
    });
  } else {
    secHand.style.transform = `rotate(${secondDeg}deg)`;
    minHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  }

  requestAnimationFrame(updateClock);
}

updateClock();