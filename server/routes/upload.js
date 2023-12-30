import express from 'express'
const router = express.Router()
import {loginUser, registerUser} from '../controllers/uploadController.js'
import {Image} from '../models/user.js'



router.post('/admin', loginUser)
router.post('/reg', registerUser)



router.post('/upload', async (req, res) => {
    try {
      const { title, youtube, instagram, image } = req.body;
  
      if (!title || !youtube || !image) {
        return res.json({
          error: 'Please Fill Both Title and Youtube field'
        })
      } else {
        
      const newImage = new Image({
        title,
        youtube,
        instagram,
        image
      });
  
      await newImage.save();
      res.status(200).send('Image uploaded successfully!');
      }


    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  router.get('/allposts', async (req, res) => {
    const posts = await Image.find({})
    res.json({posts})
  } )



export {router as uploadRouter}