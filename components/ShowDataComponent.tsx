import React, { useState, useEffect } from 'react';
import {fetchAllTransaction} from '@/api/TransactionApi';

interface TransactionData {
    id: number;
    productID: number;
    amount: number;
    productName: string;
    customerName : string;
    status: number;
    transactionDate: string;
    createBy: string;
    createOn: string;
}

interface GroupedData {
    [key: string]: TransactionData[];
}

const ShowDataComponent = () => {
    const [groupedData, setGroupedData] = useState<GroupedData>({});
    const [n , setn] = useState("");

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchAllTransaction();
                const data = result?.data || [];

                const grouped = data.reduce((acc: GroupedData, item: TransactionData) => {
                    const date = new Date(item.transactionDate);
                    const year = date.getFullYear();
                    const month = date.toLocaleString('default', { month: 'long' });
                    const key = `${year}-${month}`;
                    
                    if (!acc[key]) {
                        acc[key] = [];
                    }
                    acc[key].push(item);
                    return acc;
                }, {} as GroupedData);

                setGroupedData(grouped);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);


    return (
        <>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Id</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Create By</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.keys(groupedData).map((key) => (
              <React.Fragment key={key}>
                <tr className="h-10">
                  <td colSpan={7} className="px-6 py-4 border whitespace-nowrap font-bold bg-gray-100">{"Year - Month : " + key}</td>
                </tr>
                {groupedData[key]?.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border">{item.id}</td>
                    <td className="px-6 py-4 border">{item.productName}</td>
                    <td className="px-6 py-4 border">{item.customerName}</td>
                    <td className="px-6 py-4 border">{item.amount}</td>
                    <td className="px-6 py-4 border">{item.transactionDate}</td>
                    <td className="px-6 py-4 border">{item.status}</td>
                    <td className="px-6 py-4 border">{item.createBy}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {console.log(groupedData)}
      </>
      
    );
};

export default ShowDataComponent;
