import React, { Component } from 'react';

class SortTongBan extends Component {
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
                <div className="mainLeft--sortTongBan--inputGroup flex-between mt-3">
                            <ul className="pickDate w-100">
                                <li className="flex-between inputValue">
                                <label htmlFor="sortTongBan__from">Từ:</label>
                                <span className="inputValue__from">
                                    <input type="text" id="sortTongBan__from" placeholder={0} />
                                </span>
                                </li>
                                <li className="flex-between inputValue">
                                <label htmlFor="sortTongBan__to">Tới:</label>
                                <span className="inputValue__to">
                                    <input type="text" id="sortTongBan__to" placeholder="Giá Trị" />
                                </span>
                                </li>
                                <li className="barRadio auto line">
                                <div className="barRadio--input">
                                    <label className="customRadio">
                                    <input type="radio" name="sortTongBan" id="tongBan-ttg" defaultChecked />
                                    <span className="checkMark" />
                                    </label>
                                </div>
                                <span className="flex-between">
                                    <label htmlFor="tongBan-ttg">Toàn Thời Gian</label>
                                    <span><i className="fas fa-sort" /></span>
                                </span>
                                </li>
                                <li className="barRadio custom line">
                                <div className="barRadio--input">
                                    <label className="customRadio">
                                    <input type="radio" name="sortTongBan" id="tongBan-lck" />
                                    <span className="checkMark" />
                                    </label>
                                </div>
                                <span className="flex-between">
                                    <label htmlFor="tongBan-lck">Lựa Chọn Khác</label>
                                    <span><i className="far fa-calendar-alt" /></span>
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
            return(
                <i className="fas fa-angle-down" />
            )
            
        }
    }  
    /// Phần Render ////
    render() {
        return (
                     <article className="mainLeft--sortTongBan sort">
                            <div className="mainLeft--sortTongBan--top flex-between">
                            <h2>Tổng Bán</h2>
                            <span onClick={() => this.changeShow()}>{this.changeIcon()}</span>
                            </div>
                            {this.showSort()}
                        </article>
                        // {/*End Tong Ban*/}
        );
    }
}

export default SortTongBan;