
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;



mongoose.connect('mongodb://localhost/rest-api-example', {useMongoClient: true})

const citySchema = Schema({
  name:  String,
  id: Number
});
const City = mongoose.model("City", citySchema);

const courseSchema = Schema({
  name:  String,
  id: Number,
  type: String
});
const Course = mongoose.model("Course", courseSchema);

const bootcampSchema = Schema({
  id: Number,
  cityId: Number,
  courseId: Number
});
const Bootcamp = mongoose.model("Bootcamp", bootcampSchema);


   const cities = [
      {
         "id":1,
         "name":"Barcelona"
      },
      {
         "id":2,
         "name":"Madrid"
      },
      {
         "id":3,
         "name":"Miami"
      },
      {
         "id":4,
         "name":"Paris"
      }
   ]

   const courses =[
      {
         "id":1,
         "name":"WebDev",
         "type":"Full Time"
      },
      {
         "id":2,
         "name":"WebDev",
         "type":"Part Time"
      },
      {
         "id":3,
         "name":"UX/UI",
         "type":"Full Time"
      },
      {
         "id":4,
         "name":"UX/UI",
         "type":"Part Time"
      }
   ]

   const bootcamps = [
      {
         "id":1,
         "cityId":1,
         "courseId":1
      },
      {
         "id":2,
         "cityId":2,
         "courseId":2
      },
      {
         "id":3,
         "cityId":3,
         "courseId":1
      },
      {
         "id":4,
         "cityId":4,
         "courseId":2
      },
      {
         "id":5,
         "cityId":2,
         "courseId":3
      },
      {
         "id":6,
         "cityId":3,
         "courseId":4
      },
      {
         "id":7,
         "cityId":1,
         "courseId":3
      }
   ]






   City.create(cities)
   .then(res =>{
     console.log("ok")
   })
   .catch(err =>{
     console.log(err)
   })

   Course.create(courses)
   .then(res =>{
     console.log("ok")
   })
   .catch(err =>{
     console.log(err)
   })

   Bootcamp.create(bootcamps)
   .then(res =>{
     console.log("ok")
   })
   .catch(err =>{
     console.log(err)
   })

  
