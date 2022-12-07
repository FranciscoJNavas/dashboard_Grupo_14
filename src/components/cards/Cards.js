import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

// let cardProductsInDataBase = {
//     color:   "primary",
//     titulo: "Total products",
//     valor: 0,
//     icono: "fas fa-film",
// };

// let cardUsersInDataBase = {
//     color:   "success",
//     titulo: "Total users",
//     valor: 0,
//     icono: "fas fa-award",
// };

// let cardCategoriesInDataBase = {
//     color:   "warning",
//     titulo: "Total categories",
//     valor: 0,
//     icono: "fas fa-user",
// };

// let cardProps = [cardProductsInDataBase,cardUsersInDataBase,cardCategoriesInDataBase];

function Cards(){

    // const [productsValue, setProductsValue] = useState(23);
    // const [usersValue, setUsersValue] = useState(45);
    // const [categoriesValue, setCategoriesValue] = useState(9);
    const [cardProductsInDataBase, setCardProductsInDataBase] = useState({
        color:   "primary",
        titulo: "Total products",
        valor: 0,
        icono: "fas fa-gifts",
    });
    const [cardUsersInDataBase, setCardUsersInDataBase] = useState({
        color:   "success",
        titulo: "Total users",
        valor: 0,
        icono: "fas fa-user",
    });
    const [cardCategoriesInDataBase, setCardCategoriesInDataBase] = useState({
        color:   "warning",
        titulo: "Total categories",
        valor: 0,
        icono: "fas fa-book",
    });

    useEffect(() => {
        console.log("Me monte");
        updateCards();
    },[]);

    function apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    function updateCards(){
        apiCall("http://localhost:3001/api/products", showProductsAndCategories);
        apiCall("http://localhost:3001/api/users", showUsers)
    }

    function showProductsAndCategories(data){
        console.log("Por setear products y categories", data.meta.total , data.meta.totalCategories)
        // setProductsValue(data.meta.total);
        // setCategoriesValue(data.meta.totalCategories);
        // cardProps[0].valor = productsValue;
        // cardProps[2].valor = categoriesValue;
        setCardProductsInDataBase({
            color:   "primary",
            titulo: "Total products",
            valor: data.meta.total,
            icono: "fas fa-gifts",
        });
        setCardCategoriesInDataBase({
            color:   "warning",
            titulo: "Total categories",
            valor: data.meta.totalCategories,
            icono: "fas fa-book",
        })
    }

    function showUsers(data){
        console.log("Por setear users", data.count)
        // setUsersValue(data.count);
        // cardProps[1].valor = usersValue;
        setCardUsersInDataBase({
            color:   "success",
            titulo: "Total users",
            valor: data.count,
            icono: "fas fa-user",
        })
    }

    // let setValues = () => {
    //     console.log("En set");  
    //     // cardProps[cardProductsInDataBase].valor = productsValue;
    //     // cardProps[cardUsersInDataBase].valor = usersValue;
    //     // cardProps[cardCategoriesInDataBase].valor = categoriesValue;
    //     cardProps[0].valor = productsValue;
    //     cardProps[1].valor = usersValue;
    //     cardProps[2].valor = categoriesValue;
    // }


    return(
        <div className="row">
            {
                [cardProductsInDataBase,cardUsersInDataBase,cardCategoriesInDataBase].map((card,index)=>{
                    return <SmallCard  {...card}  key= {index}/>
                })
            }      
        </div>
    )
}

export default Cards;