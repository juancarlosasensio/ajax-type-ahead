const TextHighlight = ({fullText, textToMatch}) => {
  
  const regex = new RegExp(textToMatch, "gi");
  const outputText = fullText.replace(
    regex,
    `<span class="hl">${textToMatch}</span>`
  );

  const createMarkup = (str) => ({__html: str });
  
  return (
    <span dangerouslySetInnerHTML={createMarkup(outputText)}></span>
  )
}

export default TextHighlight