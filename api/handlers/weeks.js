module.exports = function(app) {
  return {
    index: function(req,res,next) {
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
    }
  }
}