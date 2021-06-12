import React, { Component } from 'react';

class SortKhuVuc extends Component {
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
            <div className="mainLeft--sortKhuVuc--inputGroup flex-between line mt-3">
            <span className="mainLeft--sortKhuVuc--inputGroup__defaulValue">Chọn Tỉnh/ Tp - Quận/Huyện</span>
            <span><i className="fas fa-sort-down" /></span>
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
        return(
            <i className="fas fa-angle-down" />
        )
    }
}


    /// Phần Render /////
    render() {
        return (
                        <article className="mainLeft--sortKhuVuc sort">
                            <div className="mainLeft--sortKhuVuc--top flex-between">
                            <h2>Khu Vực Giao Hàng</h2>
                            <span onClick={()=> this.changeShow()}>{this.changeIcon()}</span>
                            </div>
                            {this.showSort()}
                        </article>
                        // {/*End Khu Vực*/}
        );
    }
}

export default SortKhuVuc;