const _=require('lodash');

const txtVal='abcdef';

const charUp= _.upperFirst('fred');

const charUpt= _.upperFirst(txtVal);

console.log(charUp, charUpt);

// adding a line for a commit