import { useEffect, useState } from 'react';
import CitiesList from './CitiesList';
import EmptyCitiesList from './EmptyCitiesList';

const AjaxForm = () => {
  const ENDPOINT =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  const [citiesArray, setCitiesArray] = useState([]);
  // const [citiesArrayToDisplay, setCitiesArrayToDisplay] = useState([]);
  const [wordToMatch, setWordToMatch] = useState("");

  const fetchCitiesData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setCitiesArray(data);
  };
  
  let citiesToDisplay = [];
  
  const findMatches = (wordToMatch, cities) => {
    // handle errors for when there are no cities that match??
    return cities.filter((place) => {
      // ↓↓ here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
  };
  
  if (wordToMatch) {
    citiesToDisplay = findMatches(wordToMatch, citiesArray);
  }

  // why do we need to trigger findMatches/displayMatches on both onChange and onKeyUp??
  const handleChange = (event) => {
    const inputText = event.target.value;
    if (!inputText) {
      // setCitiesArrayToDisplay([]);
      setWordToMatch("");
      return;
    }
    setWordToMatch(inputText);
    // ↓↓ why is there a discrpeancy between inputText and wordToMatch? wordToMatch lags behind inputText...
    // console.log(inputText, wordToMatch);

    // ↓↓ if we call findMatches(wordToMatch, citiesArray) ↓↓ the results are different...why??
    // const matchedCities = findMatches(inputText, citiesArray);

    // setCitiesArrayToDisplay(matchedCities);
  };

  const handleKeyUp = (event) => {};

  const displayList =
    citiesToDisplay.length === 0 ? (
      <EmptyCitiesList />
    ) : (
      <CitiesList
        citiesArrayToDisplay={citiesToDisplay}
        wordToMatch={wordToMatch}
      />
    );

  useEffect(() => {
    fetchCitiesData(ENDPOINT);
  }, []);

  return (
    <form className="search-form">
      <input
        type="text"
        className="search"
        placeholder="US City or State"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={wordToMatch}
      />
      {displayList}
    </form>
  );
};

export default AjaxForm;