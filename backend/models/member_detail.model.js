const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const memberDetailSchema = new Schema ({   
    NAME : {type:String, required:true, trim:true,minlength:3},
    ID_CARD : {type:String, required:true, trim:true,minlength:3},
    ID_CARD_NO : {type:String, required:true, unique:true, trim:true,minlength:3},
    PERMANENT_ADDRESS : {type:String, required:true, trim:true,minlength:3},
    CONTACT_NUMBER : {type:Number, required:true, unique:true, trim:true,minlength:10},
    EMAIL : {type:String, required:true, unique:true, trim:true,minlength:3}
},
{
    timestamps: true,
});

const memberDetail = mongoose.model('MEMBER_DETAIL', memberDetailSchema);
module.exports = memberDetail;