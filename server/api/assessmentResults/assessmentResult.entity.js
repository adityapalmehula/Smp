const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assessmentResultSchema = new Schema({
  assessment: { type: String },
  resultStatus: { type: String },
  correctAns:  { type: Number, default: 0},
  passPercentage: { type: Number },
  scorePercentage: { type: Number },
  totalQuestion: { type : Number, required : true },
  totalMarks: { type : Number, required : true },
  score: { type: Number,default: 0 },
  level: { type: String },
  maxTime: { type: Number }, 
  timeTaken: { type: Number,default: 0 },
  type: { type: String, required : true},
  assessmentStatus: { type: String, default: "Paused" }, //paused/finish
  attemptedStatus: { type: String }, //fully/partially
  lastSaveQuestion: {type: Number, default: 0},
  questionsForReview: {type: Array},
  questions: [{ 
    qusId: { 
      type: Schema.Types.ObjectId,
      ref: 'questions' 
    },
    question: String,
    qusType: String,
    level: String,
    options: Array,
    answers: Array,
    userAnswers: Array,
    status: { type: String, default: "Not Attempted" },//Not Attempted//attendewd//skipped
    ansStatus: String, // correct/incorrect
    solution: String,
    skillTags: Array,
    keywords: Array,
    topicId: Schema.Types.ObjectId,
    subTopicId: Schema.Types.ObjectId,
    marks: { type : Number },
    userMarks: { type : Number },
    timeTaken: { type: Number, default: 0 },
    maxTime: Number,
  }],

  assessmentId:{
    type: Schema.Types.ObjectId,
    required : true,
    ref:'assessments'
  },

  studentId: {
    type:Schema.Types.ObjectId,
    required : true,
    ref:'students'
  },

  createdBy: {
   id: { type: Schema.Types.ObjectId, ref: 'users'},
   role: { type : String },
   date:{ type: Date, default: Date.now }
 }, 

 updatedBy: {
   id: { type: Schema.Types.ObjectId, ref: 'users'},
   role: { type : String },
   date:{ type: Date, default: Date.now }
 },

 deletedBy: {
   id: { type: Schema.Types.ObjectId, ref: 'users'},
   role: { type : String },
   date:{ type: Date, default: Date.now }
 }
});

const assessmentResults = mongoose.model('assessmentresults', assessmentResultSchema);

module.exports = assessmentResults;
