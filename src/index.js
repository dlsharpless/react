import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
    <div>
      <h1>{props.name}</h1>
      <p>{props.tag}</p> 
    </div>
  );
  
  const Service = (props) => (
    <li className="box">
      <h2>{props.service}</h2>
      <p>{props.price}</p>
      <p><em>note that prices may vary and depend on season, market prices, and condition of boat.</em></p>
    </li>
  );
  
  class App extends React.Component {
    state = {
      name: "Prescot & Watson",
      tagline: "First Class Yachting",
      services: [
        {name:'yacht repair', price:'$450'},
        {name:'custom interiors', price:'$15000'},
        {name:'waterproofing', price:'$50'},
        {name:'sailing lessons', price:'$250'}
      ]
    }
    
    render(){
      const serviceList = this.state.services;
      return (
        <div>
          <Header name={this.state.name} tag={this.state.tagline} />
          <strong>Services:</strong>
          <ul>
            {serviceList.map((service, index)=>{
                return(
                    <Service key={index} service={service.name} price={service.price}  />
                )
            })}
          </ul>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));