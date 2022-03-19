const {add} = require('./helpers/post');

const tPost = {
	author: 'Artem',
	defs: {
		main1: 'main1',
		main2: 'main2'
	}
};

const fnAddPost = (tPost, sMessage, dateAdd = Date()) => {
	
	const newPost = JSON.parse(JSON.stringify(tPost));
	
	newPost.message = sMessage;
	newPost.dateAdd = dateAdd;
	newPost.defs.main1 = 'Here';
	
	return newPost;
}
const aPost = fnAddPost(tPost, 'Hi there!');

console.log('NEW POST:');
console.log(aPost);
console.log('SRC POST:');
console.log(tPost);

console.log(add(10, 20));