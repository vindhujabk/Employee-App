import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/Login/Login';
import './Styles/Login.css';
import EmployeeDashboard from './components/Employees/EmployeeDashboard';
import './Styles/EmployeeDashboard.css'
import AddEmployeeForm from './components/Employees/AddEmployeeForm';
import './Styles/AddEmployeeForm.css'
import { EmployeeProvider } from './components/Employees/EmployeeContext';



function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/employees' element={<EmployeeDashboard/>}></Route>
        <Route path='/addemployees' element={<AddEmployeeForm/>}></Route>
        
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;