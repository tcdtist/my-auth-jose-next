# Next.js Authentication Demo

This project demonstrates a simple authentication system using Next.js, React, and JSON Web Tokens (JWT). It features a modern, responsive login interface with a glassmorphism design.

## Features

- User authentication with JWT
- Server-side rendering with Next.js
- Responsive design for all screen sizes
- Modern UI with gradient and glassmorphism effects

## Technologies Used

- Next.js 14
- React
- TypeScript
- CSS Modules
- jose (for JWT handling)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/nextjs-auth-demo.git
   ```

2. Navigate to the project directory:

   ```
   cd nextjs-auth-demo
   ```

3. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. Run the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Contains the main application pages and components
- `lib/`: Houses utility functions for authentication and session management
- `styles/`: Includes global styles and CSS modules

## Key Components

- `app/layout.tsx`: The root layout component
- `app/page.tsx`: The main page component with login/logout functionality
- `lib.ts`: Utility functions for JWT encryption, decryption, and session management

## Authentication Flow

1. User enters email and submits the login form
2. Server-side action creates a session with JWT
3. Session is stored in an HTTP-only cookie
4. User can log out, which clears the session cookie

## Styling

The project uses CSS Modules for component-specific styling. The login interface features:

- Gradient background
- Glassmorphism effect for the login box
- Responsive design for various screen sizes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
