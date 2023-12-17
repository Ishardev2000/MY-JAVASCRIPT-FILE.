const HOUR_DEGREES_PER_SECOND = 360 / (12 * 60 * 60);
const MINUTE_DEGREES_PER_SECOND = 360 / (60 * 60);
const SECOND_DEGREES_PER_SECOND = 360 / 60;

function startclock(clock) {
  const hourHand = clock.querySelector(".hour-hand");
  const minuteHand = clock.querySelector(".minute-hand");
  const secondHand = clock.querySelector(".second-hand");

  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const fractionalMinutes = minutes + seconds / 60;
  const fractionalHours = hours + fractionalMinutes / 60;

  hourHand.style.setProperty(
    "--_rotation",
    (360 * fractionalHours) / 12 + "deg"
  );

  minuteHand.style.setProperty(
    "--_rotation",
    (360 * fractionalMinutes) / 60 + "deg"
  );

  secondHand.style.setProperty("--_rotation", (360 * seconds) / 60 + "deg");

  setInterval(() => {
    const hoursRotation = parseFloat(
      hourHand.style.getPropertyValue("--_rotation")
    );
    hourHand.style.setProperty(
      "--_rotation",
      hoursRotation + HOUR_DEGREES_PER_SECOND + "deg"
    );

    const minutesRotation = parseFloat(
      minuteHand.style.getPropertyValue("--_rotation")
    );
    minuteHand.style.setProperty(
      "--_rotation",
      minutesRotation + MINUTE_DEGREES_PER_SECOND + "deg"
    );

    const secondsRotation = parseFloat(
      secondHand.style.getPropertyValue("--_rotation")
    );
    secondHand.style.setProperty(
      "--_rotation",
      secondsRotation + SECOND_DEGREES_PER_SECOND + "deg"
    );
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".clock").forEach((clock) => startclock(clock));
});