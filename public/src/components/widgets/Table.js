import React from 'react';

export default class Table extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <div className="table container">
            <THead columns={this.props.data.columns}></THead>
            <TBody columns={this.props.data.columns} rows={this.props.data.rows}></TBody>
        </div>;
    }
}

class THead extends React.Component {
    constructor(){
        super();
    }

    render(){
        var columns = this.props.columns.map(v => <div className="col"><b>{v.title}</b></div>);
        return <div className="row table-row">{columns}</div>;
    }
}

class TBody extends React.Component {
    constructor(){
        super();
    }

    render(){
        var data = this.props.rows.map(v => {
            return (<div className="row table-row">{
                this.props.columns.map((w, i) => <div className="col">{
                    w.tick && v[w.field] ? <i className="fas fa-check"></i> : v[w.field]
                }</div>)
            }</div>);
        });
        return <div>{data}</div>;
    }
}