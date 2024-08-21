import React from 'react'

function Loading() {

    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center h-screen">
            <div className="w-28 h-28 border-8 text-green-500 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-green-500 rounded-full">
                <img src="/public/img/logo.png" alt="" className="animate-ping" />
            </div>
        </div>
    )
}

export default Loading