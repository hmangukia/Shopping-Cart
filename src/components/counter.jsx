import React, { Component } from 'react';

class Counter extends Component {

    // state = {
    //     count: this.props.value    
    // };

    constructor(props){
        super(props);
        this.state= {
            value : this.props.value
        }
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement()} 
                    className="btn btn-secondary btn-sm">
                        Increment
                </button>
                {/* { this.renderTags() } */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }

}
 
export default Counter;