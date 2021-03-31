import { useEffect, useState } from "react";
import { getData } from "../utils/api"
import Header from "./Header";
import Cards from "./Cards";

const HomePage = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        getData().then( result => {
            if(result === -1) {
                console.log("Failure");
            }
            else {
                console.log(result.data);
                setData( result.data.map( value => {
                    return {
                        productName: value.product_name,
                        manufacturer: value.manufacturer,
                        audio: value.audio,
                        price: 499,
                        processor: value.processor,
                        os: value.os
                    }
                }))
            }
        })
    }, []);
    console.log(data);
    return (
        <div>
            <Header />
            <Cards data={data}/>
        </div>
    )
}

export default HomePage;