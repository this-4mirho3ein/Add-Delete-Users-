import React, { FormEvent, useRef } from 'react'


interface AddUsersProps {
    onAddUsers: (userName: string, Email: string) => void
}

const AddUser = ({onAddUsers}: AddUsersProps) => {
    const username = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    function handleAddUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newUsername = username.current!.value
        const newEmail = email.current!.value
        event.currentTarget.reset()
        onAddUsers(newUsername, newEmail)
    }
    return (
        <>
            <form onSubmit={handleAddUser} className='bg-slate-700 max-w-xl flex flex-col p-3 m-5 mt-20 rounded-md justify-center text-center mx-auto'>
                <h1 className='font-semibold text-slate-200 text-center my-3'>Add New User</h1>
                <input type="text" placeholder='Enter Your Username' id='username' ref={username} className='p-2 rounded m-4' />
                <input type="email" placeholder='Enter Your Email' id='email' ref={email} className='p-2 rounded m-4' />
                <button className='bg-slate-600 p-3 mx-auto text-center text-slate-100 rounded-md my-3'>Add User</button>
            </form>
        </>
    )
}

export default AddUser