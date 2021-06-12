import React, { Component } from 'react';

class HeaderNav extends Component {
    render() {
        return (
            <div>
                <div className="navMain">
                    <ul>
                        <li>
                        <a href="#"><i className="fas fa-boxes" /><span>Hàng Hoá</span></a>
                        <ul className="subMenu">
                            <li>
                            <a href="#"><i className="fas fa-th" /><span>Danh Mục</span></a>
                            </li>
                            <li>
                            <a href="#"><i className="fas fa-tags" /><span>Thiết Lập Giá</span></a>
                            </li>
                            <li>
                            <a href="#"><i className="fas fa-clipboard-check" /><span>Kiểm Kho</span></a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="#"><i className="fas fa-user-alt" /><span>Đối Tác</span></a>
                        <ul className="subMenu">
                            <li>
                            <a href="#"><i className="fas fa-user-tie" /><span>Khách Hàng</span></a>
                            </li>
                            <li>
                            <a href="#"><i className="fas fa-users" /><span>Nhà Cung Cấp</span></a>
                            </li>
                            <li>
                            <a href="#"><i className="fas fa-people-carry" /><span>Đối Tác Giao Hàng</span></a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="#"><i className="fas fa-exchange-alt" /><span>Giao Dịch</span></a>
                        <ul className="subMenu">
                            <li>
                            <a href="#"><i className="fas fa-th" /><span>Đặt Hàng</span></a>
                            </li>
                            <li>
                            <a href="#"><i className="fas fa-tags" /><span>Hoá Đơn</span></a>
                            </li>
                            <li>
                            <a href="#"><i className="fas fa-clipboard-check" /><span>Trả Hàng</span></a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default HeaderNav;