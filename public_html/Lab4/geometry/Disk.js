/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Disk(num_divisions){ //num division determines resolution and number of triangles
    
    //var num_divisions = 8; //triangles
    this.name = "Disk";
    this.numVertices = num_divisions*3;
    this.numTriangles = num_divisions;
    this.colors = [];
    this.vertices = [];
    
     // Local variables: unique vertices and colors.
    ////////////////////////////////////////////////////////////
    
    var center_vertex = vec4(0, 0, 0, 1); //offset from center, default 0

    var outside_vertices = [];
       
    //put vertices in a their location
    for(var i=0; i<num_divisions;i++){
        var percentage = (2*Math.PI *i)/num_divisions;
        var newpoint = vec4(Math.cos(percentage), 0, Math.sin(percentage));
        outside_vertices[i] = newpoint;
    }

    var color = vec4(0.0, 0.0, 1.0, 1.0); // blue
    
    //color in triangles
    for (var i = 0; i < num_divisions; i++) {
        p1 = center_vertex;
        p2 = outside_vertices[i];
        p3 = outside_vertices[(i+1) % num_divisions];
        
        this.vertices.push(p1, p2, p3);
        
        this.colors.push(color, color, color);
    }
}
