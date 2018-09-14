import React from 'react';
import axios from 'axios';
import Table from './Table';

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
            var detailbody = this.state.details.body.map(v => <div>{v}</div>),
                columnLabels = this.state.details.data.columnLabels,
                cols = [
                    {text: columnLabels['model'], field: 'model', w: 3},
                    {text: columnLabels['size'], field: 'size', w: 3},
                    {text: columnLabels['lpm'], field: 'lpm', w: 2},
                    {text: columnLabels['usgpm'], field: 'usgpm', w: 2},
                    {text: columnLabels['m3ph'], field: 'm3ph', w: 2}
                ], data = this.state.details.data.specs.reduce((a, v) => {
                    v.variants.forEach(w => {
                        a.push({
                            model: v.pump + (w.label ? ('-' + w.label) : ''),
                            size: v.size,
                            lpm: w.lpm,
                            usgpm: w.usgpm,
                            m3ph: w.m3ph
                        });
                    });
                    return a;
                }, []);

            return (<div>
                <b>{this.state.details.title}</b><br />
                {detailbody}<br />
                <Table columns={cols} data={data}></Table>
                <br /><br />
                {this.state.details.title} Features
                <ul>{
                    this.state.details.data.features.map(v => <li>{v}</li>)
                }</ul><br />
                
                {this.state.details.title} Applications
                <ul>{
                    this.state.details.data.applications.map(v => <li>{v}</li>)
                }</ul>
            </div>);
        }
        else if(this.props.show){
            return <div>Loading...</div>;
        }
        else return null;
    }
}