export type NavItem = {
  id: string;
  label: string;
  summary: string;
};

export const navItems: NavItem[] = [
  { id: 'welcome', label: 'Welcome', summary: 'General info about the cabin' },
  { id: 'amenities', label: 'Amenities', summary: 'Wifi, kitchen, hot tub, fireplace, and more' },
  { id: 'checkout', label: 'Checkout', summary: 'Checkout checklist for departure day' },
  { id: 'activities', label: 'Activities', summary: 'Hikes and adventures around Packwood' },
  { id: 'eats', label: 'Eats & Drinks', summary: 'Local restaurants and breweries' },
];
