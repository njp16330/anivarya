import React from 'react';

export default class Table extends React.Component {
    constructor(){
        super();
    }

    render(){
        return <div>
            <THead columns={this.props.columns}></THead>
            <TBody columns={this.props.columns} data={this.props.data}></TBody>
        </div>;
    }
}


class THead extends React.Component {
    constructor(){
        super();
    }

    render(){
        var columns = this.props.columns.map(v => <div className={"col-md-" + v.w}>{v.text}</div>);
        return <div className="row">{columns}</div>;
    }
}

class TBody extends React.Component {
    constructor(){
        super();
    }

    render(){
        var data = this.props.data.map(v => {
            return (<div className="row">{
                this.props.columns.map((w, i) => <div className={"col-md-" + w.w}>{v[w.field]}</div>)
            }</div>);
        });
        return <div>{data}</div>;
    }
}