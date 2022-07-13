import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

import {
    URL_HOME,
    URL_LOGIN,
    
} from './../../shared/constants/urls/urlConstants';
import { selectIsLogged, signOut } from './../../shared/redux-store/authenticationSlice';
import { isAdmin, isAuthenticated } from '../../shared/services/accountServices';

const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    function enterQuery(e) {
        if (e.key === 'Enter') {
            window.open('/dashboard/search=' + searchTerm.toLowerCase() + '/', '_self');
        }
    }
    function clickQuery() {
        window.open('dashboard/search=' + searchTerm.toLowerCase()  + '/', '_self');
    }


    return (
        <Disclosure as="nav" className="top-0 fixed z-50 w-full bg-white shadow-md">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                            <div>
                                <Link to={URL_HOME}>
                                   <h1 className='text-2xl	'>Asceo</h1>
                                </Link>
                            </div>

                            <div className="px-10 relative text-base bg-transparent  ">
                                    <div className="">
                                        {/* Search input area */}
                                        <input
                                            className="input-menu-search w-96"
                                            type="text"
                                            placeholder="Search..."
                                            onChange={(e) => {
                                                setSearchTerm(e.target.value);
                                            }}
                                            onKeyPress={enterQuery}
                                        ></input>

                                        {/* Search icon - button */}
                                        <button
                                            type="submit"
                                            className="absolute right-0 top-0 mt-3 mr-12"
                                            onClick={clickQuery}
                                        >
                                            <SearchIcon
                                                className="block h-6 w-full"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                         
                             


                            <div className="hidden md:flex items-center justify-end flex-1 lg:w-0">
                                <ConnectionBtn />
                            </div>

                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary 
                                    focus:outline-none transform active:scale-95 active:ring-2 active:ring-offset-2 active:ring-primary "
                                >
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        enter="transition"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Disclosure.Panel className="p-4 md:hidden ">
                            <hr />
                            <div className="p-4">
                                <ConnectionBtn />
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;

const ConnectionBtn = () => {
    const isLogged = useSelector(selectIsLogged);
    const dispatch = useDispatch();
    if (isLogged)
        return (
            <button className="ml-8 btn btn-green" onClick={() => dispatch(signOut())}>
                Sign out
            </button>
        );
    else
        return (
            <div className="flex justify-center md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 btn btn-green">
                <Link to={URL_LOGIN}>
                    <div className="link text-white">Sign in</div>
                </Link>
              
            </div>
        );
};
