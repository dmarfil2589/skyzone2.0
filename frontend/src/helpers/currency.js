export const formatWithoutDecimals = ( amount ) => {
    const config = new Intl.NumberFormat('en-US', { 
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });

    return config.format(amount);
};

export const formatCurrency = ( amount ) => {
    const config = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return config.format( amount );
}