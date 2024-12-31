import React, { ReactNode } from 'react'

interface MessageProps {
    mode : 'allowed' | 'not allowed'
    children : ReactNode
}

const Message = ({mode , children} : MessageProps) => {
    if (mode === 'allowed'){
        return(
            <div className='text-center text-lg'>
                <p>{children}</p>
            </div>
        )
    }
    return (
        <div className='text-center text-yellow-500 text-lg'>
            <p>{children}</p>
        </div>
    )
}

export default Message