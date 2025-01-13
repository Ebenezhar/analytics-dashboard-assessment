import React, { useEffect } from 'react'
import HorizontalBars from '../components/Charts/VerticalBars'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import VerticalBars from '../components/Charts/VerticalBars';
import { DEFAULT_Y_AXIS_KEY } from '@mui/x-charts';

function Charts() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);


    const makeCounts = data.reduce((acc, vehicle) => {
        const make = vehicle.Make;
        acc[make] = (acc[make] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        x_axis : Object.keys(makeCounts),
        y_axis : Object.values(makeCounts)
        
      };
    


    return (
        <div className='flex text-[#008080] flex-col p-1 px-2'>
            <p className='text-4xl font-bold'>Charts</p>
            <div >
                <p className='text-2xl font-thin'>Brand Vs Count</p>
                <div className='p-3'>
                    <VerticalBars chartData={chartData} />
                </div>
            </div>
        </div>
    )
}

export default Charts