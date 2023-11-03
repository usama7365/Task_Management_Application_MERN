const bcrypt = require('bcrypt');
const User = require('../models/user.model');

exports.PostSignupSchema = async (req, res) => {
    const { email, displayName, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            displayName,
            password: hashedPassword, 
        });

        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
};
