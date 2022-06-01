import mongoose from "mongoose";
const { Schema } = mongoose;

const courseScheme = mongoose.Schema({
  courseName: { type: String, required: true},
  className: { type: String, required: true },
<<<<<<< Updated upstream
  imagePath: { type: String },
=======
  
  imagePath: { type: String },
  filesPath:  [String] ,
>>>>>>> Stashed changes
  teacherId : {type: mongoose.Schema.Types.ObjectId, ref: 'user'}

});
export default mongoose.model("course", courseScheme);
