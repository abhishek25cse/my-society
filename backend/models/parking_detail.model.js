const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const parkingDetailSchema = new Schema ({       
    FLOOR : {type:Number, required:true},
    TYPE : {type:String, required:true},
    SOLD : {type:Number, required:true, trim:true},
    IS_ENCLOSED : {type:String, required:true,  trim:true},
    AREA : {type:Number, required:true,  trim:true}
},
{
    timestamps: true,
});

const parkingDetail = mongoose.model('PARKING_DETAIL', parkingDetailSchema);
module.exports = parkingDetail;