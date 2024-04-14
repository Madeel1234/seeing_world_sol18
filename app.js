let places = ["Capetown", "Delhi", "Faisalabad", "Bankok", "Ahmadabad"];
console.log('original' + places);
// Print your array in albhabetical order
console.log('copy' + [...places].sort());
// Show that your array in its original order by printing in it.
console.log('original' + places);
// Print reverse alphabetical
console.log('copy' + [...places].sort().reverse());
// show that your array still in its original order by printing it agagin.
console.log('copy' + [...places].sort().reverse());
//Reversre the order of your list. Print the array to show that its order has been changed
console.log('original' + places.sort());
//Reversre the order of your list again
console.log('original' + places.sort().reverse());
//Sort your array so its stored in alphabetical order
console.log('copy' + [...places].sort());
export {};
