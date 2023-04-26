import { v4 as uuidv4 } from 'uuid';
let users = [];
export const getUsers = (req, res)=>{
    res.send(users);
};

export const createUsers = (req,res) => {
    const user = req.body;
    users.push({ ...user, id:uuidv4()});
    res.send("POST ROUTE REACHED");
};

export const findUsers = (req,res)=>{
    const { id } = req.params;
    const foundUser = users.find((user)=>user.id == id);
    res.send(foundUser);
};

export const deleteUser = (req,res)=>{
    const { id } = req.params;
    users = users.filter((user)=>user.id !== id);
    res.send(users);
};

export const updateUsers = (req,res)=>{
    const { id } = req.params;
    const {FirstName, LastName, Age} = req.body;
    const user = users.find((user)=>user.id == id);
    if(FirstName) user.FirstName = FirstName;
    if(LastName) user.LastName = LastName;
    if(Age) user.Age = Age;
    res.send(users);
};