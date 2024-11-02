import React from 'react';
import MainDrop from './components/MainDrop';
import Form from './components/Form';

export default function Home() {
    return (
        <div>
            <MainDrop />
            <Form /> {/* Use the Form component */}
        </div>
    );
}