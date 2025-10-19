import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (to, subject, text) => {
  try {
    const msg = {
      to,
      from: process.env.SENDGRID_SENDER, 
      subject,
      text,
    };

    await sgMail.send(msg);
    console.log("Email sent successfully to", to);
  } catch (error) {
    console.error("Email send failed:", error.response?.body || error);
  }
};
