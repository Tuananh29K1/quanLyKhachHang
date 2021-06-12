import React, { Component } from 'react';

class ButtonEF extends Component {
    render() {
        return (
                    <aside className="groupFile">
                        <button>
                            <span><i className="far fa-file mr-2" /></span>File<span><i className="fas fa-sort-down ml-2 font-16" /></span>
                        </button>
                        <ul className="subFile">
                            <li>
                            <a href="#"><i className="fas fa-file-import mr-2" /><span>Nhập File</span></a>
                            </li>
                            <li>
                            <a href="#"><i className="fas fa-file-download mr-2" /><span>Xuất File</span></a>
                            </li>
                        </ul> 
                    </aside>
                    // End groupFile
        );
    }
}

export default ButtonEF;