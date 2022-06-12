export const formatWeight = ( weight ) => {
    const config = new Intl.NumberFormat('en-US', { 
        style: 'unit',
        unit: 'kilogram',
        unitDisplay: 'short',
        maximumFractionDigits: 0,
    });

    return config.format(weight);
};