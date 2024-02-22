import React, { useState } from 'react';
import MenuApp from './MenuApp';
import './Mainscreen.css'; // Import a CSS file for styling

const Mainscreen = () => {
    const [selectedOption, setSelectedOption] = useState('.');
    const [buttonsVisible, setButtonsVisible] = useState(true);

    const renderContent = () => {
        switch (selectedOption) {
            case 'option1':
                return <MenuApp />;
            case 'option2':
                return <div>This is content for option 2</div>;
            case 'option3':
                return <div>This is content for option 3</div>;
            case 'option4':
                return <div>This is content for option 4</div>;
            default:
                return null;
        }
    };

    const handleButtonClick = (option) => {
        setSelectedOption(option === selectedOption ? '.' : option);
        setButtonsVisible(false);
    };

    const handleGoBack = () => {
        setSelectedOption('.');
        setButtonsVisible(true);
    };

    return (
        <div className="mainscreen-container">
            {selectedOption !== '.' && (
                <button className="go-back-button" onClick={handleGoBack}>
                    Go Back
                </button>
            )}

            <div className={`button-grid ${buttonsVisible ? 'visible' : 'hidden'}`}>
                <div className={`button ${selectedOption === 'option1' ? 'selected' : ''}`} onClick={() => handleButtonClick('option1')}>Option 1</div>
                <div className={`button ${selectedOption === 'option2' ? 'selected' : ''}`} onClick={() => handleButtonClick('option2')}>Option 2</div>
                <div className={`button ${selectedOption === 'option3' ? 'selected' : ''}`} onClick={() => handleButtonClick('option3')}>Option 3</div>
                <div className={`button ${selectedOption === 'option4' ? 'selected' : ''}`} onClick={() => handleButtonClick('option4')}>Option 4</div>
            </div>

            {renderContent()}
        </div>
    );
};

export default Mainscreen;
