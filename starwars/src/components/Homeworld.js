import React from 'react';


class Homeworld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeWorld: ""
        };
    }


    componentDidMount() {
        this.getHomeworld(this.props.homeworld);
    }
    
  getHomeworld = URL => { 
     fetch(URL)
    .then(res => {
       return res.json();
     })
     .then(data => {
         console.log(data.name);
        this.setState({homeWorld: data.name});
     })
     .catch(err => {
         throw new Error(err);
         });
     };

     render() {
         return (this.state.homeWorld);
     }

}

export default Homeworld;