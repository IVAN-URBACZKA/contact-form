import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerCard(props) {
    const [done, setDone] = useState(false);

 

    return (
        <div
            key={props.id}
            className="sm:w-[140px] md:w-[160px] xl:w-[240px] 2xl:w-[340px] drop-shadow-[5px_5px_1px_rgba(0,0,0,0.65)] ease-in duration-200 hover:drop-shadow-[20px_20px_10px_rgba(0,0,0,0.55)]"
        >
            <div className="overflow-hidden w-full outline outline-teal-400 bg-white">
                <div className={`bg-${done}-400 sm:h-[4rem] lg:h-[6.25rem] xl:h-[4rem] 2xl:h-[6.25rem] flex-initial text-center`}>
                    <div className="flex items-center h-full">
                        <h1 className="flex mx-auto align-center nor-font sm:text-[1rem] md:text-[1rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1rem]">
                            {props.name}
                        </h1>
                        

                   
                    </div>
                </div>
                <Link to={'/dashboard/messageid=' + props.id}>
          
                    <div className="sm:h-[6rem] md:h-[8rem] lg:h-[6rem] xl:h-[8rem]">
                        <div className="p-4 h-full">
                            <h6 className="line-clamp-3 sm:text-[0.8rem] md:text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem]">
                                Subject : {props.subject}
                            </h6>

                        
                        </div>
                    
                    </div>
                </Link>
                <div className="line-clamp-3 sm:text-[0.8rem] md:text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem]">

                <input onChange={() => setDone(true)} type="checkbox" checked={done} name="controlled" className="" />

              </div>            
            </div>

        </div>
    );
}
