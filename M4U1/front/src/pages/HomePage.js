import React from "react";

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/sombrero.jpg" width={300} alt="sombrero" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem</p>
                    <p>Lorem</p>
                </div>
                <div className="testimonios">
                <h2>Las clientas dicen...</h2>
                <div class="testimonio">
                    <span class="cita">La calidad de las prendas es inigualable.</span>
                    <span class="autor">Guillermina (Salto, Buenos Aires)</span>
                </div>
                <div class="testimonio">
                    <span class="cita">Me llegó todo perfecto y súper rápido.</span>
                    <span class="autor">Gabriela (Cafayate, Salta)</span>
                </div>
                <div class="testimonio">
                    <span class="cita">Meli, mis clientas se quedaron enloquecidas! Voy a tener que volver a hacerte un pedido mayorista!.</span>
                    <span class="autor">Juana (Tucumán)</span>
                </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;