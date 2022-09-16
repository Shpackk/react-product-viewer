export type Product = {
  group: string;
  flavour: string;
  amount: number;
};

const fetchProductGroups = () => {
  const dummyData = ['EB-1500', 'EB-800', 'EB-3000', 'EB-4000', 'EB-2500'];
  return dummyData;
};

const fetchSingleGroup = (group: string) => {
  return allGroups.filter((product) => product.group === group);
};

const allGroups: Product[] = [
  { group: 'EB-1500', flavour: 'lemonEB1500', amount: 20 },
  { group: 'EB-1500', flavour: 'lemon', amount: 20 },
  { group: 'EB-1500', flavour: 'lemon', amount: 20 },
  { group: 'EB-1500', flavour: 'lemon', amount: 20 },
  { group: 'EB-1500', flavour: 'lemon', amount: 20 },
  { group: 'EB-1500', flavour: 'lemon', amount: 20 },
  { group: 'EB-800', flavour: 'lemonEB800', amount: 20 },
  { group: 'EB-800', flavour: 'lemon', amount: 20 },
  { group: 'EB-800', flavour: 'lemon', amount: 20 },
  { group: 'EB-800', flavour: 'lemon', amount: 20 },
  { group: 'EB-800', flavour: 'lemon', amount: 20 },
  { group: 'EB-800', flavour: 'lemon', amount: 20 },
  { group: 'EB-800', flavour: 'lemon', amount: 20 },
  { group: 'EB-800', flavour: 'lemon', amount: 20 },
  { group: 'EB-3000', flavour: 'lemonEB3000', amount: 20 },
  { group: 'EB-3000', flavour: 'lemon', amount: 20 },
  { group: 'EB-3000', flavour: 'lemon', amount: 20 },
  { group: 'EB-3000', flavour: 'lemon', amount: 20 },
  { group: 'EB-4000', flavour: 'lemon', amount: 20 },
  { group: 'EB-4000', flavour: 'lemonEB4000', amount: 20 },
  { group: 'EB-4000', flavour: 'lemon', amount: 20 },
  { group: 'EB-4000', flavour: 'lemon', amount: 20 },
  { group: 'EB-2500', flavour: 'lemonEB2500', amount: 20 },
  { group: 'EB-2500', flavour: 'lemon', amount: 20 },
  { group: 'EB-2500', flavour: 'lemon', amount: 20 },
  { group: 'EB-2500', flavour: 'lemon', amount: 20 },
  { group: 'EB-2500', flavour: 'lemon', amount: 20 },
];

export { fetchProductGroups, fetchSingleGroup };
