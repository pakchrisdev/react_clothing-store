import React from 'react';
import ShopData from './Shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

export default class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: ShopData
        }
    }

    render(){
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}