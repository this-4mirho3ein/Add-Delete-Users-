import { useState } from 'react'
import UserList from './components/UserList'
import UsertItem from './components/UserItem'
import AddUser from './components/AddUser'

export interface UsertItemProps {
  username: string,
  email: string,
  id: number
}
function App() {
  const [users, setUsers] = useState<UsertItemProps[]>([])

  function handleAddUsers(userName : string , Email : string) {
    setUsers((prevUsers) => {
      const newUsers: UsertItemProps = {
        username: userName,
        email: Email,
        id: Math.random()
      }
      return [...prevUsers, newUsers]
    })

  }

  function handleDeleteUsers(id: number) {
    setUsers((prevUsers) => (prevUsers.filter((item) => item.id !== id)))
  }

  return (
    <>
      <AddUser onAddUsers={handleAddUsers}/>
      <UserList users={users} onDeleteUsers={handleDeleteUsers} />
    </>
  )
}

export default App
