import ServiceCard from './ServiceCard'
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../Api/Api';
import { queryKeys } from '../Api/Constants';

const Service = () => {
  const {data, error, isLoading, isError} = useQuery({
    queryKey: [queryKeys.SERVICE],
    queryFn: ()=>fetchData(queryKeys.SERVICE)
  })


  if(isError)
    console.log(error)

  if(isLoading) return <><h1>"Loading"</h1></>

  return (
    <div className='h-auto w-[100%] bg-[black] flex flex-col items-center'>
      <h1 className='text-[3vw] text-white font-semibold'>Our Services</h1>
      <div className='h-auto w-[80%] flex flex-wrap justify-center items-center gap-[5%] mt-[3vh]'>

        {data.length > 0 ? data.map((item, i)=>{
          return(
            <>
            <ServiceCard service={item.service} description={item.description} price={item.price} provider={item.provider}/>
            </>
          )
        }): <><h1 className='text-white'>Loading....</h1></>}
        
      </div>
    </div>
  )
}

export default Service
