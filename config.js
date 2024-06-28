
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://crisandersson:Mur240601.@devcamp.2ls3rep.mongodb.net/?retryWrites=true&w=majority&appName=Books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

module.exports = mongoose;