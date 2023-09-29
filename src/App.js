import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SubmitPage from "./pages/SubmitPage";
function App() {
  const url = "https://api.chucknorris.io/jokes)"
  const handleSubmit = (author, mail,content) => {
    let jokeContent = {
      'author':author,
      'mail':mail,
      'content':content
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(jokeContent),
      headers: {
        'Content-Type': 'application/json'
      }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <SubmitPage onSend={handleSubmit} />
    </div>
  );
}

export default App;
