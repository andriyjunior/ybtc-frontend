import emailjs from '@emailjs/browser';

const NEXT_PUBLIC_SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const NEXT_PUBLIC_TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const NEXT_PUBLIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export const sendMail = async (data) => {
  if (NEXT_PUBLIC_SERVICE_ID && NEXT_PUBLIC_TEMPLATE_ID) {
    return await emailjs.sendForm(
      NEXT_PUBLIC_SERVICE_ID,
      NEXT_PUBLIC_TEMPLATE_ID,
      data,
      NEXT_PUBLIC_PUBLIC_KEY,
    );
  }
};
