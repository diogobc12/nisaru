// Simple test API to verify connections
module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Set content type
  res.setHeader('Content-Type', 'application/json');

  // Return a simple JSON response
  return res.status(200).json({
    success: true,
    message: 'API is working',
    time: new Date().toISOString(),
    env: process.env.NODE_ENV || 'unknown'
  });
};
