const shortUrls = {}; // Object to store short URLs and their corresponding long URLs

function generateShortCode(length = 7) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function shortenURL(longURL) {
  let shortCode = generateShortCode();
  // Ensure the generated short code is unique
  while (shortUrls[shortCode]) {
    shortCode = generateShortCode();
  }
  shortUrls[shortCode] = longURL;
  return shortCode;
}

function getOriginalURL(shortCode) {
  return shortUrls[shortCode];
}

// Example usage
const longURL = "https://www.example.com/this/is/a/very/long/url/that/needs/to/be/shortened";
const shortCode = shortenURL(longURL);
console.log(`Shortened URL: ${shortCode}`);

const originalURL = getOriginalURL(shortCode);
console.log(`Original URL: ${originalURL}`);