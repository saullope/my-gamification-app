import Link from "next/link"

export default function UserChart( { id, name, username, email, city, onClick } ){

    return (
        <div className="col">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h2 className="fw-normal"> { `${name} (${username})` } </h2>
        <p>{ email }</p>
        <p>{ city }</p>
      </div>
    )
}