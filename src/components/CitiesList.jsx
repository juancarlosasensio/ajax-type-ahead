import CitiesListItem from '../components/CitiesListItem';

const CitiesList = ({ citiesArrayToDisplay, wordToMatch }) => {
  const displayItems = citiesArrayToDisplay.map((cityObj, index) => (
    <CitiesListItem
      key={index}
      index={index}
      cityObj={cityObj}
      wordToMatch={wordToMatch}
    />
  ));

  return (
    <ul className="suggestions" data-widget-name="cities-list">
      {displayItems}
    </ul>
  );
};

export default CitiesList;