
import './App.css';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage'
function App() {
  return (
    <div  style={{
      border:"5px solid black",
      display: "flex",
      alignItems: "center",
      justifyContent:"center",
    
      }}>
      <HomePage/>
      <EmployeePage/>
    </div>
  );
}

export default App;
