import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisaplay from './SeasonDisplay';
import Spinner from './Spinner'; 

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            lat:null ,
            errorMessage :''  
        };      
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat:position.coords.latitude }),
            (err) => console.log(err)       
        );        
    }

    render(){
            if(this.state.errorMessage && !this.state.lat){
                return <div>Error : {this.state.errorMessage}</div>
            }

            if(this.state.lat && !this.state.errorMessage){
                return <SeasonDisaplay lat={this.state.lat} />
            }

            return <Spinner/>
    }
}

ReactDOM.render(<App/> , document.querySelector('#root'));      