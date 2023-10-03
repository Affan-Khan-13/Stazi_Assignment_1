import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../data.json';
import Card from './card';
import { GrFormNextLink } from 'react-icons/gr'
import { GrFormPreviousLink } from 'react-icons/gr'


const Cars = ({ searchQuery }) => {
    // console.log(searchQuery);
    const { page } = useParams();
    // console.log(data)
    const [curData, setCurdata] = useState();

    useEffect(() => {
        const temp = data.cars.map((car) => {
            return car
        });
        const temp1 = temp.filter((car) => car.id == page);
        const lastTemp = temp1[0].carInsurances;
        setCurdata(lastTemp)
    }, [page, curData])
    // console.log(curData)

    const filteredData = curData?.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className='py-16'>
            <div className='flex flex-wrap justify-center gap-6'>
                {filteredData?.map((car) => (
                    <Card name={car.name} price={car.price} year={car.year} img={car.img} />
                ))}
            </div>

            <div className='flex justify-between w-full items-center'>
                <div>{`${page} of 10`}</div>
                <div className='flex gap-2 py-4'>
                    <Link to={page == 1 ? '/page/10' : `/page/${parseInt(page) - 1}`}><div className='h-max w-max rounded-xl py-2 px-2 bg-[#fff]'><GrFormPreviousLink /></div></Link>
                    {pages.map((ele) => (
                        <Link to={`/page/${ele}`}>
                            <div className={`h-max w-max rounded-xl py-1 px-3  ${ele == page ? "bg-[#455ad1] text-white" : "bg-[#fff]"}`}>
                                {ele}
                            </div>
                        </Link>
                    ))}
                    <Link to={page == 10 ? '/page/1' : `/page/${parseInt(page) + 1}`}><div className='h-max w-max rounded-xl py-2 px-2 bg-[#fff]'><GrFormNextLink /></div></Link>
                </div>
            </div>
        </div>
    )
}

export default Cars
