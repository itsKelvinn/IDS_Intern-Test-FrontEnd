"use client";
import React, { useState } from 'react';
import { postTransaction } from '@/api/TransactionApi';
import { SecondaryButton } from '@/components/Buttons';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
    const [formData, setFormData] = useState({
        productID: '',
        customerName: '',
        amount: '',
        status: '',
        createBy: ''
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        postTransaction(formData)
        .then((response) => {
            console.log('Form submitted successfully', response);
        })
        .catch((error) => {
            console.error('Error submitting form', error);
        });
    };

    const createDataClick = () => {
        console.log('Primary Button Clicked');
        router.push('/'); 
    };

  return (
    <>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20">
            <SecondaryButton text='Back' onClick={createDataClick}/>        
            <h1 className="text-2xl font-bold mb-4 mt-10">Add Data</h1>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Product ID:
                <input
                    type="text"
                    name="productID"
                    value={formData.productID}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Customer Name:
                <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Amount:
                <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Status:
                <input
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Created By:
                <input
                    type="text"
                    name="createBy"
                    value={formData.createBy}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                </label>
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit
            </button>
        </form>
    </>
  );
};

export default Page;
