export default (assets, { text, sortBy, startDate, endDate }) => {
    return assets.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.date >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.date <= endDate;
        const textMatch = text ? expense.description.toLowerCase().includes(text.toLowerCase()) : true;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        switch (sortBy) {
            case "date":
                return a.createdAt < b.createdAt ? 1 : -1;
            case "amount":
                return a.amount < b.amount ? 1 : -1;
        }
    })
};