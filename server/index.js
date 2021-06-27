const express =require('express')
const app=express()
const mysql=require('mysql')
const cors=require('cors')

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    user:"root",
    host:'localhost',
    password:'',
    database:"employeeleave",
});

app.post('/create',(req,res)=>{
    const name=req.body.name
    const position=req.body.position
    const casualLeave=req.body.casualLeave
    const medicalLeave=req.body.medicalLeave
    const annualLeave=req.body.annualLeave

    db.query("INSERT INTO employee (name,position,casualLeave,medicalLeave,annualLeave) VALUES(?,?,?,?,?)",
    [name,position,casualLeave,medicalLeave,annualLeave],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("values inserted");
        }
    })
})

app.get('/view',(req,res)=>{
    db.query("SELECT * FROM employee",
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result);
        }
    })
})

app.put("/updateC",(req,res)=>{
    const employeeID=req.body.employeeID
    const casualLeave=req.body.casualLeave
    db.query("UPDATE employee SET casualLeave = ? WHERE employeeID= ?",[casualLeave, employeeID],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.put("/updateM",(req,res)=>{
    const employeeID=req.body.employeeID
    const medicalLeave=req.body.medicalLeave
    db.query("UPDATE employee SET medicalLeave = ? WHERE employeeID= ?",[medicalLeave, employeeID],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})

app.put("/updateA",(req,res)=>{
    const employeeID=req.body.employeeID
    const annualLeave=req.body.annualLeave
    db.query("UPDATE employee SET annualLeave = ? WHERE employeeID= ?",[annualLeave, employeeID],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM employee WHERE employeeID = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001,()=>{
    console.log("Its working");
})