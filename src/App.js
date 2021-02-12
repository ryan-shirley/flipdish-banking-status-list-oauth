import logo from './logo.svg';
import './App.css';

function App() {

  function getToken() {
    var authorizationUrl = 'https://api.flipdish.co/identity/connect/authorize';
    var client_id = '6374874589306919974600';
    var redirect_uri = 'http://localhost:3000';
    var response_type = "token";
    var scope = "openid";
    var state = Date.now() + "" + Math.random();

    localStorage["state"] = state;

    var url =
      authorizationUrl + "?" +
      "client_id=" + encodeURI(client_id) + "&" +
      "redirect_uri=" + encodeURI(redirect_uri) + "&" +
      "response_type=" + encodeURI(response_type) + "&" +
      "scope=" + encodeURI(scope) + "&" +
      "state=" + encodeURI(state);
    window.location = url;
  }

  return ( 
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={getToken}> Get Token </button> 
    </header>
  </div>
  )
}

export default App;