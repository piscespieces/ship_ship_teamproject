document.addEventListener("turbolinks:load", enableCube)


document.addEventListener("turbolinks:load", function(){
  const nextButton = document.getElementById('next')
  if(nextButton) {
    document.getElementById('next').addEventListener('click', function(){
      const width = parseInt(document.getElementById('inp-width').value)
      const height = parseInt(document.getElementById('inp-height').value)
      const length = parseInt(document.getElementById('inp-length').value)
      const weight = parseInt(document.getElementById("inp-weight").value)
      window.location.href = `/shipments/new?width=${width}&height=${height}&length=${length}&weight=${weight}`
    })
  }
})


function enableCube(){
    let widthEl = document.getElementById('inp-width') + 16
    let heightEl = document.getElementById('inp-height') + 16
    let lengthEl = document.getElementById('inp-length') + 16

    if(widthEl && heightEl && lengthEl){


    // revolutions per second
    let angularSpeed = 0.03;
    let lastTime = 0;
    let cube = null;

    // this function is executed on each animation frame
    function animate() {
        // update
        let time = (new Date()).getTime();
        let timeDiff = time - lastTime;
        let angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
        cube.rotation.y += angleChange;
        lastTime = time;

        // render
        renderer.render(scene, camera);

        // request new frame
        requestAnimationFrame(function () {
            animate();
        });
    }

    // renderer
    let container = document.getElementById("new-shipment-cube");
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // camera
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 300;

    // scene
    let scene = new THREE.Scene();

    // cube
    cube = new THREE.Mesh(new THREE.CubeGeometry(4, 4, 4),
    new THREE.MeshLambertMaterial({
        color:'#e6f8ff' 
    })
    );
    cube.overdraw = true;
    cube.rotation.x = Math.PI * 0.1;
    cube.rotation.y = Math.PI * 0.3;
    scene.add(cube);

    // add subtle ambient lighting
    let ambientLight = new THREE.AmbientLight(0x444444);
    scene.add(ambientLight);

    // directional lighting
    let directionalLight = new THREE.DirectionalLight(0x888888);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // start animation
    animate();
    cube.scale.x = 16
    cube.scale.y = 16
    cube.scale.z = 16 

    oninput= function() {
    let width = parseInt(document.getElementById('inp-width').value)
    let height = parseInt(document.getElementById('inp-height').value)
    let length = parseInt(document.getElementById('inp-length').value)

    cube.scale.x = length;
    cube.scale.y = height;
    cube.scale.z = width;

};

const rangeH = document.getElementById("inp-height")
const fieldH = document.getElementById("numberH")
  rangeH.addEventListener('input', function (e) {
    fieldH.value = e.target.value
  })
  fieldH.addEventListener('input', function (e) {
    rangeH.value = e.target.value
  })

const rangeL = document.getElementById("inp-length")
const fieldL = document.getElementById("numberL")
  rangeL.addEventListener('input', function (e) {
    fieldL.value = e.target.value
  })
  fieldL.addEventListener('input', function (e) {
    rangeL.value = e.target.value
  })

const rangeW = document.getElementById("inp-width")
const fieldW = document.getElementById("numberW")
  rangeW.addEventListener('input', function (e) {
    fieldW.value = e.target.value
  })
  fieldW.addEventListener('input', function (e) {
    rangeW.value = e.target.value
  })

let rangeO = document.getElementById("inp-weight")
let fieldO = document.getElementById("numberWeight")
  rangeO.addEventListener('input', function (e) {
    fieldO.value = e.target.value
  })
  fieldO.addEventListener('input', function (e) {
    rangeO.value = e.target.value
  })
 }
}
