
const fetchProductGroups = () => {
    const dummyData = ['EB-1500', 'EB-800', 'EB-3000', 'EB-4000', 'EB-2500']
    return dummyData
}


const fetchSingleGroup = (group: string) => {
    return allGroups;
}

const allGroups = [
    {name: "EB-1500", flavour: "lemon", amount: "20"},
    {name: "EB-1500", flavour: "lemon", amount: "20"},
    {name: "EB-1500", flavour: "lemon", amount: "20"},
    {name: "EB-1500", flavour: "lemon", amount: "20"},
    {name: "EB-1500", flavour: "lemon", amount: "20"},
    {name: "EB-1500", flavour: "lemon", amount: "20"},
    {name: "EB-800", flavour: "lemon", amount: "20"},
    {name: "EB-800", flavour: "lemon", amount: "20"},
    {name: "EB-800", flavour: "lemon", amount: "20"},
    {name: "EB-800", flavour: "lemon", amount: "20"},
    {name: "EB-800", flavour: "lemon", amount: "20"},
    {name: "EB-800", flavour: "lemon", amount: "20"},
    {name: "EB-800", flavour: "lemon", amount: "20"},
    {name: "EB-800", flavour: "lemon", amount: "20"},
    {name: "EB-3000", flavour: "lemon", amount: "20"},
    {name: "EB-3000", flavour: "lemon", amount: "20"},
    {name: "EB-3000", flavour: "lemon", amount: "20"},
    {name: "EB-3000", flavour: "lemon", amount: "20"},
    {name: "EB-4000", flavour: "lemon", amount: "20"},
    {name: "EB-4000", flavour: "lemon", amount: "20"},
    {name: "EB-4000", flavour: "lemon", amount: "20"},
    {name: "EB-4000", flavour: "lemon", amount: "20"},
    {name: "EB-2500", flavour: "lemon", amount: "20"},
    {name: "EB-2500", flavour: "lemon", amount: "20"},
    {name: "EB-2500", flavour: "lemon", amount: "20"},
    {name: "EB-2500", flavour: "lemon", amount: "20"},
    {name: "EB-2500", flavour: "lemon", amount: "20"},
]

export {fetchProductGroups, fetchSingleGroup}