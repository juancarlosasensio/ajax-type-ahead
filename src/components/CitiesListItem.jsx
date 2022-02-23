import numberWithCommas from "../utils/numberWithCommas";
import TextHighlight from "./TextHighlight";

const CitiesListItem = ({ cityObj, wordToMatch, index }) => {
  return (
    <li key={`${cityObj.city}-${cityObj.state}-${index}`}>
      <span className="name">
        <TextHighlight fullText={cityObj.city} textToMatch={wordToMatch} />,
        <TextHighlight fullText={cityObj.state} textToMatch={wordToMatch} />
      </span>
      <span className="population">
        {numberWithCommas(cityObj.population)}
      </span>
    </li>
  );
};

export default CitiesListItem;