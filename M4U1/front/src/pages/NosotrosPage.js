import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p> Hola!!! Somos Meli y Raul. Papás de Tomás y Catalina. Inspiración de nuestro emprendimiento. </p>

                <p> Creamos Mini Pindó con la ilusión de poder tener la libertad de poder estar presentes en cada etapa de nuestros hijos. Verlos crecer a ellos, es ver crecer nuestro sueño emprendedor.</p>

                <p>Somos usuarios de ropa para chicos hace 10 años, cuando nació Tomás. De ahí surgió nuestra necesidad de encontrar ropa de calidad, con buen diseño y cómoda para ellos. Acompañamos familias e infancias en su crecimiento.</p>

                <p>Pensamos, planeamos, diseñamos y fabricamos cada producto como si fuera para nuestros hijos. Con la dedicación y detalle que cada artículo merece.</p>

                <p>Atravesamos una montaña rusa de emociones desde que estamos en el rubro hace 4 años. Las crisis siempre fueron una oportunidad para reinventarse. Lo que en su momento empezó con algunos metros de tela, hoy podemos decir orgullosos que crecemos dia a día, con más de 1000 pedidos mayoristas en lo que va del último año. </p>

                <p>Te invitamos a formar parte de nuestra familia, la familia de Mini Pindó. </p>

                </div>
                <div className="staff">
                    <h2>Staff</h2>
                    <div className="personas">
                        <div className="persona">
                            <img src="images/nosotros1.jpg" width={200} alt="Nosotros"/>
                            <h5>Juan Gomez</h5>
                            <h6>Puesto</h6>
                            <p>Lorem</p>
                        </div>
                    </div>
                </div>
        </main>
    );
}

export default NosotrosPage;