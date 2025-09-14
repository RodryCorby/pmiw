//Rodrigo Corbani
        let Fotubi;
        let puntoColor, lineaColor, fondoColor;
        let animarPuntos = false;
        let Anterior = false;
        function setup() {
            createCanvas(800, 400);
            Fotubi = loadImage("F_7.jpeg");
            puntoColor = color(255);
            lineaColor = color(128);
            fondoColor = color(0);
        }

        function draw() {
            background(255);
            image(Fotubi, 0, 0, 400, 400);
            
            // Cambiar colores con el mouse
            if (mouseIsPressed) {
                if (mouseButton === LEFT) {
                    fondoColor = color(random(255), random(255), random(255));
                } else if (mouseButton === RIGHT) {
                    puntoColor = color(random(128, 255), random(128, 255), random(128, 255));
                }
            }
            
            // Activar y desactivar la animación de los puntos
            if (keyIsPressed && key === 'v' && !Anterior) {
                animarPuntos = !animarPuntos;
                Anterior = true;
            } else if (!keyIsPressed || key !== 'v') {
                Anterior = false;
            }
            
            // Teclas para cambiar colores y reiniciar
            if (keyIsPressed) {
                if (key === ' ') {
                    lineaColor = color(random(128, 255), random(128, 255), random(128, 255));
                } else if (key === 'r') {
                    puntoColor = color(255);
                    lineaColor = color(128);
                    fondoColor = color(0);
                    animarPuntos = false;
                }
            }
            
            // Fondo lado derecho
            fill(fondoColor);
            noStroke();
            rect(400, 0, 400, 400);
            
            let cols = 8;
            let rows = 8;
            let spacing = 50;
            
            for (let i = 0; i <= cols; i++) {
                for (let j = 0; j <= rows; j++) {
                    let x = 400 + i * spacing;
                    let y = j * spacing;
                    
                    // Líneas
                    if (j === 0) {
                        stroke(lineaColor);
                        strokeWeight(10);
                        line(x, 0, x, 400);
                    }
                    if (i === 0) {
                        stroke(lineaColor);
                        strokeWeight(10);
                        line(400, y, 800, y);
                    }
                    
                    // Puntos
                    noStroke();
                    let tam = 10;
                    if (animarPuntos) {
                        tam = CalcularTamañoDePuntos(x, y);
                    }
                    fill(puntoColor);
                    ellipse(x, y, tam, tam);
                }
            }
        }

        // Función que retorna un valor
        function CalcularTamañoDePuntos(x, y) {
            let d = dist(x, y, 600, 200);  // distancia al centro
            let angulo = d * 0.05 + frameCount * 0.05;
            return map(sin(angulo), -1, 1, 5, 12);
        }

        // Función que no retorna valor
        function dibujarLineaSinValorKjjjj(x1, y1, x2, y2) {
            strokeWeight(2);
            stroke(255, 100, 100);
            line(x1, y1, x2, y2);
        }
