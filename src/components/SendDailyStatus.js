import React from 'react'
import Navigation from './Navigation'

const SendDailyStatus = () => {
  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mt-8">
      <div className="flex justify-center">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-3/4">
          <div className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 justify-center ">
          Send Daily Status Update
          </div>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default SendDailyStatus
