const express = require('express')

const app = express()

app.use(express.json())


const PORT = process.env.PORT || 3002


var data = [
    {
        "name" : "Aman Singh",
        "age": 21
    },
    {
        "name" : "Harsh Sri",
        "age": 22
    },
    {
        "name" : "Anubhav Sri",
        "age": 23
    }
]



// GET Request

app.get('/users', (req, res) => {
    res.status(200).json({data:data});
});



// POST Request

app.post('/users', (req, res) => {
     const  name = req.body.name;
     const age = req.body.age;


    if(!name || !age ){
        return res.status(400).json({message:"Please enter a name and age."});
    }

    const user = {
        name,
        age
    }
   data.push(user);

    res.status(200).json({data:data});

});


// DELETE Request

app.delete('/users', (req, res) => {
     const  name = req.body.name;

    if(!name  ){
        return res.status(400).json({message:"Please enter a name"});
    }



    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        if(element.name === name){
            data.splice(index, 1);
            return res.status(200).json({
                message:"user deleted successfully",
                data:data
            })
        }  
    }

    return res.status(404).json({
        message:"User not found"
    })


});


app.listen(3002,()=>{
    console.log(`listening on http://localhost:${PORT}`)
});




