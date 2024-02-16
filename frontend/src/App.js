import logo from './logo.svg';
import './App.css';
import Register from './view/register'; // Note: Use PascalCase for component names
import RegistrationForm from './view/register';

function App() {
  return (
    <div className="App">
      <RegistrationForm /> {/* Use JSX syntax to render the Register component */}
    </div>
  );
}

export default App;
