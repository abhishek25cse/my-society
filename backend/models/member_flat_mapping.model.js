const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const memberFlatMappingSchema = new Schema ({       
    member_id : [{type: Schema.Types.ObjectId, ref: 'MEMBER_DETAIL'}],
    flat_id :   [{type: Schema.Types.ObjectId, ref: 'FLAT_DETAIL'}]
},
{
    timestamps: true,
});

const memberFlatMapping = mongoose.model('MEMBER_FLAT_MAPPING', memberFlatMappingSchema);
module.exports = memberFlatMapping;