import Render from './Render.js';

var scene = new Render();

export default class Terrain {
  constructor() {

  }
  generate(x1, y1, z1, x2, y2, z2) {
    var x = x1, y = y1, z = z1;
    while(y1 <= y2) {
     while(x1 <= x2) {
       while(z1 <= z2) {
         scene.addCube(x1, y1, z1);
         z1 += 1;
       }
       z1 = z;
       x1 += 1;
     }
     x1 = x;
     y1 += 1;
   }
  }
}
