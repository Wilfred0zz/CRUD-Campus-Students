//////////////////////Routing File for Student//////////////////////////////
import express from "express";      //express needed for routing
const router = express.Router();
const {Student} = require("../database/models"); 

//*********************Route to get all students*********************//
// /api/students
router.get("/",
    async (req, res, next) => {
        try{
            const students = await Student.findAll(); //find all students 
            res.status(200).json(students); //set status to 200 for OK and send json of all students as response
        } catch(err){
            next(err);
        }
    }//end async function
);//end router.get

//****************Route to get a single student by ID*********************//
// /api/student/:id
// :id is the ID of the sindle student
router.get("/:id",
    async (req, res, next) => {
        const {id} = req.params;
        try {
            const student = await Student.findByPk(id) //find primary key matching id
            res.status(200).json(student); //send json of student as response
        } catch (err) {
            next(err);
        }
    }//end async function
); //end router.get

//*********************Route to add a new student*********************//
// /api/students
router.post("/",
    async(req, res, next) =>{  
        //take data from request body for each column of Student
        const {firstName, lastName, email, imageUrl, gpa} = req.body;
        //store data received from body in object to be added to database
        const studentObj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            imageUrl: imageUrl,
            gpa: gpa,
        };
        console.log("Student to be added data: ", studentObj);

        try {
            //adding object with received data to database
            const addStudent = await Student.create(studentObj); 
            //set status to 201 for "CREATED" and send the student added
            res.status(201).send(addStudent);
            console.log("Student has been added to the database");
        } catch (err) {
            next(err);
        }
    }//end async function
); //end router.post

//*********************Route to edit a single student from their id*********************//
// /api/students/:id
router.put("/:id",
    async (req, res, next) => {
        const {id} = req.params; 
        //tale data from form 
        const {firstName, lastName, email, imageUrl, gpa} = req.body;
        //set data to object with uodated info
        const studentObj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            imageUrl: imageUrl,
            gpa: gpa,
        };
        console.log("Updated student info: ", studentObj);
        try {
            const student = await Student.findByPk(id);
            await student.set(studentObj);  //changes the current student with updated info
            const updatedStudent = await student.save(); //save the changes made
            console.log("Student has been updated. Student with this id is now: ", updatedStudent);
            //set status to 201 for "CREATED" and send the updated information
            res.status(201).send(updatedStudent);
        } catch (err) {
            next(err);
        }
    }//end async function
);//end router.put

//*********************Route to delete a Student given their id*********************//
router.delete("/:id",
    async(req, res, next) => {
        const {id} = req.params; //get primary key of student
        try {
            const studentToDelete = await Student.findByPk(id);
            await studentToDelete.destroy();    //delete student
            console.log("This student has been deleted");
            //set status for 204 for 'NO CONTENT' after deleting the student
            res.sendStatus(204);
        } catch (err) {
            next(err);
        }
    }
)//end router.delete