'use client'
import PointsTracker from '../games/PointTracker'
import { FaTrophy } from 'react-icons/fa'
import { ChevronRight } from 'lucide-react'

const CurrentPoints = ({ type }: { type?: 'sm' }) => {

    return type == 'sm' ? <div className="flex flex-col gap-y-3 py-4">
        <PointsTracker />
        <div className='flex gap-1 justify-center items-center text-black'>
            <div className='text-md font-bold flex items-center gap-x-3'>
                <span>
                    <FaTrophy />
                </span>
                Pilot
            </div>
            <ChevronRight />
        </div>

    </div > : <div className="flex flex-col gap-y-6 py-10">
        <PointsTracker />
        <div className='flex gap-1 justify-center items-center text-black'>
            <div className='text-xl font-bold flex items-center gap-x-3'>
                <span>
                    <FaTrophy />
                </span>
                Pilot
            </div>
            <ChevronRight />
        </div>

    </div>
}

export default CurrentPoints