import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit'

import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/config';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Chatbot
          config={config} 
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header> */}
      <div style={{ maxWidth: "300px"}}>
        <Chatbot 
          config={config} 
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
