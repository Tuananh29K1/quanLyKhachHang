import React, { Component } from 'react';
import SortGDC from '../Sort/SortGDC';
import SortNgayTao from '../Sort/SortNgayTao/SortNgayTao';
import SortNguoiTao from '../Sort/SortNguoiTao/SortNguoiTao';
import SortNhomKH from '../Sort/SortNhomKH/SortNhomKH';
import SortNHT from '../Sort/SortNHT';
import SortSinhNhat from '../Sort/SortSinhNhat/SortSinhNhat';
import SortTongBan from '../Sort/SortTongBan';
import SortLoaiKH from '../Sort/SortLoaiKH/SortLoaiKH';
import SortGT from '../Sort/SortGender/SortGT';
import SortKhuVuc from '../Sort/SortKhuVuc';
import SortTrangThai from '../Sort/SortTrangThai/SortTrangThai';

class MainLeft extends Component {
    render() {
        return (
            <div className="mainLeft col-3">
                <h1 className="mainLeft--title">Khách Hàng</h1>
                    <div className="mainLeft--filter">
                        <SortNhomKH/>
                        <SortNgayTao/>
                        <SortNguoiTao/>
                        <SortSinhNhat/>
                        <SortGDC/>
                        <SortTongBan/>
                        <SortNHT/>
                        <SortLoaiKH/>
                        <SortGT/>
                        <SortKhuVuc/>
                        <SortTrangThai/>
                    </div>
            </div>
        );
    }
}

export default MainLeft;