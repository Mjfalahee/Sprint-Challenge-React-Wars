import React from 'react';


class Films extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filmNames: ""
        };
    }


    componentDidMount() {
        this.getFilms(this.props.film);
    }
    
  getFilms = URL => { 
     fetch(URL)
    .then(res => {
       return res.json();
     })
     .then(data => {
         console.log(data.name);
        this.setState({filmNames: data.title});
     })
     .catch(err => {
         throw new Error(err);
         });
     };

     render() {
         return <li>{this.state.filmNames}</li>;
     }

}

export default Films;