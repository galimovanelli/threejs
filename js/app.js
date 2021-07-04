const scene = new THREE.Scene();

        scene.background = new THREE.Color("#302835");
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('threejs').appendChild(renderer.domElement);

        const material = new THREE.MeshNormalMaterial();
        const material2 = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: "#22b8c1"
        });
        const material3 = new THREE.MeshLambertMaterial({
            color: "#22b8c1",
            emissive: 0x111111,
        });
        const material4 = new THREE.MeshPhongMaterial({
            color: "#22b8c1",
            emissive: 0x000000,
            specular: 0xbcbcbc,
        });
      
        const geometry = new THREE.BoxGeometry(20, 20, 20); 
        const geometry2 = new THREE.SphereGeometry(15, 64, 64); 
        const geometry3 = new THREE.ConeBufferGeometry(10, 40, 32); 
        const geometry4 = new THREE.TorusKnotGeometry(10, 1.3, 500, 6, 6, 20);      
        const geometry5 = new THREE.CylinderGeometry(6, 6, 25, 32); 
        const geometry6 = new THREE.TorusGeometry( 10, 3, 16, 100 ); 
        const geometry7 = new THREE.DodecahedronGeometry(15, 0);
        const mesh = new THREE.Mesh(geometry, material); 
        const sphere = new THREE.Mesh(geometry2, material); 
        const cone = new THREE.Mesh(geometry3, material); 
        const torus = new THREE.Mesh(geometry4, material); 
        
        const cylinder = new THREE.Mesh(geometry5, material); 
        const tor = new THREE.Mesh(geometry6, material); 
        const dod = new THREE.Mesh(geometry7, material); 

        mesh.scale.x = 0.1;
        mesh.scale.y = 0.1;
        mesh.scale.z = 0.1;

        sphere.scale.x = 0.1;
        sphere.scale.y = 0.1;
        sphere.scale.z = 0.1;

        cone.scale.x = 0.1;
        cone.scale.y = 0.1;
        cone.scale.z = 0.1;

        torus.scale.x = 0.1;
        torus.scale.y = 0.1;
        torus.scale.z = 0.1;      
 
        cylinder.scale.x = 0.1;
        cylinder.scale.y = 0.1;
        cylinder.scale.z = 0.1;

        tor.scale.x = 0.1;
        tor.scale.y = 0.1;
        tor.scale.z = 0.1;

        dod.scale.x = 0.1;
        dod.scale.y = 0.1;
        dod.scale.z = 0.1;

        const addF = function (m) {
            while (scene.children.length > 0) { 
                scene.remove(scene.children[0]);
            }
            scene.add(m);
        }

        camera.position.z = 5;

        const frontSpot = new THREE.SpotLight(0xeeeece);
        
        frontSpot.position.set(1000, 1000, 1000);
        scene.add(frontSpot);

        const frontSpot2 = new THREE.SpotLight(0xddddce);
        frontSpot2.position.set(-500, -500, -500);
        scene.add(frontSpot2);

        const animate = function () {
            requestAnimationFrame(animate);
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
            mesh.rotation.z += 0.01;

            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            sphere.rotation.z += 0.01;

            cone.rotation.x += 0.01;
            cone.rotation.y += 0.01;
            cone.rotation.z += 0.01;

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01;
            torus.rotation.z += 0.01;

            cylinder.rotation.x += 0.01;
            cylinder.rotation.y += 0.01;
            cylinder.rotation.z += 0.01;

            tor.rotation.x += 0.01;
            tor.rotation.y += 0.01;
            tor.rotation.z += 0.01;

            dod.rotation.x += 0.01;
            dod.rotation.y += 0.01;
            dod.rotation.z += 0.01;

            renderer.render(scene, camera);
        };

        animate();