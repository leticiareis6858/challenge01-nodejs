import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    tutor: {
        id: ObjectId,
        name: {
            type: String,
            required: [true, 'Must have a name'],
            trim: true,
        },
        phone: {
            type: String,
            required: [true, 'Must have a phone number'],
            trim: true,
            maxlength: [
                11,
                'Phone number can not have more than eleven digits',
            ],
        },
        email: {
            type: String,
            required: [true, 'Must have an email address'],
            trim: true,
        },
        date_of_birth: {
            type: String,
            required: [true, 'Must provide a birth date'],
            maxlength: [8, 'Birth date can not be longer than eigth digits'],
            trim: true,
        },
        zip_code: {
            typeof: Number,
            required: [true, 'Must provide a zip code'],
            maxlength: [10, 'Zip code can not be longer than ten digits'],
            trim: true,
            pets: [
                {
                    id: ObjectId,
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
                        required: [true, 'Must provide '],
                    },
                },
            ],
        },
    },
});

export const tutor = mongoose.model('tutor', ClientSchema);
export const pets = mongoose.model('pets', ClientSchema);
