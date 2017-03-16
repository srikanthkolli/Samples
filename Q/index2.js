var Q = require('q');

console.log("Hi, how are you?");

function lazzyPerson1(relation){
	var deferred = Q.defer();

	var interval = setInterval(function(){
		deferred.notify("i am waiting....");
	}, 1000);

	setTimeout(function(){
		clearInterval(interval);

		if(relation == 'friend')
			deferred.resolve("Hello i am lazzy!!!!!!!!");
		else
			deferred.reject("i wont respond to you!!!!!!!!!!!!");

	}, 5000);

	return deferred.promise;	
}


function lazzyPerson2(relation){
	var deferred = Q.defer();

	var interval = setInterval(function(){
		deferred.notify("i am waiting....");
	}, 1000);

	setTimeout(function(){
		clearInterval(interval);

		if(relation == 'friend')
			deferred.resolve("Hello i am lazzy!!!!!!!!");
		else
			deferred.reject("i wont respond to you!!!!!!!!!!!!");

	}, 2000);

	return deferred.promise;	
}


Q.all([lazzyPerson1('friend'), lazzyPerson2('stranger')]).then(function(response){
	console.log(response[0]);
	console.log(response[1]);
});
