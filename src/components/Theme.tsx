import { ReactElement, useState } from 'react';

export const Theme = (): ReactElement => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const toggleTheme = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
        document.body.classList.toggle("dark-theme");
    };
    return (
        <button 
            className="actions "
            title=""
            onClick={toggleTheme}
        >
            {darkMode? (
                <i className='bx bx-moon'/>
            ) : (
                <i className='bx bx-sun'/>
            )}
        </button>
    )
}
