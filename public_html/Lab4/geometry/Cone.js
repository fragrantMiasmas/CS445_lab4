/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Cone(num_sides, height){ //num division determines resolution and number of triangles

    this.name = "Cone";
    this.numVertices = num_sides*6;
    this.numTriangles = num_sides *2;
    this.colors = [];
    this.vertices = [];
    
     // Local variables: unique vertices and colors.
    ////////////////////////////////////////////////////////////
    
    var top_vertex = vec4(0, height, 0, 1); //offset of 0 makes a flat disk
    var outside_vertices = [];
    
    var bottom_center_vertex = vec4(0, 0, 0, 1); //bottom
    var bottom_vertices = [];
    
    var color1 = vec4(0.0, 1.0, 0.0, 1.0); 
    var color2= vec4(1.0, 0.0, 0.0, 1.0);
    var color3 = vec4(0.0, 1.0, 1.0, 1.0);
       
    //put vertices in a their location
    for(var i=0; i<num_sides;i++){
        var percentage = (2*Math.PI *i)/num_sides;
        var newpoint = vec4(Math.cos(percentage), 0, Math.sin(percentage));
        outside_vertices[i] = newpoint;
        bottom_vertices[i] = newpoint; //bottom portion
    }
    
    //rendering
    for (var i = 0; i < num_sides; i++) {
        
        //fill in cone portion
        p1 = top_vertex;
        p2 = outside_vertices[i];
        p3 = outside_vertices[(i+1) % num_sides];
        
        //fill out the bottom
        p4 = bottom_center_vertex;
        p5 = bottom_vertices[i];
        p6 = bottom_vertices[(i+1) % num_sides];
        
        this.vertices.push(p1, p2, p3, p4, p5, p6);
        
        this.colors.push(color1, color2, color3,color1, color2, color3);
    }
}
