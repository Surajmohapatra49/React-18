import logo from './logo.svg';
import './App.css';
import Register from './view/Register'; // Note: Use PascalCase for component names
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <div className="App">
      <Register /> {/* Use JSX syntax to render the Register component */}
    </div>
  );
}

export default App;
