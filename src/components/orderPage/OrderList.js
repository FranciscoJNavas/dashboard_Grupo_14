function OrderList(props) {
    return (
        <tr>
            <td>{props.order}</td>
            <td>
                <ul>
                    {props.orderItems.map(product => {
                        return (
                            <li>{product.name}</li>
                        )
                    })}
                </ul>
            </td>
            <td>${props.total}</td>
            <td>{props.paymentMethod}</td>
            <td>{props.shippingMethod}</td>
            <td>{props.user}</td>
        </tr>
    );
}

export default OrderList;