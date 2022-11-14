import { ReactDOM } from "react";
import React, { useState, useEffect } from "react";
function SearchComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [val, setVal] = useState("");
    const [searchParam] = useState(["status", "details", "capsule_serial"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    useEffect(() => {
        fetch(
            "https://api.spacexdata.com/v3/capsules"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const data = Object.values(items);

    function search(items) {
        return items.filter((item) => {
            if (item.status == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString() 
                            .toLowerCase()
                            .indexOf(val.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(val.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    if (error) {
        return (
            <p>
                Error
            </p>
        );
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
            <div className="wrapper">

                <div className="search-wrapper">
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search for..."
                            value={val}
                            onChange={(e) => setVal(e.target.value)}
                        />
                        
                        Search
                    </label>

                    <div className="select">
                        <select
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select"
                            aria-label="Capsule Serial"
                        >
                            <option value="All">Filter By Region</option>
                            <option value="unknown">Unknown</option>
                            <option value="active">Active</option>
                        </select>
                        <span className="focus"></span>
                    </div>
                </div>
                <ul className="card-grid">
                    {search(data).map((item, index) => (
                        <li>
                            <article className="card" key={index}>

                                <div className="card-content">
                                    {
                                        item.missions.map((sitem) => (
                                            <h2 className="card-name">{sitem.name}</h2>
                                        ))
                                    }

                                    <ol className="card-list">
                                        <li>
                                            Status:{" "}
                                            <span>{item.status}</span>
                                        </li>
                                        <li>
                                            Details: <span>{item.details}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default SearchComponent;