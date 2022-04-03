import * as C from './styles'
import {useEffect, useState} from "react";

export const Header = () => {
    const [data, setData] = useState(0);

    const getData = () => {
        fetch('https://free.currconv.com/api/v7/convert?q=USD_PKR&compact=ultra&apiKey=2de3ebe521651a795386', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson.USD_PKR);
                setData(myJson.USD_PKR)
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <C.Container>
            <h1 style={{textAlign: "center"}}>How much VAT will you pay?</h1>
            <p style={{textAlign: "center"}}>The simple calculator to get an idea how much Tax you'll pay when
                importing items to Pakistan.</p>
            {data !== 0 ?
                <p style={{textAlign: "center"}}>1 US Dollar (USD) = {data.toFixed(2)} Pakistan Rupee (PKR)</p> :
                <div/>}
        </C.Container>
    )
}
