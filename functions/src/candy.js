import { db } from "./dbConnect.js";

const coll = db.collection('candy');

const toArray = (collection) => collection.docs.map(doc => ({id: doc.id, ...doc.data()}))

export async function getAllCandy(req, res){
    try{
        const allCandy = await coll.get();
        res.send(toArray(allCandy));
    } catch (error){
        res.status(500).send(error);
    }
}

export async function addNewCandy(req, res){
    try{
        const newCandy = req.body;
        const addCandy = await coll.add(newCandy);
        res.status(200).send(addCandy);
    } catch(error){
        res.status(500).send(error);
    }
}