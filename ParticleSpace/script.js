const scene = new THREE.Scene()
scene.background = new THREE.Color(0x223646);

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
camera.position.z = 2


const renderer = new THREE.WebGLRenderer()
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

document.body.appendChild(renderer.domElement)








// Torus
const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);

const material = new THREE.PointsMaterial(
    { size: 0.005 }
)

const torus = new THREE.Points(geometry, material)









// Particles
const particlesGeometry = new THREE.BufferGeometry()
const particlesCount = 5000;

const positionArray = new Float32Array(particlesCount * 3)
// create float 32 array, provides x/y/z coordinates for particles

for (let i = 0; i < particlesCount * 3; i++) {
    // positionArray[i] = (Math.random() - 0.5) * 4
    positionArray[i] = (Math.random() - 0.5) * (Math.random() * 5)
    // i = x, y, or z
    // -0.5 gets to center of screen
    // * disperses
}
// create positions for particles


particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))
// set position attribute of each particle to positionArray, and pass in 3
// assign position for geometry for all 5000 particles


const particlesMaterial = new THREE.PointsMaterial(
    {
        size: 0.005,
        color: 0xFF74AF
    }
)

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)



scene.add(torus, particlesMesh)








// Mouse
document.addEventListener('mousemove', animateParticles)

let mouseX = 0
let mouseY = 0

function animateParticles(event) {
    mouseX = event.clientX
    mouseY = event.clientY
}
// get mouse movement












const clock = new THREE.Clock()


// Animate
function animate() {
    
    const elapsedTime = clock.getElapsedTime()
    
    torus.rotation.y = -0.5 * elapsedTime
    particlesMesh.rotation.x += 0.001
  
  
        if (mouseX > 0) {
        particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008)
        particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008)

    }
  
  
    requestAnimationFrame(animate);

    renderer.render(scene, camera)
}
animate()