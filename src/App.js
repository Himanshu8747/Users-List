import { useState } from 'react';
import './App.css'
import UserForm from './components/Users/UserForm';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList,setUsersList] = useState([]);
  const addUserHandle=(name,age)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:name,age:age}]
    })
  }
  return (
    <div className="App">
      <UserForm onAddUser={addUserHandle}/>
      {usersList.length > 0 && <UsersList users={usersList}/>}
    </div>
  );
}

export default App;
