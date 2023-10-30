import InconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'
export function Search() {
    return (
        <div className='flex items-center gap-4'>
            <Image src={InconSearch} alt="InconSearch" className='cursor-pointer'/>
            <input type="text" className='bg-transparent autline-none text-white placeholder:text-white pr-5 ' placeholder='Buscar'/>
        </div>
    )
}

export default Search