var Q = require('q');

console.log("Hi, how are you?");

function lazzyPerson(relation){
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


Q.when(lazzyPerson('stranger')).then(function(fullfilledResp){
	console.log(fullfilledResp);
}, function(rejectedResp){
	console.log("REJECTED:" + rejectedResp);
}, function(progress){
	console.log("PROGRESS:" + progress);
});
