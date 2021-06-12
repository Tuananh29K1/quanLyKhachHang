import React, { Component } from 'react';
import ListTitleDT from './ListTitleDT';

class ButtonListTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hienThi : false
        }
    }

    thayDoiHienThi = () => {
        this.setState({
            hienThi : !this.state.hienThi
        });
    }
    showListDetailTitle = () => {
        if(this.state.hienThi === true){
            return(
                <ListTitleDT show={() => this.thayDoiHienThi()}/>
            )
        }
    }
    
    render() {
        return (
            <aside className="groupDetail">
                        <button onClick ={() => this.thayDoiHienThi()} >
                            <span><i className="fas fa-list mr-2" /></span><span><i className="fas fa-sort-down font-16" /></span>
                        </button>
                        {this.showListDetailTitle()}
            </aside>
        );
    }
}

export default ButtonListTitle;