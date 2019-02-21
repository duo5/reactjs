import React, { Component } from 'react';

class input extends Component {
    constructor(props) {
        super(props);
        this.inputF = React.createRef();
        this.clear = this.clear.bind(this);
    }

    clear(){
        this.inputF.current.reset();
    }
    
    render() {
        return (
            <div>
                <form ref={this.inputF} >
                    Name:
                    <input defaultValue="abc" type="text" />
                    Class:
                    <input defaultValue="cdf" type="text" />
                    Male:
                    <input defaultValue="male" type="text" />
                    <input defaultValue="Clear" type="button" onClick={this.clear} />
                </form>
                
            </div>
        );
    }
}

export default input;