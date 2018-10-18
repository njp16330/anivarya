import React from 'react';
import axios from 'axios';
import Table from '../widgets/Table';
import UnorderedList from '../widgets/UnorderedList';
import OrderedList from '../widgets/OrderedList';
import Image from '../widgets/Image';
import Title from '../widgets/Title';
import Paragraph from '../widgets/Paragraph';
import Subtitle from '../widgets/Subtitle';


export default class ProductDetails extends React.Component {
    constructor(){
        super();

        this.state = {details: null};
    }

    componentWillMount(){
        axios.get('/api/get/productDetails', {params: {id: this.props.productId}}).then((res) => {
            this.setState({details: res.data});
        });
    }

    render(){
        if(this.props.show && this.state.details){
            var detailbody = (this.state.details || []).map(v => {
                if(v.type === 'table') return <Table data={v.data}></Table>;
                else if(v.type === 'unorderedlist') return <UnorderedList data={v.data}></UnorderedList>;
                else if(v.type === 'orderedlist') return <OrderedList data={v.data}></OrderedList>;
                else if(v.type === 'image') return <Image data={v.data}></Image>;
                else if(v.type === 'title') return <Title data={v.data}></Title>;
                else if(v.type === 'subtitle') return <Subtitle data={v.data}></Subtitle>;
                else if(v.type === 'paragraph') return <Paragraph data={v.data}></Paragraph>;
            });

            return (<div>
                {detailbody}
            </div>);
        }
        else if(this.props.show){
            return <div>Loading...</div>;
        }
        else return null;
    }
}