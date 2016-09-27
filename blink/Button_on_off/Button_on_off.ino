
int red = 13;
int yellow = 12;
int green = 11;

void setup(){
pinMode(red,OUTPUT);
pinMode(yellow,OUTPUT);
pinMode(green,OUTPUT);
}

//When you first begin programming, the code itself is very rudimentary – it’s figuring out the minute logic details that presents the biggest problem. The key to being a good programmer is to be able to look at any process, and break it down into its fundamental steps.

void loop(){
changeLights();
delay(15000);
}

void changeLights(){
// green off, yellow for 3 seconds
digitalWrite(green,HIGH);
digitalWrite(yellow,LOW);
delay(3000);

// turn off yellow, then turn red on for 5 seconds
digitalWrite(yellow,LOW);
digitalWrite(red,HIGH);
delay(5000);

// red and yellow on for 2 seconds (red is already on though)
digitalWrite(yellow,HIGH);
delay(2000);

// turn off red and yellow, then turn on green
digitalWrite(yellow,LOW);
digitalWrite(red,LOW);
digitalWrite(green,HIGH);
}
