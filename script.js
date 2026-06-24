// Ustawienie sceny
const scene = new THREE.Scene();

// Ustawienie kamery
const camera = new THREE.PerspectiveCamera(60, 4800 / 900, 0.1, 1000);
camera.position.set(0, 0, 0);

// Ustawienie renderera
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ustawienie sfery do wyświetlania zdjęcia 360
const geometry = new THREE.SphereGeometry(5, 32, 32);
const texture = new THREE.TextureLoader().load('GLUDGAE_UR-L_B49-0_1.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Zdefiniowanie zmiennej do przechowywania czasu ostatniej klatki
let lastFrameTime = 0;

// Funkcja renderująca scenę
function animate(currentTime) {
    requestAnimationFrame(animate);

    // Obliczanie czasu, który minął od ostatniej klatki
    const deltaTime = currentTime - lastFrameTime;
    lastFrameTime = currentTime;

    rotateLeft(deltaTime);
    renderer.render(scene, camera);
}

// Funkcja obracająca scenę w lewo z uwzględnieniem czasu
function rotateLeft(deltaTime) {
    const rotationSpeed = 0.0000005; // Ustal prędkość obrotu
    sphere.rotation.y += rotationSpeed * deltaTime;
}

// Uruchomienie animacji
animate(0);
