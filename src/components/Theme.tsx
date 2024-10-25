import { ReactElement } from "react";

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export const Theme = ({ theme, toggleTheme }: ThemeProps): ReactElement => {
  return (
    <button className="actions" title="Change theme" onClick={toggleTheme}>
      {theme === "1" ? (
        <i className="bx bx-moon" />
      ) : (
        <i className="bx bx-sun" />
      )}
    </button>
  );
};
