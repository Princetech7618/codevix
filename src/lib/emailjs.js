import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const MASTER_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_MASTER_TEMPLATE_ID;

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      MASTER_TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    );
    return { success: true, message: 'Sent successfully!' };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, message: 'Failed to send.' };
  }
};

// Har function ab 'form_type' add karke bhejega 
export const sendContactEmail = (formData) => 
  sendEmail({ ...formData, form_type: 'Contact Inquiry' });

export const sendCareerEmail = (formData) => 
  sendEmail({ ...formData, form_type: 'Job Application' });

export const sendDemoEmail = (formData) => 
  sendEmail({ ...formData, form_type: 'Product Demo Request' });