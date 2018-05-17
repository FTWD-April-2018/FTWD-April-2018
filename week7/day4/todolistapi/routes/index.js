const express = require('express');
const router  = express.Router();
const Task    = require('../models/task')

/* get the list of all the tasks */
router.get('/', (req, res, next) => {
  Task.find()
  .then((list)=>{
    res.json(list);
  })
  .catch((err)=>{
    res.json(err)
  })
});


//get details about a sepcific task
router.get('/:taskID', (req, res, next) => {
  Task.findById(req.params.taskID)
  .then((theTask)=>{
    res.json(theTask);
  })
  .catch((err)=>{
    res.json(err)
  })
});

//add a NEW task
router.post('/tasks', (req, res, next)=>{
  console.log(req.body);
    const newTask = {
      title: req.body.title,
      content: req.body.content,
      doneYet: req.body.doneYet,
      urgency: req.body.urgency
    }
  // Task.create(req.body) would work too
    Task.create(newTask)
    .then((taskJustCreated)=>{
      res.json(taskJustCreated)
    })
    .catch((err)=>{
      res.json(err)
    })

  });


    router.post('/task/delete/:id', (req, res, next)=>{
      Task.findByIdAndRemove(req.params.id)
      .then((taskJustDeleted)=>{
        res.json(taskJustDeleted)
      })
      .catch((err)=>{
        res.json(err)
      })

    })

    router.post('/task/update/:id', (req, res, next)=>{
      console.log(req.body)
      Task.findByIdAndUpdate(req.params.id, req.body)
      .then((updatedTask)=>{
        res.json(updatedTask)
      })
      .catch((err)=>{
        res.json(err)
      })

    })


















module.exports = router;
