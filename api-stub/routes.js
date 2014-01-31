module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
	server.namespace('/api', function() {

		// Return fixture data for '/api/schedules/:id'
		server.get('/schedules/:id', function(req, res) {
			var post = {
					  "schedule": {
					    "id": 1,
					    "weekdays": [0, 1, 2, 3, 4, 5, 6]
					  },

					  "weekdays": [
					    	{
					    		"id": 0,
					    		"day": 0,
					    		"routines": [0],
					    		"workouts": 5
					    	},
					    	{
					    		"id": 1,
					    		"day": 1,
					    		"routines": [0],
					    		"workouts": 5
					    	},
					    	{
					    		"id": 2,
					    		"day": 2,
					    		"routines": [0],
					    		"workouts": 5
					    	},
					    	{
					    		"id": 3,
					    		"day": 3,
					    		"routines": [0],
					    		"workouts": 5
					    	},
					    	{
					    		"id": 4,
					    		"day": 4,
					    		"routines": [0],
					    		"workouts": 5
					    	},
					    	{
					    		"id": 5,
					    		"day": 5,
					    		"routines": [0],
					    		"workouts": 5
					    	},
					    	{
					    		"id": 6,
					    		"day": 6,
					    		"routines": [0],
					    		"workouts": 5
					    	}
					    ],

					    "routines": [
					    	{
					    		"id": 0,
					    		"name": "Workout",
					    		"routines": [0]
					    	}
					    ],

					    "workouts": [
					    	{
					    		"id": 0,
					    		"name": "Workout"
					    	}
					    ]
					};

			res.send(post);
		});

	});

};