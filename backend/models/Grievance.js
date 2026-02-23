import mongoose from 'mongoose';

const grievanceSchema = mongoose.Schema({
    citizenName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: ['Reported', 'AI Classified', 'Force Assigned', 'Blockchain Verified'],
        default: 'Reported'
    },
    grievanceId: { type: String, required: true, unique: true },
    proofUrl: { type: String },
}, {
    timestamps: true
});

const Grievance = mongoose.model('Grievance', grievanceSchema);

export default Grievance;
