const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//Find All Tags
router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id','tag_name'],
    include: [{
      model: Product,
      attributes: ['id','product_name','price','stock','category_id'],
      as: 'tags'
    }]
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

//Find Single Tag by ID
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      as: 'tags'
    }]
  })
  .then(dbTagData => {
    if(!dbTagData){
      res.status(404).json({message: `Tag is not found.`});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

//Create a New Tag
router.post('/', (req, res) => {

});

//Updatae a Tag's Name by its ID Value
router.put('/:id', (req, res) => {

});

//Delete Tag by its ID Value
router.delete('/:id', (req, res) => {

});

module.exports = router;
