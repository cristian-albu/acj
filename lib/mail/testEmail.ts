import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
export const msg = {
    to: "albucristian95p@gmail.com",
    from: "office@cristianalbu.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

const sendMail = async (parameter: typeof msg) => {
    sgMail
        .send(parameter)
        .then(() => {
            console.log("Email sent");
        })
        .catch((error: any) => {
            console.error(error);
        });
};

export default sendMail;
