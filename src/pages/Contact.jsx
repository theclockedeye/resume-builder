import React from 'react'

export default function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Resume Builder</h1>

      <p>Have questions about creating your perfect resume? Need help with our tools? Or just want to share your success story? We're here to help! Reach out to our friendly support team, and we'll get back to you as soon as possible.</p>

      <h2>Get In Touch</h2>
      <p>For any inquiries, feedback, or support requests, please use the contact form below or email us directly. We value your input and are committed to providing excellent service to all our users.</p>

      <h2>Contact Information</h2>
      <p><strong>Email:</strong> support@resumebuilder.com</p>
      <p><strong>Support Hours:</strong> Monday through Friday, 9:00 AM to 6:00 PM Eastern Time. We typically respond within 24 hours during business days.</p>

      <h2>Send Us a Message</h2>
      <form>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" placeholder="Brief description of your inquiry" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Tell us how we can help you..." rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <p>We appreciate your patience and look forward to assisting you with your resume building journey!</p>
    </div>
  )
}
