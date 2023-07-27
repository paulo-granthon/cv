import { ReactElement } from 'react';


interface LocalizationProps {
    setLocalization: () => void,
}

export const Localization = ({ setLocalization }: LocalizationProps): ReactElement => {
    return (
        <button
            className="actions material-symbols-outlined">
            public
        </button>
    );
}
