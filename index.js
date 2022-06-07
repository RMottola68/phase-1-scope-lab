var customerName = 'bob';
const leastFavoriteCustomer = '';
// var bestCustomer;

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    var bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'literally everyone';
    return leastFavoriteCustomer;
}