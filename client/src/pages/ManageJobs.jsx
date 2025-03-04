import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ManageJobs = () => {
  return (
    <div className='container p-4 max-w-5xl '>
       <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200 max-sm:text-sm'>
            <thead>
                <tr>
                    <th className='py-2 px-4 border-b text-left max-sm:hidden'>#</th>
                    <th className='py-2 px-4 border-b text-left'>Job Title</th>
                    <th className='py-2 px-4 border-b text-left max-sm:hidden'>Date</th>
                    <th className='py-2 px-4 border-b text-left max-sm:hidden'>Location</th>
                    <th className='py-2 px-4 border-b text-center'>Applicants</th>
                    <th className='py-2 px-4 border-b text-left'>Visible</th>
                </tr>
            </thead>
            <tbody>
                {manageJobsData.map((job, index)=>(
                    <tr key={index} className='text-gray-700'>
                        <td className='py-2 px-4 border-b max-sm:hidden'>{index+1}</td>
                        <td className='py-2 px-4 border-b'>{job.title}</td>
                        <td className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
                        <td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                        <td className='py-2 px-4 border-b text-center'>{job.applicants}</td>
                        <td className='py-2 px-4 border-b'>
                            <input className='scale-125 ml-4' type="checkbox" />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div> 
        <div className='mt-4 flex justify-end'>
            <Link to={'/dashboard/add-job'}>   <button className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer'>Add new job</button>
            </Link>
        </div>
    </div>
  )
}

export default ManageJobs