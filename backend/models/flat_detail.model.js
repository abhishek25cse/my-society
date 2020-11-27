const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const flatDetailSchema = new Schema ({       
    FLOOR : {type:Number, required:true},
    FLAT_NO : {type:Number, required:true},
    SOLD : {type:Number, required:true, trim:true},
    AREA : {type:Number, required:true,  trim:true},
    NO_BEDROOMS : {type:Number, required:true},
    NO_BATHROOMS : {type:Number, required:true},
    NO_BALCONY : {type:Number, required:true},
    NO_UTILITY : {type:Number, required:true},
    HALL : {type:Number, required:true},
    FLAT_FACING : {type:String, required:true},

},
{
    timestamps: true,
});

const flatDetail = mongoose.model('FLAT_DETAIL', flatDetailSchema);
module.exports = flatDetail;