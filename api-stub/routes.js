module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
	server.namespace('/api', function() {
		
		// Return fixture data for '/api/schedules/:id'
		server.get('/weeks', function(req, res) {
			console.log(req.params);
			var weeks = {
					  "weeks": {
					  	"id": 1,
					  	"startDate": new Date('2014-2-3'),
					  	"short_date": '2014-2-3',
					  	"endDate": new Date('2014-2-9'),
					  	"days": [0, 1, 2, 3, 4, 5, 6]
					  },
					  "days": [
					  	{
					  		"id": 0,
					  		"date": new Date('2014-2-3'),
					  		"dayOfWeek": 0,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "completed",
					  		"currentDay": false
					  	},
					  	{
					  		"id": 1,
					  		"date": new Date('2014-2-4'),
					  		"dayOfWeek": 1,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "skipped",
					  		"currentDay": false
					  	},
					  	{
					  		"id": 2,
					  		"date": new Date('2014-2-5'),
					  		"dayOfWeek": 2,
					  		"totalRoutines": 0,
					  		"totalWorkouts": 0,
					  		"routines": [],
					  		"workouts": [],
					  		"status": "current",
					  		"currentDay": true
					  	},
					  	{
					  		"id": 3,
					  		"date": new Date('2014-2-6'),
					  		"dayOfWeek": 3,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "upcoming",
					  		"currentDay": false
					  	},
					  	{
					  		"id": 4,
					  		"date": new Date('2014-2-7'),
					  		"dayOfWeek": 4,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "upcoming",
					  		"currentDay": false
					  	},
					  	{
					  		"id": 5,
					  		"date": new Date('2014-2-8'),
					  		"dayOfWeek": 5,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "upcoming",
					  		"currentDay": false
					  	},
					  	{
					  		"id": 6,
					  		"date": new Date('2014-2-9'),
					  		"dayOfWeek": 6,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "upcoming",
					  		"currentDay": false
					  	}
					  ],
					  
					  "routines": [
					  	{
					  		"id": 0,
					  		"name": "Test Routine",
					  		"workouts": [0, 1]
					  	}
					  ],
					  
					  "workouts": [
					  	{
					  		"id": 0,
					  		"name": "Workout 1"
					  	},
					  	{
					  		"id": 0,
					  		"name": "Workout 2"
					  	}
					  ]
					};

			res.send(weeks);
		});

		// Return fixture data for '/api/schedules/:id'
		server.get('/weeks/:id', function(req, res) {
			console.log(req.params);
			var week = {
					  "weeks": [{
					  	"id": 1,
					  	"startDate": new Date('2014-2-3'),
					  	"short_date": '2014-2-3',
					  	"endDate": new Date('2014-2-9'),
					  	"days": [0, 1, 2, 3, 4, 5, 6]
					  }],
					  "days": [
					  	{
					  		"id": 0,
					  		"date": new Date('2014-2-3'),
					  		"dayOfWeek": 0,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "completed",
					  		"currentDay": false
					  	},
					  	{
					  		"id": 1,
					  		"date": new Date('2014-2-4'),
					  		"dayOfWeek": 1,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "skipped",
					  		"currentDay": false
					  	},
					  	{
					  		"id": 2,
					  		"date": new Date('2014-2-5'),
					  		"dayOfWeek": 2,
					  		"totalRoutines": 0,
					  		"totalWorkouts": 0,
					  		"routines": [],
					  		"workouts": [],
					  		"status": "current",
					  		"currentDay": true
					  	},
					  	{
					  		"id": 3,
					  		"date": new Date('2014-2-6'),
					  		"dayOfWeek": 3,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "upcoming",
					  		"currentDay": false
					  	},
					  	{
					  		"id": 4,
					  		"date": new Date('2014-2-7'),
					  		"dayOfWeek": 4,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "upcoming",
					  		"currentDay": false
					  	},
					  	{
					  		"id": 5,
					  		"date": new Date('2014-2-8'),
					  		"dayOfWeek": 5,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "upcoming",
					  		"currentDay": false
					  	},
					  	{
					  		"id": 6,
					  		"date": new Date('2014-2-9'),
					  		"dayOfWeek": 6,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [1],
					  		"workouts": [1, 2],
					  		"status": "upcoming",
					  		"currentDay": false
					  	}
					  ],
					  
					  "routines": [
					  	{
					  		"id": 0,
					  		"name": "Test Routine",
					  		"workouts": [0, 1]
					  	}
					  ],
					  
					  "workouts": [
					  	{
					  		"id": 0,
					  		"name": "Workout 1"
					  	},
					  	{
					  		"id": 0,
					  		"name": "Workout 2"
					  	}
					  ]
					};

			res.send(week);
		});

		server.get('/days/:id', function(req, res) {
			console.log(req.params);
			var day = {
					  "days": {
				  		"id": 0,
				  		"date": new Date(),
				  		"dayOfWeek": 0,
				  		"totalRoutines": 1,
				  		"totalWorkouts": 2,
				  		"routines": [1],
				  		"workouts": [1, 2],
				  		"status": "completed",
				  		"currentDay": false
				  	},
					  
					  "routines": [
					  	{
					  		"id": 1,
					  		"name": "Test Routine",
					  		"workouts": [1, 2]
					  	}
					  ],
					  
					  "workouts": [
					  	{
					  		"id": 1,
					  		"name": "Workout 1"
					  	},
					  	{
					  		"id": 2,
					  		"name": "Workout 2"
					  	}
					  ]
					};

			res.send(day);
		});
		
		server.get('/routines', function(req, res) {
			var routines = {
					  "routines": [
					  	{
					  		"id": 1,
					  		"name": "Test Routine",
					  		"workouts": [1, 2]
					  	}
					  ],
					  
					  "workouts": [
					  	{
					  		"id": 1,
					  		"name": "Workout 1"
					  	},
					  	{
					  		"id": 2,
					  		"name": "Workout 2"
					  	}
					  ]
					};

			res.send(routines);
		});
		
		server.get('/workouts/:id', function(req, res) {
			console.log(req.params);
			var workout = {
					  "workouts": {
				  		"id": 1,
				  		"name": "Workout 1"
				  	}
					};

			res.send(workout);
		});

	});

};