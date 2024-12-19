const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

// Transporter setup for Nodemailer (configure with your SMTP credentials)
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your-email@gmail.com",  // Replace with your email address
    pass: "your-email-password",   // Replace with your email password
  },
});

// Function to get user by email from a simulated database (localStorage in this case)
const getUserByEmail = (email) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((user) => user.email === email);
};

// Function to save the reset token in localStorage
const saveResetToken = (email, resetToken) => {
  let resetTokens = JSON.parse(localStorage.getItem("resetTokens")) || [];
  resetTokens.push({ email, resetToken });
  localStorage.setItem("resetTokens", JSON.stringify(resetTokens));
};

// Function to send a password reset link to the user
const sendResetLink = async (req, res) => {
  const { email } = req.body;

  // Check if the email exists in the users stored in localStorage
  const user = getUserByEmail(email);
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  // Create a secure reset token using JWT
  const resetToken = jwt.sign({ email }, "secret-key-for-reset", { expiresIn: '1h' });

  // Save the reset token to localStorage (simulating a database)
  saveResetToken(email, resetToken);

  // Create the reset password link (you can use your frontend route for this)
  const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

  // Send the email with the reset link
  const mailOptions = {
    from: "your-email@gmail.com",  // Replace with your email address
    to: email,
    subject: "Password Reset Request - EventMaster",
    text: `Hello,\n\nPlease click on the following link to reset your password: ${resetLink}\n\nThis link will expire in 1 hour.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: "Reset link sent to your email." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to send reset email" });
  }
};

module.exports = { sendResetLink };
