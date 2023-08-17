import { ReactElement } from "react";
import { Helmet } from "react-helmet";

interface MetaTagsProps {
    name: string;
    ocupation: string;
    description: string;
}

export const MetaTags = ({ name, ocupation, description }: MetaTagsProps): ReactElement => {
    return (
        <Helmet>
            <title>{name} - {ocupation}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
};
