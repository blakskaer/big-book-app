const AutoComplete = ({ suggestions, setSuggestions, setAuthor }) => {
  
  const handleSelect = (value) => {
    setAuthor(value);
    setSuggestions([]);
  } 
  
  const suggestionsList = () => suggestions.map((suggestion, i) => (
    <li key={`suggestion${i}`} onClick={() => handleSelect(suggestion)}>{suggestion}</li>
  ));

  return (
  
      <div className={`auto-complete ${suggestions.length > 0 && "auto-complete-on"}`}>
        <ul>
          { suggestions && suggestionsList() }
        </ul>
      </div>
  )
}
 
 
export default AutoComplete;