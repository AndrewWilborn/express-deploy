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

export async function updateCandyById(req, res){
    try{
        //const candyId = req.params.id;
        const { id } = req.params; // which Id to apply changes to
        const newData = req.body; // what changes to make (ex. {"price": 2.99})
        const updateCandy = await coll.doc(id).update(newData); // update document
        res.status(200).send(updateCandy);
    } catch(error){
        res.status(500).send(error);
    }
}