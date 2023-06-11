const axios = require('axios');

// Load Home Page
exports.home = async (req, res) => {
  try {
    const accessToken = process.env.TOKEN; // Retrieve the access token from the request query parameters
    // Make a request to the Instagram API to fetch your photos
    const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${accessToken}`);

    // Extract the necessary data from the API response
    const photos = response.data.data.map(photo => ({
      id: photo.id,
      caption: photo.caption,
      mediaUrl: photo.media_url
    }));
    const images = [];
    photos.forEach((photo) => {
      if(!photo.mediaUrl.includes('mp4')){
        if(images.length != 20){
        images.push(photo);
        }
      }
    });
    // Send the photos as the response
    return res.render("frontend/index.ejs",{photos:images});
  } catch (err) {
    console.log(err);
  }
};
