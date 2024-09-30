'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useBoostersStore } from '@/store/useBoosterStore';
import { usePointsStore } from '@/store/PointsStore';


const GameLevelProgress = () => {
    const {currentTapsLeft } = usePointsStore()
    const { energyCapacity } = useBoostersStore()


    return (
        <>
            <div className='flex items-center gap-2 text-lg text-black'>

                <div>
                    <Image src="/assets/images/planet.png" height={35} width={35} alt="" />
                </div>
                <div>
                    <span className='font-extrabold text-3xl'>{currentTapsLeft}</span>/{energyCapacity}
                </div>
            </div>

            <div className='w-full'>
                <progress draggable={false} value={(currentTapsLeft / energyCapacity) * 100} max={100} className="w-full bg" />
            </div>
        </>
    )
}

export default GameLevelProgress