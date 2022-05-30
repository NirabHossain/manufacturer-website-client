import React from 'react';

const Row = ({product}) => {
    const {toolName, quantity} = product;
    return (
        <tr>
            <th>{toolName}</th>
            <td>{quantity}</td>
            <td>{product?.status || "Unpaid"}</td>
        </tr>
    );
};

export default Row;