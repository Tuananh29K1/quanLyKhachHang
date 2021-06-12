import React, { Component } from 'react';

class SortGDC extends Component {
constructor(props) {
    super(props);
    this.state = {
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
                            <div className="mainLeft--sortNgayGDC--inputGroup flex-between mt-3">
                                <ul className="pickDtae w-100">
                                    <li className="barRadio auto line">
                                    <div className="barRadio--input">
                                        <label className="customRadio">
                                        <input type="radio" name="sortNgayGDC" id="ngayGDC-ttg" defaultChecked />
                                        <span className="checkMark" />
                                        </label>
                                    </div>
                                    <span className="flex-between">
                                        <label htmlFor="ngayGDC-ttg">Toàn Thời Gian</label>
                                        <span><i className="fas fa-sort" /></span>
                                    </span>
                                    </li>
                                    <li className="barRadio custom line">
                                    <div className="barRadio--input">
                                        <label className="customRadio">
                                        <input type="radio" name="sortNgayGDC" id="ngayGDC-lck" />
                                        <span className="checkMark" />
                                        </label>
                                    </div>
                                    <span className="flex-between">
                                        <label htmlFor="ngayGDC-lck">Lựa Chọn Khác</label>
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
        return (
            <i className="fas fa-angle-down" />
        )
    }
}


//// Phần Render /// 
    render() {
        return (
                        <article className="mainLeft--sortNgayGDC sort">
                            <div className="mainLeft--sortNgayGDC--top flex-between">
                            <h2>Ngày Giao Dịch Cuối</h2>
                            <span onClick={ () => this.changeShow()}>{this.changeIcon()}</span>
                            </div>
                            {
                                this.showSort()
                            }
                        </article>
                        // {/*End Ngày Giao Dịch Cuối*/}
        );
    }
}

export default SortGDC;