// const greet = (name) => {
//     console.log(`hello ${name}`);
//    };
   
//    greet('mario');
//    greet('luigi');
//    greet('link');
//    greet('link');

//explicitly import the styleBody and addTitle functions from the dom.js file 
import { styleBody, addTitle, contact} from './dom';

console.log('index file')
addTitle('test');
styleBody(); 
console.log(contact);

export { styleBody, addTitle, contact };