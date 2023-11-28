const Recipes = require("../models/Recipe")
const router = require("express").Router();
const mongoose = require("mongoose");

// const verifyAdmin = require("../midleware/auth");


// get all recipes 
router.get("/", async (req,res)=> {
    const all_recipes = await Recipes.find();

    if(all_recipes){
        return res.status(200).json({recipes : all_recipes});
    }
    res.status(500).json({error: "couls not load recipes"});
});

// get a recipe 
router.get("/:id", async (req,res)=> {
    const ObjectId = mongoose.Types.ObjectId;
    if(!req.params.id || !ObjectId.isValid(req.params.id) ){
        return res.status(400).json({message: "Invalid Item"});
    }

    try {
        const recipe = await Recipes.findById(req.params.id);
        
        return res.status(200).json({
            message: recipe ? recipe : "recipe not found"
        });
    } catch (error) {
        return res.status(500).json({message: error});    }

})


// add a recipe 
router.post("/add",async(req,res)=> {
    
    const newRecipe = new Recipes({
        name : req.body.name,
        ingredients: req.body.ingredients,
        price: req.body.price,
        type: req.body.type
    }); 
    
    try {
        await newRecipe.save();
        res.status(201).json(newRecipe);
      } catch (err) {
        console.error(err)
        res.status(500).json(err);
      }
    
});


// delete a recipe 
router.delete("/delete/:id",async(req,res)=> {
    const ObjectId = mongoose.Types.ObjectId;

    if(!req.params.id || !ObjectId.isValid(req.params.id) ){
        return res.status(400).json({message: "no or  'Invalid ID'"});
    }

    try {
        const toDeleteRecipe = await Recipes.findByIdAndDelete(req.params.id);
        res.status(200).json({recipe :  toDeleteRecipe });
    } catch (error) {
        res.status(500).json({error: "could not delete"});
    }
});


router.put("/update/:id",async(req,res)=> {
    const ObjectId = mongoose.Types.ObjectId;

    if(!req.params.id || !ObjectId.isValid(req.params.id) ){
        return res.status(400).json({message: "Invalid Id"});
    }

    try {
        const updateRecipe = await Recipes.findById(req.params.id);
        
        updateRecipe.name=req.body.name;
        updateRecipe.price=req.body.price;
        updateRecipe.type=req.body.type;    

        res.status(200).json({recipe :  updateRecipeRecipe });
    } catch (error) {
        res.status(500).json({error: "could not updae"});
    }
});


module.exports = router;


