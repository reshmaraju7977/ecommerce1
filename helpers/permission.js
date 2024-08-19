const userModel = require("../models/userModel");

const uploadProductPermission = async (userId) => {
    try {
        const user = await userModel.findById(userId);

        if (!user) {
            // Handle the case where the user is not found
            throw new Error('User not found');
        }

        return user.role === 'ADMIN';
    } catch (error) {
        console.error('Error checking user permission:', error);
        // Optionally, you can rethrow the error or handle it in another way
        throw error;
    }
};

module.exports = uploadProductPermission;