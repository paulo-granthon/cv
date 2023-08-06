import { ReactElement } from 'react';

interface DisclaimerProps {
    newUrl: string,
}

export const Disclaimer = ({ newUrl }: DisclaimerProps): ReactElement => {
    return (
        <section className="section">
            <h2 className="section-title"><strong>Important Notice: </strong></h2>
            <p>This version of the website (Vercel) will no longer receive updates.</p>
            <p>
                Please visit the updated version hosted with AWS at: <a href={newUrl}> https://pgranthon.dev</a>.
            </p>
        </section>
    )
}
