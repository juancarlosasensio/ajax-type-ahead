import { useEffect, useState } from 'react';
import AjaxForm from './components/AjaxForm'
import './App.css';

// https://github.com/wesbos/JavaScript30/tree/master/06%20-%20Type%20Ahead

/*
    - So we need to get cities data for sure. That data lives at an endpoint we need to fetch from.
    - The cities data needs to live as state somewhere within the React UI.
    - But we don't need to display all the cities, only the ones that match the text on the input.
    - Do we need to manage as state those cities we need to display?? 
**** General tip: prefer “deriving data” while rendering, vs storing derived data in state
↓↓ store description of how to filter or sort, not filtered/sorted values ↓↓
https://blog.isquaredsoftware.com/presentations/react-redux-ts-intro-2020-12/#/34
  */

// function displayMatches() {
//   const matchArray = findMatches(this.value, cities);
//   const html = matchArray.map(place => {
//     const regex = new RegExp(this.value, 'gi');
//     const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//     const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
//     return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `;
//   }).join('');
//   suggestions.innerHTML = html;
// }


// src/components/App
const App = () => ( <AjaxForm />);


export default App;
