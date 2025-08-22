import { useState } from "react";
import { Resend } from "resend";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const resend = new Resend("a4953b20-d1a0-4848-9504-e1a2c83e43db");

  const handleSend = async (e) => {
    e.preventDefault();
    const { data, error } = await resend.emails.send({
      to: ["rohantiwari2709@gmail.com"],
      from: "onboarding@resend.dev",
      html: '<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;"><h2 style="color: #4CAF50;">🎉 Congrats!</h2><p>You just sent your <strong>first email</strong> using <em>Resend</em>. Everything is working great!</p><hr style="margin: 20px 0;"/><p style="color:#898989; font-size:12px;">2261 Market Street #5039<br>San Francisco, CA 94114</p></div>',
      text: "Congrats on sending your first email!",
      subject: "Hello World",
    });
    console.log({data});
    
  };
  return (
    <div className="flex flex-col justify-evenly items-center px-4 py-8" id="contact">
      <h1 className="text-white text-center text-3xl font-extrabold mb-8">
        CONTACT ME
      </h1>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl transition-transform duration-300 hover:scale-[1.02]">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows="5"
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white focus:outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            onClick={(e)=> handleSend(e)}
            className="bg-white text-black font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
