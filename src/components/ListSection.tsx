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
  subText?: string;
  items: string[];
}

export const ListSection = ({
  title,
  subText,
  items,
}: ListSectionProps): ReactElement => {
  return (
    <>
      <section className="hard-items section" id="items">
        <h2 className="section-title">{title}</h2>
        {subText && <p className="section-subtitle">{subText}</p>}
        <div className="items__content bd-grid">
          <ul className="items__data">
            {items.map((item) => (
              <Item key={item} item={item} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
