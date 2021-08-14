import React from 'react';
import './PageInput.css';

class PageInput extends React.Component{
    state = {
        pageNumber: ' '
    }
    retrieveValue = (e) => {
        const pageValue = e.target.value.trim();

        if(pageValue === '0' || pageValue === '' || pageValue > this.props.totalPages || pageValue.match(/\s/)){
            this.props.onChange('1');
            this.setState({
                pageNumber: '1'
            });
        }else{
            this.props.onChange(pageValue);
            this.setState({
                pageNumber: pageValue
            });
        }
    }
    render(){
        const pageNumberCheck = this.state.pageNumber > this.props.totalPages || this.state.pageNumber === ' ' || this.state.pageNumber.match(/[a-z]/i) ? '1' : this.state.pageNumber;
        return (
            <div className="PageInput">
                <input type="text" placeholder="Enter page number" onChange={this.retrieveValue}/>
                <span>Page {pageNumberCheck} of {this.props.totalPages}</span>
            </div>
        );
    };
};

export default PageInput;