

import processing.serial.*;

import cc.arduino.*;

Arduino arduino;

color off = color(4, 79, 111);
color on = color(84, 145, 158);

void setup() {
  size(470, 280);

  println(Arduino.list());

  arduino = new Arduino(this, Arduino.list()[1], 57600);
  

  for (int i = 0; i <= 13; i++)
    arduino.pinMode(i, Arduino.INPUT);
}

void draw() {
  background(off);
  stroke(on);

  noFill();
  for (int i = 0; i <= 0; i++) {
    ellipse(235 + i * 80, 140, arduino.analogRead(i) / 10, arduino.analogRead(i) / 10);
    ellipse(255 + i * 20, 130, arduino.analogRead(i) / 45, arduino.analogRead(i) / 45);
    ellipse(215 + i * 20, 130, arduino.analogRead(i) / 45, arduino.analogRead(i) / 45);
    arc(230, 155, 40, 40, 0, HALF_PI);
    strokeWeight(5);
    ellipseMode(CENTER);
  }
}