export function roundPrice(price) {
    // Remove the dollar sign and convert to a float
    let number = parseFloat(price.replace('$', ''));
    // Round to the nearest integer
    return Math.round(number);
} 