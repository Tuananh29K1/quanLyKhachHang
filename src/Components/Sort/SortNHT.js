import React, { Component } from 'react';

class SortNHT extends Component {
    constructor(props) {
        super(props);
        this.state ={
            showSort: true
        }
    }

changeShow = () => {
    this.setState({
        showSort: !this.state.showSort
    });
}

showSort = () => {
    if(this.state.showSort === true){
        return(
            <div className="mainLeft--sortNHT--inputGroup flex-between mt-3">
            <ul className="pickDtae w-100">
                <li className="flex-between inputValue">
                <label htmlFor="sortNHT__from">Từ:</label>
                <span className="inputValue__from">
                    <input type="text" id="sortNHT__from" placeholder={0} />
                </span>
                </li>
                <li className="flex-between inputValue">
                <label htmlFor="sortNHT__to">Tới:</label>
                <span className="inputValue__to">
                    <input type="text" id="sortNHT__to" placeholder="Giá Trị" />
                </span>
                </li>
            </ul>
            </div>
        )
    }
}

changeIcon = () => {
    if(this.state.showSort === true){
        return(
            <i className="fas fa-angle-up" />
        )   
    }else{
        return (
            <i className="fas fa-angle-down" />
        )
    }
}
    /// Phần Render ////
    render() {
        return (
                        <article className="mainLeft--sortNHT sort">
                            <div className="mainLeft--sortNHT--top flex-between">
                            <h2>Nợ Hiện Tại</h2>
                            <span onClick={() => this.changeShow()}>{this.changeIcon()}</span>
                            </div>
                            {this.showSort()}
                        </article>
                        // {/*End Nợ Hiện Tại*/}
        );
    }
}

export default SortNHT;