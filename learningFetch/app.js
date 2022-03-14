

const logUser = function(email, password){
	return new Promise((resolve, reject) =>{
		setTimeout(() => {
			console.log('now we have the data');
			if (password)
				resolve({'email': email, 'password': password});
		},2000);
		setTimeout(() =>{
			reject(new Error('password is needed'));
		}, 3000)
	})
}

const getUserVideos = function(email){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(email);
			resolve(['video1', 'video2', 'video3', 'video4']);
		}, 5000);
	})
}

const videoDetails = function(video){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('the title of the video is ' + video);
		}, 5000);
	})
}

console.log('start');

// const data = logUser('k12.naboussi@gmail.com', 'blablabla', (e)=>{
// 	console.log(e);
// 	getUserVideos(e, (el) =>{
// 		console.log(el);
// 		videoDetails(el[0], (el)=>{
// 			console.log(el);
// 		}) 
// 	})
// });

const promise = logUser('k12.naboussi@gmail.com', 'blablabla');

promise
	.then(user => {
		console.log(user);
		 return getUserVideos(user.email)
	})
	.then(videos => {
		console.log(videos);
		return videoDetails(videos[0])
	})
	.then(details => console.log(details))
	.catch(err => console.log(err.message))
console.log('End');

