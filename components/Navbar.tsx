import React from 'react';
import { useRouter } from 'next/navigation';
import { PrimaryButton} from './Buttons'; 

const ExampleComponent = () => {
  const router = useRouter();

  const createDataClick1 = () => {
    console.log('Primary Button Clicked');
    router.push('/add-data'); 
  };

  const createDataClick2 = () => {
    console.log('Primary Button Clicked');
    router.push('/edit-data'); 
  };

  return (
    <div className='flex justify-between mb-10'>
        <h1 className="text-2xl font-bold mb-4">Data Grouped by Year and Month</h1>
        <div className='flex justify-between w-64'>
          <PrimaryButton onClick={createDataClick1} text="Create Data" />
          <PrimaryButton onClick={createDataClick2} text="Edit Data" />
        </div>
    </div>
  );
};

export default ExampleComponent;
