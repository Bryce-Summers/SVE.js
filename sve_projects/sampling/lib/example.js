// Generated by CoffeeScript 1.11.1

/*
Example Project that draws dots on the screen.

Written by Bryce Summers on 12 - 30 - 2016.
 */

(function() {
  var Example;

  Example = (function() {
    function Example() {
      var circle, color_hex, h, i, j, mesh_factory, w;
      mesh_factory = CORE.style.unit_meshes;
      color_hex    = CORE.style.c_fill;
      
      renderer.setClearColor(new THREE.Color(0xffffff))
      root_scene.background = new THREE.Color(0xffffff)

      w = dim.w;
      h = dim.h;
      for (i = j = 0; j < 100; i = ++j) {
        circle = mesh_factory.newCircle({
          color: color_hex
        });
        circle.position.x = Math.random() * w;
        circle.position.y = Math.random() * h;
        circle.scale.x = 10;
        circle.scale.y = 10;
        root_scene.add(circle);
      }
    }

    return Example;

  })();

  new Example();

}).call(this);
