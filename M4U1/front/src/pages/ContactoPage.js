import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder Contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <input type="text" name=""/>
                    </p>
                    <p class="acciones"><input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>

            <div class="datos">
                <h2>Otras vías de Comunicación</h2>
                <p>También podés contactarte con nosotros a través de los siguientes medios:</p>
                <ul>
                    <li>Teléfono: 1123067957</li>
                    <li>Email: minipindoindumentaria@gmail.com</li>
                    <li>Facebook: Mini Pindó</li>
                    <li>Instagram: mini_pindo</li>
                    
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;