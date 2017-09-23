
//help anthony

function Tank(){
    this.name = "tank";
    this.tankWidth = 2.5;
    this.tankHeight= 0.5;
    this.tankLength =5;
    this.wheelRadius = 1;
    this.wheelThick = .2;
    
    this.wAngle = 0;
    this.incAngle = 4.0;
    
}

Tank.prototype.drawTank = function() {
    stack.push();
    var xLoc = 2*Math.PI * this.wAngle/360.;
    stack.multiply(translate(xLoc,0,0)); //moos tank body forward/backward
    stack.multiply(translate(0,this.wheelRadius,0)); //moves tank wheels forward/backward
    this.drawBody(); //tank body centered at origin
    this.drawWheels(); //tank wheels centered at their origin
    this.drawTurret(); //centers Turret at its origin
    this.drawBarrel(); //centers barrel at its origin
    stack.pop();
};

Tank.prototype.drawTurret = function(){
    stack.push();
    Shapes.drawPrimitive(Shapes.cube);
    stack.pop();
    
}

Tank.prototype.drawBarrel = function(){
    //hehe fish in a barrel
    stack.push();
    Shapes.drawPrimitive(Shapes.cylinder);
    stack.multiply(translate(.5))
    stack.pop();
    
}

Tank.prototype.drawWheel = function(){
    stack.push();
    //rotates around x axis so wheel turns with body of everything
    Shapes.drawPrimitive(Shapes.disk);
    stack.pop();
}
Tank.prototype.drawWheels = function(){
    stack.push();
    stack.multiply(translate(.75*this.tankLength/2,0,this.tankWidth/2));
    this.drawWheel();
    stack.pop();
    
    stack.push();
    stack.multiply(translate(-.75*this.tankLength/2,0,this.tankWidth/2));
    this.drawWheel();
    stack.pop();
    
    stack.push();
    stack.multiply(translate(.75*this.tankLength/2,0,-this.tankWidth/2));
    this.drawWheel();
    stack.pop();
    
    stack.push();
    stack.multiply(translate(-.75*this.tankLength/2,0,-this.tankWidth/2));
    this.drawWheel();
    stack.pop();
};

Tank.prototype.drawBody = function() {
    stack.push();
    stack.multiply(translate(0,this.carHeight/2,0));
    stack.multiply(scalem(this.tankLength,this.tankHeight,this.tankWidth));
    stack.multiply(scalem(.5,.5,.5));
    gl.uniformMatrix4fv(uModel_view,false,flatten(stack.top()));
    gl.uniform4fv(uColor,vec4(0.0, 1.0, 0.0, 1.0));
    Shapes.drawPrimitive(Shapes.cube);
    stack.pop();
    
    stack.push();
    stack.multiply(translate(0,this.tankHeight,0));
    stack.multiply(scalem(this.tankLength/3, this.tankHeight,this.tankWidth));
    stack.multiply(scalem(1,1,.5));
    gl.uniformMatrix4fv(uModel_view, false, flatten(stack.top()));
    gl.uniform4fv(uColor, vec4(0.0,1.0,0.0,1.0));
    Shapes.drawPrimitive(Shapes.cube);
    stack.pop();
};
