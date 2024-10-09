"use client"

import { usePointsStore } from '@/store/PointsStore'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import {getAuth} from "../../utils/localstorage"


const PointsTracker = () => {
    const {points,initializePoints} = usePointsStore();
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() =>{
        const token = getAuth();
        const fetchUser = async () =>{
            const response = await axios.get(`http://localhost:3000/api/getscore`,{
                headers: { Authorization: `Bearer ${token}` },
              });
              const res = response.data;
              console.log(res)
              const resdata = res.data;
              if (!resdata) {
                // navigate("/game");
                return;
              } else{
                setIsLoading(false)
              }
              initializePoints(resdata.tap_score)
        }
        fetchUser();
       
    },[])
   

    return (
        <div className='font-bold text-5xl flex items-center gap-2 text-black'>
            <span className='text-6xl'>
                <Image src="/assets/images/planet.png" height={50} width={50} alt="" />
            </span>
           {points}
        </div>
    )
}

export default PointsTracker