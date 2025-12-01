export type TContext = {
  toggleLanguage: () => void;
  language: string | null;
};

export type TNavItem = { link: string; title: string };

export type TypeItem = {
  title: string;
  img: string;
  description: string;
};
export type TMenuItems = {
  title: string;
  price: string;
  description: string;
  img: string;
};

export type TBaseDetails = {
  title: string;
  des: string;
  img: string;
};
