import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import DataTables from '../components/Tables/DataTables';

function Home() {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);
  

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='flex text-[#008080] flex-col p-1 px-2'>

      <p className='text-4xl font-bold'>Tables</p>
      <div >
        <p className='text-2xl font-thin'>Total Record Data</p>
        <div className='p-3'>
          <DataTables data={data} />
        </div>
      </div>
    </div>
  )
}

export default Home