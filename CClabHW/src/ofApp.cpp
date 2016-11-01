#include "ofApp.h"


//--------------------------------------------------------------
void ofApp::setup(){
 thriller.load("thriller.mp3");
 thriller.setVolume(.5);
 thriller.play();
 thriller.setSpeed(1.2);
    
    
 thunder.load("thunder.mp3");
 thunder.setVolume(4.5);
// thunder.play();

happy.load("happy.mp3");
happy.setVolume(9.5);
//happy.play();
    
chainsaw.load("chainsaw.wav");
chainsaw.setVolume(4.5);
// chainsaw.play();




 
    
    

}




//--------------------------------------------------------------
void ofApp::update(){

    

}

//--------------------------------------------------------------
void ofApp::draw(){
    
    
    ofSetColor(11, 79, 11);
    ofFill();
    ofDrawRectangle(0, 600,1024,200);
    
    ofSetBackgroundColor(0, 0, 0);
    
    ofSetColor(193, 126, 19);
    witch.draw(ofGetMouseX(), ofGetMouseY(), 100, 100);
    text.draw(300, 10, 400, 400);
    pumpkin2.draw(600, 500, 200, 200);
    
   

   

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
    switch (key) {
        case 'a':
            thunder.play();
            break;
    
        case
            's':
        chainsaw.play();
        break;
            
        case 'd':
            happy.play();
            break;
    }

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){
    switch (key) {
        case 'z':
            thunder.stop();
            break;
    
        case 'x':
            chainsaw.stop();
        break;
        case 'c':
            happy.stop();
            break;
}

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){
    
    
    
}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
    
    ofSetRectMode(OF_RECTMODE_CENTER);
    pumpkin2.load("pumpkin.gif");
    ofSetRectMode(OF_RECTMODE_CORNER);
    witch.load("witch.png");
    text.load("text.png");
    
    ofLog()<< "Happy Halloween from Nerdshollow. Use the a (z to stop), s (x to stop), d (c to stop) keys to play different spooky sounds.";
    

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
    
    
}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
