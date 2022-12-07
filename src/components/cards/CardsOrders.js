import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function CardsOrders(){

    const [cardTotalOrders, setCardTotalOrders] = useState({
        color:   "primary",
        titulo: "Total $",
        valor: 0,
        icono: "fas fa-gifts",
    });
    const [cardOrdersInDataBase, setCardOrdersInDataBase] = useState({
        color:   "success",
        titulo: "Quantity orders",
        valor: 0,
        icono: "fas fa-user",
    });
    const [cardAverageOrder, setCardAverageOrder] = useState({
        color:   "warning",
        titulo: "Average Order",
        valor: 0,
        icono: "fas fa-book",
    });

    useEffect(() => {
        updateCards();
    },[]);

    function apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    function updateCards(){
        apiCall("http://localhost:3001/api/orders", showDataOrders);
    }

    function showDataOrders(data){
        let total = data.data.reduce(
            (acum, order) => (acum+= Number(order.total)),
            0
        );

        let totalF = new Intl.NumberFormat().format(total)
        let average = new Intl.NumberFormat().format((total/data.meta.totalOrders).toFixed(1))

        setCardTotalOrders({
            color:   "primary",
            titulo: "Total $",
            valor: "$ " + totalF,
            icono: "fas fa-search-dollar",
        });
        setCardOrdersInDataBase({
            color:   "success",
            titulo: "Quantity orders",
            valor: data.meta.totalOrders,
            icono: "fas fa-book",
        });
        setCardAverageOrder({
            color:   "warning",
            titulo: "Average Order",
            valor: "$ " + average,
            icono: "fas fa-ticket-alt",
        })
    }

    return(
        <div className="row">
            {
                [cardTotalOrders,cardOrdersInDataBase,cardAverageOrder].map((card,index)=>{
                    return <SmallCard  {...card}  key= {index}/>
                })
            }      
        </div>
    )
}

export default CardsOrders;