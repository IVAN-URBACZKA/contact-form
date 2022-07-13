import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomerCard from '../shared/components/container/CustomerCard';



export default function DashboardView() {
    
    const [items, setItem] = useState([]);
    


    useEffect(() => {
        const fetchProducts = async () => {

            const res = await axios.get(
                'https://localhost:8000/api/message/search/' + email ,

            );

            setItem(res.data);
        };
        fetchProducts();
    }, []);


    return (
        <section className="">


            {/* <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                {items.map((item) => (
                    <div key={item.id}>
                  <CustomerCard
                                    name={item.name}
                                    email={item.email}
                                    subject={item.subject}
                                    description={item.description}
                                    id={item.id}                                />

                    </div>
                ))}
            </div> */}
        </section>

    );
}
