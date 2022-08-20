import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "../../Style/App.css";

export default function Resource() {
    const [resourceType, setResourceType] = useState('Posts')
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])
    return (
        <>
            <div className="Resource" >

                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                    onClick={() => setResourceType('Posts')}
                >
                    Posts
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: "10px" }}
                    onClick={() => setResourceType('Comments')}
                >
                    Comments
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    onClick={() => setResourceType('Users')}

                >
                    Users
                </Button>


            </div>
            <h1>{resourceType}</h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    );
}
