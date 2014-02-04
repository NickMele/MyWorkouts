module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
	server.namespace('/api', function() {

		// Return fixture data for '/api/schedules/:id'
		server.get('/weeks/:id', function(req, res) {
			var week = {
					  "weeks": {
					  	"id": 1,
					  	"startDate": new Date('2014-2-3'),
					  	"endDate": new Date('2014-2-10'),
					  	"days": [0, 1, 2, 3, 4, 5, 6]
					  },
					  "days": [
					  	{
					  		"id": 0,
					  		"date": new Date(),
					  		"dayOfWeek": 0,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [0],
					  		"workouts": [0, 1]
					  	},
					  	{
					  		"id": 1,
					  		"date": new Date(),
					  		"dayOfWeek": 1,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [0],
					  		"workouts": [0, 1]
					  	},
					  	{
					  		"id": 2,
					  		"date": new Date(),
					  		"dayOfWeek": 2,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [0],
					  		"workouts": [0, 1]
					  	},
					  	{
					  		"id": 3,
					  		"date": new Date(),
					  		"dayOfWeek": 3,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [0],
					  		"workouts": [0, 1]
					  	},
					  	{
					  		"id": 4,
					  		"date": new Date(),
					  		"dayOfWeek": 4,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [0],
					  		"workouts": [0, 1]
					  	},
					  	{
					  		"id": 5,
					  		"date": new Date(),
					  		"dayOfWeek": 5,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [0],
					  		"workouts": [0, 1]
					  	},
					  	{
					  		"id": 6,
					  		"date": new Date(),
					  		"dayOfWeek": 6,
					  		"totalRoutines": 1,
					  		"totalWorkouts": 2,
					  		"routines": [0],
					  		"workouts": [0, 1]
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

	});

};