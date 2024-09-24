import React, { useState } from 'react';

const CreateBenefits = () => {
    const [benefitsName, setBenefitsName] = useState('');
    const [benefitsDescription, setBenefitsDescription] = useState('');
    const [benefitsType, setBenefitsType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="benefitsName">Benefits Name:</label>
                <input
                    type="text"
                    id="benefitsName"
                    placeholder="Enter Benefit name"
                    value={benefitsName}
                    onChange={(e) => setBenefitsName(e.target.value)}
                />
                <br />
                
                <label htmlFor="benefitsDescription">Benefits Description:</label>
                <input
                    type="text"
                    id="benefitsDescription"
                    placeholder="Enter Description"
                    value={benefitsDescription}
                    onChange={(e) => setBenefitsDescription(e.target.value)}
                />
                <br />
                
                <label htmlFor="benefitsType">Benefits Type:</label>
                <select
                    id="benefitsType"
                    value={benefitsType}
                    onChange={(e) => setBenefitsType(e.target.value)}
                >
                    <option value="">Select Type</option>
                    <option value="Compensation">Compensation</option>
                    <option value="Health">Health</option>
                    <option value="Retirement">Retirement</option>
                    <option value="Financial">Financial</option>
                    <option value="Worklife Balance">Worklife Balance</option>
                </select>
                <br />
                
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateBenefits;
