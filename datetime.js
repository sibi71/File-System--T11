


const dateObject = new Date();
// current date
// adjust 0 before single digit date
const date = (`0 ${dateObject.getDate()}`).slice(-2);
 
// current month
const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
 
// current year
const year = dateObject.getFullYear();
 
// current hours
const hours = dateObject.getHours();

// hours
// const gethours = hours > 12 ? hours-=12 : hours;
 
// current minutes
const minutes = dateObject.getMinutes();
 
// current seconds
const seconds = dateObject.getSeconds();
 
// prints date & time in YYYY-MM-DD HH:MM:SS format

// console.log(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`);

const dt=`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
const fname =`${date}-${hours}_${minutes}`;

 module.exports={dt, fname};

