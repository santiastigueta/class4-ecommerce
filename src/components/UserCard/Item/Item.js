
import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router';
//componentes
//import ItemCount from '../ItemCount/ItemCount'


const Item = ({ data }) => {
    const history = useHistory();

    const navigateItem = () => {
        history.push(`/item/${data.id}`)
    }

    return (
        <div className="Item">
            <Card>
                <Image src={data.img} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{data.title}</Card.Header>
                    <Card.Meta>
                        <Card.Description>${data.price}</Card.Description>
                    </Card.Meta>
                    <Card.Description>{data.description}</Card.Description>
                    <Card.Description>{data.category}</Card.Description>
                    <Card.Meta>
                        <Button positive onClick={navigateItem}>ver mas detalles</Button>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </div >
    );
}



export default Item;