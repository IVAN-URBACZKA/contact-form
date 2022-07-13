import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { isAdmin } from '../shared/services/accountServices';

function SingleMessageView(props) {


    const params = useParams();
    const [item, setItem] = useState('');

    function handleClickDelete(e) {
        e.preventDefault();
        axios
            .post('https://localhost:8000/api/delete/message/' + params.id)
            .then((res) => {
                window.open("http://localhost:3000/dashboard","_self")
            })

            .catch((err) => {
                if (err) {
                    alert('probleme');
                }
                console.error(err);
            });
    }



    useEffect(() => {
        const fetchProducts = async () => {
            //console.log(typeof parseInt(params.id));
            const res = await axios.get(
                'https://localhost:8000/api/message/' + params.id,
            );
            setItem(res.data);
        };
        fetchProducts();
    }, []);

    return (
        <section className="">
        <div className="grid justify-center  my-10">
            <div className="min-w-screen max-h-screen bg-teal-400 flex items-center  lg:p-10 overflow-hidden relative">
                <div className="w-full rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/3   md:mb-0">
                            <div className="relative">
                                
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5 nor-font">
                                    {item.subject}
                                </h1>
                                <p className="text-sm">{item.description}</p>
                            </div>

                            <div>
                                <div className="inline-block align-bottom mr-5">
                                    <span className="font-bold text-xl leading-none align-baseline nor-font">
                                        {item.name}
                                    </span>
                                  
                                </div>
                                <div className="inline-block align-bottom">
                                <button onClick={handleClickDelete} className="btn btn-red bg-red px-4 py-2 text-sm text-white-700 link">
                        Supprimer
                    </button>
                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
           
                <div className="flex justify-center">
                    
                </div>
           
        </div>
    </section>

    );
}

export default SingleMessageView;