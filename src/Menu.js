import React from 'react'
import Search from './Search'
import './Menu.css';
import PanelAdd from './PanelAdd'
class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {newItemPanel:false};
        this.add = this.add.bind(this);
    }
    add(){
        this.setState({newItemPanel:true});
        
    }
    onCancel(){
        this.setState({newItemPanel:false});
    }
    render(){
        return(
            <div className="container">
                <div className ="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>
                    <div className="search">
                        <Search />
                    </div>
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">Añadir Libro</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel)?
                    <PanelAdd />
                    :
                    ''
                }
              
            </div>
        );
    }
   
}

export default Menu;