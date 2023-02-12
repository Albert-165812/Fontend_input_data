import mongoose from 'mongoose'
async function connect(){
  try {
    await mongoose.connect('mongodb://localhost:27017/db_khkt')
  }
  catch(error){

  }
}

export default connect