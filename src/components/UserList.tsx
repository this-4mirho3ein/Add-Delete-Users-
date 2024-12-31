import React, { ReactNode } from 'react'
import UsertItem from './UserItem'

import { type UsertItemProps } from '../App'
import Message from './Message'

interface UserListProps {
    users: UsertItemProps[],
    onDeleteUsers: (id: number) => void
}

const UserList = ({ users, onDeleteUsers }: UserListProps) => {
    if (users.length === 0) {
        return <Message mode='allowed'>We have no users</Message>
    }
    let messageText:ReactNode
    if (users.length >= 2) {
        messageText = <Message mode='not allowed'>We have to many users</Message>
    }
    return (
        <>
        {messageText}
        <div className='flex justify-center'>
            {users.map((e) => (
                <div key={e.id}>
                    <UsertItem onDelete={onDeleteUsers} id={e.id} username={e.username} email={e.email} />
                </div>

            ))}
        </div>
        </>
    )
}

export default UserList