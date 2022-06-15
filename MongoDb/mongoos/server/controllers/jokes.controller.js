const Joke = require("../models/jokes.model");
//get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
      .then(allDaUsers => res.json({ jokes: allDaUsers }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

//return single jokes accourding to id that sent
module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
    };

//create and insert new jokes 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
      .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

//delete single joke accourding to it's id
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };