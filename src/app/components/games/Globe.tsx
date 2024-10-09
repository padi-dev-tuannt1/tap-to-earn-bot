'use client'
import { usePointsStore } from "@/store/PointsStore"
import { useBoostersStore } from "@/store/useBoosterStore"
import Image from "next/image"
import { useEffect, useState } from "react"

interface ClickCoords {
    x: number, y: number
}
const TapGlobe = () => {

    const [clickCoordinate, setClickCoordinate] = useState<ClickCoords[]>([])
    const [isTapping, setIsTapping] = useState<boolean>()
    const { secondsLeft } = useBoostersStore()
    const { addPoints, decreaseTapsLeft, currentTapsLeft, increaseTapsLeft, tapInBoostMode } = usePointsStore()

    const { multiClickLevel, energyCapacity } = useBoostersStore()

    const handleTap = (e: any) => {
        const rect = e.target.getBoundingClientRect();

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const prevClicks = clickCoordinate

        setClickCoordinate([{ x, y }, ...prevClicks])

        addPoints(multiClickLevel)

        decreaseTapsLeft(1)

        setIsTapping(true)
        setTimeout(() => setIsTapping(false), 2000);
    }

    useEffect(() => {
        const timers = clickCoordinate.map((_, index) =>
            setTimeout(() => {
                setClickCoordinate(clickCoordinate.filter((_, i) => i !== index));
            }, 2000)
        );

        return () => timers.forEach(clearTimeout)
    }, [clickCoordinate])

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
    
        const incrementTapsLeft = () => {
            if (currentTapsLeft < energyCapacity) {
                increaseTapsLeft(1);
            }
        };
    
        timer = setInterval(incrementTapsLeft, 10000);
    
        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [currentTapsLeft]);

    return (
        <div className='relative'>
            <Image src="/assets/images/planet.png" height={200} width={200} alt="" onClick={handleTap} className='transition duration-300 cursor-pointer' />
            {clickCoordinate.length > 1 && clickCoordinate.map((click, index) => <div key={index} className={`text-4xl font-bold text-orange-400 absolute tap-count-animation`} style={{
                left: click.x,
                top: click.y,
            }}>
                +1
            </div>)}
        </div>
    )
}

export default TapGlobe