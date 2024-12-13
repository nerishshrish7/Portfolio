import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../Api/Api';
import { queryKeys } from '../Api/Constants';

const App = () => {
    const {data, error, isLoading, isError} = useQuery({
        queryKey: [queryKeys.SERVICE2],
        queryFn: ()=>fetchData(queryKeys.SERVICE2)
      })
    
    
      if(isError)
        console.log(error)
    
      if(isLoading) return <><h1>"Loading"</h1></>

    return (
        <table className='w-[100%] border-collapse'>
            <thead>
                <tr>
                    <th className='p-3'>SN</th>
                    <th className='p-3'>Service</th>
                    <th className='p-3'>Description</th>
                    <th className='p-3'>Price</th>
                    <th className='p-3'>Provider</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#f0f0f0' }}>
                        <td className='p-3'>{index + 1}</td>
                        <td className='p-3'>{item.service}</td>
                        <td className='p-3'>{item.description}</td>
                        <td className='p-3'>{item.price}</td>
                        <td className='p-3'>{item.provider}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    
    );
    
};

export default App;
