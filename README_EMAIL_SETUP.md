# Email Server Setup Instructions

## Overview
This project includes a backend email server that handles contact form submissions and job applications using SMTP (Gmail).

## Server Setup

### 1. Install Server Dependencies

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

### 2. Start the Email Server

```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:3001`

### 3. Update Frontend API URL (if needed)

If your server runs on a different port or domain, update the API URLs in:
- `src/pages/Contact.tsx` - Line with `fetch('http://localhost:3001/api/contact'`
- `src/pages/Careers.tsx` - Line with `fetch('http://localhost:3001/api/careers'`

## Email Configuration

The server is configured with:
- **SMTP Service**: Gmail
- **From Email**: website.adibanaviation@gmail.com
- **Contact Form Recipient**: contact@adibanaviation.in
- **Careers Form Recipient**: info@adibanaviation.in

## API Endpoints

### POST `/api/contact`
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "subject": "Inquiry",
  "message": "Hello, I'm interested in..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

### POST `/api/careers`
Handles job application submissions with resume attachment.

**Request Body:** FormData with:
- `name`: Full name
- `email`: Email address
- `mobile`: Mobile number
- `role`: Position applied for
- `resume`: File (PDF, DOC, DOCX - Max 5MB)

**Response:**
```json
{
  "success": true,
  "message": "Your application has been submitted successfully!"
}
```

## Production Deployment

For production:

1. **Environment Variables**: Move email credentials to environment variables:
   - Create `.env` file in `server/` directory
   - Add: `GMAIL_USER=website.adibanaviation@gmail.com`
   - Add: `GMAIL_APP_PASSWORD=uhpe umvv qgtn coeq`

2. **Update Server Code**: Modify `server/index.js` to use environment variables:
   ```javascript
   auth: {
     user: process.env.GMAIL_USER,
     pass: process.env.GMAIL_APP_PASSWORD,
   }
   ```

3. **Update Frontend API URLs**: Change `localhost:3001` to your production server URL

4. **CORS Configuration**: Update CORS settings in `server/index.js` to allow your production domain

5. **Deploy Server**: Deploy the server to a hosting service (Heroku, Railway, Render, etc.)

## Security Notes

- Never commit email credentials to version control
- Use environment variables for sensitive data
- Consider using a dedicated email service (SendGrid, Mailgun) for production
- Implement rate limiting to prevent spam
- Add CAPTCHA for form submissions in production

## Troubleshooting

### Email Not Sending
1. Verify Gmail app password is correct
2. Check if "Less secure app access" is enabled (if using regular password)
3. Ensure server is running and accessible
4. Check server logs for error messages

### CORS Errors
- Update CORS configuration in `server/index.js` to include your frontend domain

### File Upload Issues
- Verify file size is under 5MB
- Check file type is PDF, DOC, or DOCX
- Ensure multer is properly configured
