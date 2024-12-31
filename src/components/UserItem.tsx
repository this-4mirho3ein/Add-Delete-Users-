import React from 'react'

interface UserItemProps {
    username: string,
    email: string,
    onDelete: (id: number) => void,
    id: number
}


const UsertItem = ({ username, email, onDelete, id }: UserItemProps) => {
    return (
        <div className="flex flex-wrap justify-center mx-auto my-10 gap-5">
            <div className="text-slate-100 p-4 m-4 rounded-md bg-slate-700 text-center">
                <p className="font-bold text-lg p-1">{username}</p>
                <p className="p-3">{email}</p>
                <button onClick={() => onDelete(id)} className="px-4 py-2 mt-4 bg-slate-900 text-slate-100 rounded-md">Remove</button>
            </div>
        </div>
    )
}

export default UsertItem