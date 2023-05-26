import Link from "next/link";

export default function Navigation(){

    const routes = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Drag and drop (arrastrar y soltar)",
            path: "/drag-and-drop"
        },
        {
            name: "Generacion de formularios dinamicos (pendiente)",
            path: "/forms"
        },
        {
            name: "Consumiendo api rest (en progreso)",
            path: "/api-rest"
        }
    ];

    return (
        <div className="container-fluid">
            <p className="display-6">
                Modulos Gamificados
            </p>
            <nav>
            <ul>
              { routes.map((route, index) => (
                <li className="link-opacity-100" key={index} >
                    <Link href={route.path}>
                        {route.name}
                    </Link>
                </li>
              )) }
            </ul>
            </nav>
            <p> Desarrollo de funcionalidades para su posterior uso. Desarrollado por Alexandra Acevedo / Saul Lopez </p>
            <a href="https://github.com/saullope/my-gamification-app.git" target="_blank" >Enlace al repositorio de GitHub</a>
        </div>
    );
}