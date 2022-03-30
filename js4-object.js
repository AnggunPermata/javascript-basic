const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
theList.shift();
theList.unshift("FIRST");
theList[3]="hello world";
theList[2]="MIDDLE";
theList.push("LAST");
theList.splice(4, 4); // delete elements of array (index of element, number of elements to delete)
console.log(theList);