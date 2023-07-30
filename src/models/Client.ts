import mongoose from 'mongoose';
const { Schema } = mongoose;

const PetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
    carry: {
        type: String,
    },
    weight: Number,
    date_of_birth: {
        type: String,
        maxlength: [
            10,
            'Birth date can not be longer than eigth digits. E.g. 01-01-2000',
        ],
    },
});

const TutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: [11, 'Phone number can not have more than eleven digits'],
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    date_of_birth: {
        type: String,
        required: true,
        maxlength: [
            10,
            'Birth date can not be longer than eigth digits. E.g. 01-01-2000',
        ],
        trim: true,
    },
    zip_code: {
        type: Number,
        required: true,
        maxlength: [10, 'Zip code can not be longer than ten digits'],
        trim: true,
    },
    pets: [{ type: Schema.Types.ObjectId, ref: 'pets' }],
});

export const tutorModel = mongoose.model('tutor', TutorSchema);
export const petsModel = mongoose.model('pets', PetsSchema);
