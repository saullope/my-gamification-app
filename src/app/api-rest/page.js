"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import UserChart from "../components/UserChart";
import SqueletonPorfile from "../components/SqueletonPorfile";

export default function ApiRest() {
  const [ident, setIdent] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    // random number between 1 and 10
    const number = Math.floor(Math.random() * 10) + 1;
    setIdent(number);
  };

  const consumirApi = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users/?id=${ident}`;
      const res = await fetch(url);
      const repo = await res.json();
      setData(repo);
      setLoading(true);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consumirApi();
  }, [ident]);

  if (!loading) {
    return (
      <div className="container-fluid">
        <div className="container mb-3 p-3">
          <h1>
            <span className="placeholder col-6 placeholder-lg"></span>
          </h1>
        </div>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col">
              <SqueletonPorfile />
            </div>
            <a className="btn btn-success disabled placeholder col-12"></a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <div className="container mb-3 p-3">
          <h1>Random User API</h1>
        </div>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col">
              {data &&
                data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        console.log(item.username);
                      }}
                    >
                      <UserChart
                        id={item.id}
                        name={item.name}
                        email={item.email}
                        username={item.username}
                        city={item.address.city}
                      />
                      <div className="p-1">
                        <Link
                          href={`/api-rest/${item.id}`}>
                          <button className="btn btn-success">
                            <i className="bi bi-eye">View</i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
            <button className="btn btn-success" onClick={handleClick}>
              Random
            </button>
          </div>
        </div>
      </div>
    );
  }
}
