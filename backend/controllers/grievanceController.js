import Grievance from '../models/Grievance.js';

// @desc    Submit a new grievance
// @route   POST /api/grievances
// @access  Public
export const submitGrievance = async (req, res) => {
    try {
        const { citizenName, email, phone, category, location, description } = req.body;

        const grievanceId = 'GRV' + Math.floor(100000 + Math.random() * 900000);

        const grievance = await Grievance.create({
            citizenName,
            email,
            phone,
            category,
            location,
            description,
            grievanceId
        });

        res.status(201).json(grievance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all grievances
// @route   GET /api/grievances
// @access  Public
export const getGrievances = async (req, res) => {
    try {
        const grievances = await Grievance.find({}).sort({ createdAt: -1 });
        res.json(grievances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get grievance by ID
// @route   GET /api/grievances/:id
// @access  Public
export const getGrievanceById = async (req, res) => {
    try {
        const grievance = await Grievance.findOne({ grievanceId: req.params.id });
        if (grievance) {
            res.json(grievance);
        } else {
            res.status(404).json({ message: 'Grievance not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
