import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
 const form = useRef<HTMLFormElement>(null);
 const [name,setName]=useState('')
  const [email,setEmail]=useState('')
   const [message,setMessage]=useState('')


  const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  // تحقق من القيم
  if (!name || !email || !message) {
    alert("❌ You forgot to fill some fields!");
    return;
  }

  // إرسال البريد عبر EmailJS أو Formspree
  if (form.current) {
    emailjs.sendForm(
      "service_knnkk0e",
      "template_h9458md",
      form.current,
      "89jIkqFx4cVVZb9VY"
    )
    .then(
      () => {
        alert("✅ Message sent successfully!");
        // إعادة تعيين القيم
        form.current?.reset();
        setEmail("");
        setName("");
        setMessage("");
      },
      (error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      }
    );
  }
};

  return (
    <div id="Contact" className=" py-20" >
      <h1 className="title text-center">Contact</h1>
      <p className="description text-zinc-400 text-[12px] font-[500]">contact me  for  more details</p>
      <div className="w-[90%] lg:w-[70%] py-5 flex  flex-col md:flex-row justify-center items-center  gap-10 p-3  rounded-sm bg-gradient-to-b from-black-900 to-black/60 mx-auto mt-13">
        <div className="w-[90%] mx-auto md:w-[50%]  py-4 px-2 order-2 md:order-1">
            <h2 className="title text-lg font-[500] text-center ">Let's contact me</h2>
            <p className="description text-zinc-400 text-[12px] font-[500]">to get more information about my skills</p>
            <div className=" mt-10 w-full relative">
               <form ref={form} onSubmit={sendEmail} className="grid grid-cols-2 gap-3 mt-10 w-full relative" >
        <input type="text" value={name} name="name" placeholder="First Name" onChange={(val)=>setName(val.target.value)} className="input  col-span-2" />
        <input type="email" value={email} name="email" placeholder="Email" onChange={(val)=>setEmail(val.target.value)} className="input col-span-2" />
        <textarea name="message" value={message} placeholder="Message" onChange={(val)=>setMessage(val.target.value)} className="input col-span-2 " />
        <button
          type="submit"
          className="btn w-full bg-gradient-to-r col-span-2 duration-[0.5s] from-[#763AF5] to-[#A604F2] text-white py-2 rounded-md hover:opacity-90"
        >
          Send Message
        </button>
      </form>
            </div>
        </div>
        <div className="w-[90%]  md:w-[50%] order-1 md:order-2 ">
            <img src="assets/back-contact.jpg" className="rounded-xl" alt="background contact " loading="lazy"/>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Contact
