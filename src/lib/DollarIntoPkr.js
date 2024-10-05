export const convertDollarToPkr = (dollars) => {
    const conversionRate = 270; // This is a sample rate, replace it with an API rate for dynamic data
    const pkr = dollars * conversionRate;
    return pkr;
};