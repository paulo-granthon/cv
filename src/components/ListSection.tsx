import { ReactElement } from "react";

interface ItemProps {
  item: string;
}

const Item = ({ item }: ItemProps): ReactElement => (
    <li className="items__name">
        <span className="items__circle" />
        {item}
    </li>
);

interface ListSectionProps {
    title: string;
    items: string[];
}

export const ListSection = ({ title, items }: ListSectionProps): ReactElement => {
    const splitIndex = Math.ceil(items.length / 2);
    const firstColumnItems = items.slice(0, splitIndex);
    const secondColumnItems = items.slice(splitIndex);

    return (
        <>
            <section className="hard-items section" id="items">
                <h2 className="section-title">{title}</h2>
                    <div className="items__content bd-grid">
                        <div className="items__column">
                            <ul className="items__data">
                                {firstColumnItems.map((item) => <Item key={item} item={item} />)}
                            </ul>
                        </div>
                        <div className="items__column">
                            <ul className="items__data">
                                {secondColumnItems.map((item) => <Item key={item} item={item} />)}
                            </ul>
                        </div>
                    </div>
            </section>
        </>
    );
};

