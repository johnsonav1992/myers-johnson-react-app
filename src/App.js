import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {
	const [wordCount, setWordCount] = useState(0)

	function handleClick(event) {
    event.preventDefault();
    const value = event.target.parentNode[0].value;
    const wordArray = value.split(" ");
    const wordCount = wordArray.length;
    setWordCount(wordCount);
  }
  
  function reset(event) {
    let value = event.target.parentNode[0].value
    value = ''
    setWordCount(0)
  }


	return (
		<div className="App">
			<h1>Word Counter</h1>
      <p>Paste in your text below</p>
			<form type='submit' className='form'>
				<textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
				<Button click={handleClick}>Submit</Button>
				<Button click={reset}>Reset</Button>
			</form>
			<h2>Words: {wordCount}</h2>
		</div>
	)
}

export default App
