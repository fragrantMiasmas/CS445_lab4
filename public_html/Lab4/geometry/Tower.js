
function Tower(num_sides){
    this.name = "Tower";
    this.vertices = num_sides *18; //cylinder + cone
    this.numTriangles = num_sides * 6;
    this.towerWidth = 2;
    this.baseHeight = 7;
    this.roofSteep = 2;
}
Tower.prototype.drawTower = function(){
    //more here
    stack.push();
    this.drawBase();
    this.drawRoof();
    stack.pop();
}
Tower.prototype.drawRoof = function(){
    stack.push();
    stack.multiply(translate(0,9.5,0));
    stack.multiply(scalem(this.towerWidth,this.roofSteep,this.towerWidth));
    gl.uniformMatrix4fv(uModel_view, false, flatten(stack.top()));
    gl.uniform4fv(uColor, vec4(1.0,0,0,1.0));
    Shapes.drawPrimitive(Shapes.cone);
    stack.pop();
}

Tower.prototype.drawBase = function(){
    stack.push();
    stack.multiply(translate(0,6,0));
    stack.multiply(scalem(this.towerWidth,this.baseHeight,this.towerWidth));
    gl.uniformMatrix4fv(uModel_view, false, flatten(stack.top()));
    gl.uniform4fv(uColor, vec4(1.0,1,0,1.0));
    Shapes.drawPrimitive(Shapes.cylinder);
    stack.pop()
}