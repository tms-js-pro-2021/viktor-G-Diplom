/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-vars */
import React, { Component } from "react"
import { render } from "react-dom";




export default class Beacksourse extends Component {
    constructor(props) {
        super(props)
        this.state = {
             error:null,
             isLoaded: false,
             items: []
        };
    }

    componentDidMount() {
    
          fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
          .then(res => res.json())
          .then(
               (result) => {
                   console.log(result)
                   this.setState({
                       isLoaded: true,
                       items:result.drinks
                   });
               },
               (error) => {
                   this.setState({
                       isLoaded: true,
                       error
                   })
               }
          )
      }



     
      render() {
          const {error,isLoaded,items} = this.state;
          console.log(items)
          if (error) {
              return <p> Error {error?.message}</p>
          } else if (!isLoaded) {
              return <p> loading... </p>
           } else {
               return (
                   <ul > 
                      {items.map(item => (
                          <li key= {item.idDrink}>
                               {item.strDrink}
                               <img width ="400px" height = "400px"  src={item.strDrinkThumb} />
                          </li>
                      ))}
                   </ul>
               )
           }
     
      }



};




