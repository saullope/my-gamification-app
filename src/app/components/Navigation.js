import Link from "next/link";

export default function Navigation(){

    const routes = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Drag and drop",
            path: "/drag-and-drop",
        },
        {
            name: "Forms",
            path: "/forms",
        }
    ];

    return (
        <div className="container-fluid">
            <p className="display-6">
                Modulos Gamificados
            </p>
            <nav>
            <ul>
              { routes.map((route) => (
                <li className="link-opacity-100" key={route.path} >
                    <Link href={route.path}>
                        {route.name}
                    </Link>
                </li>
              )) }
            </ul>
            </nav>
        </div>
    );
}