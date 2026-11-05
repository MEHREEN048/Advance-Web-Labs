
import React, { useState } from 'react';

function Toggle() {
    const [showText, setShowText] = useState(false);

    return (
        <div className="card">
            <h3>Show & Hide Text</h3>

            {showText && (
                <p className="toggle-message">
                    Welcome to my React Studio!
                </p>
            )}

            <button onClick={() => setShowText(!showText)}>
                {showText ? "Hide Text" : "Show Text"}
            </button>
        </div>
    );
}

export default Toggle;
