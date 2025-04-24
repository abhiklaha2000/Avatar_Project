const axios = require('axios');
require('dotenv').config();
const HEYGEN_API_BASE_URL = process.env.HEYGEN_BASE_API_URL;

/**
 * Function to get the access token for the avatar
 * Path - /api/v1/get_access_id/:access_token
 */
async function getAccessId(req, res){
    try {
        const {access_token} = req.params;
        if(!access_token){
            throw new Error("Access token is required")
        }
        // Fetch the access token from the heygen api
        const response = await fetch(`${HEYGEN_API_BASE_URL}/v1/streaming.create_token`, {
            method: "POST",
            headers: {
              "x-api-key": access_token,
            },
          });
          const data = await response.json();

        res.json({ 
            message: "Access token has been fetched successfully",
            data: {token : data?.data?.token}
        });
      } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
      }

}


module.exports = {
    getAccessId
}