module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
	server.namespace('/api', function() {
		
		// Return fixture data for '/api/schedules/:id'
		server.get('/weeks', function(req, res) {
			console.log(req.params);
			var weeks = {
					  "weeks": [{
					  	"id": 1,
					  	"slug": '1',
					  	"startDate": new Date('2014-1-1'),
					  	"endDate": new Date('2014-1-7'),
					  	"days": ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
					  },
					  {
					  	"id": 1,
					  	"slug": '2',
					  	"startDate": new Date('2014-1-8'),
					  	"endDate": new Date('2014-1-14'),
					  	"days": ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
					  }],
					  "days": [
					  	{
					  		"id": 1,
					  		"slug": 'monday',
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
					  		"id": 2,
					  		"slug": 'tuesday',
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
					  		"id": 3,
					  		"slug": 'wednesday',
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
					  		"id": 4,
					  		"slug": 'thursday',
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
					  		"id": 5,
					  		"slug": 'friday',
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
					  		"id": 6,
					  		"slug": 'saturday',
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
					  		"id": 7,
					  		"slug": 'sunday',
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
					  		"id": 1,
					  		"name": "Test Routine",
					  		"workouts": [1, 2]
					  	}
					  ],
					  
					  "workouts": [
					  	{
					  		"id": 1,
					  		"name": "Workout 1",
					  		"entry": 1
					  	},
					  	{
					  		"id": 2,
					  		"name": "Workout 2",
					  		"entry": 2
					  	}
					  ],
					  "entries": [
					  	{
					  		"id": 1,
					  		"completed": true,
					  		"sets": [1]
					  	},
					  	{
					  		"id": 2,
					  		"completed": true,
					  		"sets": []
					  	}
					  ],
					  "sets": [
			  			{
			  				"id": 1,
			  				"set_number": 1,
			  				"reps": 10,
			  				"weight": 100
			  			}
			  		]
					};

			res.send(weeks);
		});

		// Return fixture data for '/api/schedules/:id'
		server.get('/weeks/:id', function(req, res) {
			console.log(req.params);
			var week = {
					  "weeks": {
					  	"id": 1,
					  	"slug": '1',
					  	"startDate": new Date('2014-2-3'),
					  	"endDate": new Date('2014-2-9'),
					  	"days": ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
					  },
					  "days": [
					  	{
					  		"id": 1,
					  		"slug": 'sunday',
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
					  		"id": 2,
					  		"slug": 'monday',
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
					  		"id": 3,
					  		"slug": 'tuesday',
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
					  		"id": 4,
					  		"slug": 'wednesday',
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
					  		"id": 5,
					  		"slug": 'thursday',
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
					  		"id": 6,
					  		"slug": 'friday',
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
					  		"id": 7,
					  		"slug": 'saturday',
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
					  		"id": 1,
					  		"name": "Test Routine",
					  		"workouts": [1, 2]
					  	}
					  ],
					  
					  "workouts": [
					  	{
					  		"id": 1,
					  		"name": "Workout 1",
					  		"entry": 1
					  	},
					  	{
					  		"id": 2,
					  		"name": "Workout 2",
					  		"entry": 2
					  	}
					  ],
					  "entries": [
					  	{
					  		"id": 1,
					  		"completed": true,
					  		"sets": [1]
					  	},
					  	{
					  		"id": 2,
					  		"completed": true,
					  		"sets": []
					  	}
					  ],
					  "sets": [
			  			{
			  				"id": 1,
			  				"set_number": 1,
			  				"reps": 10,
			  				"weight": 100
			  			}
			  		]
					};

			res.send(week);
		});

		server.get('/days/:id', function(req, res) {
			console.log(req.params);
			var day = {
					  "days": {
				  		"id": 1,
				  		"slug": "monday",
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
					  		"name": "Workout 1",
					  		"entry": 1
					  	},
					  	{
					  		"id": 2,
					  		"name": "Workout 2",
					  		"entry": 2
					  	}
					  ],
					  "entries": [
					  	{
					  		"id": 1,
					  		"completed": true,
					  		"sets": [1]
					  	},
					  	{
					  		"id": 2,
					  		"completed": true,
					  		"sets": []
					  	}
					  ],
					  "sets": [
			  			{
			  				"id": 1,
			  				"set_number": 1,
			  				"reps": 10,
			  				"weight": 100
			  			}
			  		]
					};

			res.send(day);
		});

		server.put('/days/:id', function(req, res) {
			console.log(req.params.id, req.body);
			var json = req.body;
			json.day.slug = req.params.id;
			res.json(200, json);
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
					  		"name": "Workout 1",
					  		"entry": 1
					  	},
					  	{
					  		"id": 2,
					  		"name": "Workout 2",
					  		"entry": 2
					  	}
					  ],
					  "entries": [
					  	{
					  		"id": 1,
					  		"completed": true,
					  		"sets": [1]
					  	},
					  	{
					  		"id": 2,
					  		"completed": true,
					  		"sets": []
					  	}
					  ],
					  "sets": [
			  			{
			  				"id": 1,
			  				"set_number": 1,
			  				"reps": 10,
			  				"weight": 100
			  			}
			  		]
					};

			res.send(routines);
		});
		
		server.put('/routines/:id', function(req, res) {
			console.log(req.params.id, req.body);
			var json = req.body;
			json.routine.id = req.params.id;
			res.json(200, json);
		});
		
		server.get('/workouts', function(req, res) {
			console.log(req.query);
			var workouts = {
					  "workouts": [
					  	{
					  		"id": 1,
					  		"name": "Workout 1"
				  		},
				  		{
					  		"id": 2,
					  		"name": "Workout 2"
				  		},
				  		{
					  		"id": 3,
					  		"name": "Bench Press"
				  		},
				  		{
					  		"id": 4,
					  		"name": "Curl"
				  		}
				  	]
					};

			res.send(workouts);
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
		
		server.put('/workouts/:id', function(req, res) {
			console.log(req.params.id, req.body);
			var json = req.body;
			json.workout.id = req.params.id;
			res.json(200, json);
		});
		
		server.put('/entries/:id', function(req, res) {
			console.log(req.params.id, req.body);
			var json = req.body;
			json.entry.id = req.params.id;
			res.json(200, json);
		});
		
		server.post('/sets', function(req, res) {
			console.log(req.body)
			var json = req.body;
			json.set.id = req.body.set.set_number + 100;
			res.json(200, json);
		});
		
		server.put('/sets/:id', function(req, res) {
			console.log(req.params.id, req.body);
			var json = req.body;
			json.set.id = req.params.id;
			res.json(200, json);
		});

	});

};