import mongoose from 'mongoose';
const { Schema } = mongoose;

const PetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a name'],
    },
    species: {
        type: String,
        required: [true, 'Pet must have a specie'],
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
        required: [true, 'Must have a name'],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, 'Must have a phone number'],
        trim: true,
        maxlength: [11, 'Phone number can not have more than eleven digits'],
    },
    email: {
        type: String,
        required: [true, 'Must have an email address'],
        trim: true,
    },
    date_of_birth: {
        type: String,
        required: [true, 'Must provide a birth date'],
        maxlength: [
            10,
            'Birth date can not be longer than eigth digits. E.g. 01-01-2000',
        ],
        trim: true,
    },
    zip_code: {
        type: Number,
        required: [true, 'Must provide a zip code'],
        maxlength: [10, 'Zip code can not be longer than ten digits'],
        trim: true,
    },
    pets: [{ type: Schema.Types.ObjectId, ref: 'pets' }],
});

export const tutor = mongoose.model('tutor', TutorSchema);
export const pets = mongoose.model('pets', PetsSchema);
