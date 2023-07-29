import mongoose from 'mongoose';

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.azwkxec.mongodb.net/VetClinic-API?retryWrites=true&w=majority`
    );

    const connection = mongoose.connection;

    connection.on('error', () => {
        console.error('Failed to connect to the DB');
    });

    connection.on('open', () => {
        console.log('Connected to the DB');
    });
};

connect();
module.exports = mongoose;
