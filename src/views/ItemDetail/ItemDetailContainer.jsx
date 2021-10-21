
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

//componentes
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ match }) => {

    let chardID = match.params.id;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios(`https://breakingbadapi.com/api/characters/${chardID}`).then(res => {
            setProduct(res.data)
        })
    }, [chardID]);

    console.log(product);

    return (
        <div>
            <ItemDetail data={product} />
        </div>
    )
}

export default ItemDetailContainer;
