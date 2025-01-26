// import { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "motion/react";
import Form from '../components/Form'

const Contact = () => {
  //   const formRef = useRef();
  //   const [form, setForm] = useState({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });

  //   const [loading, setLoading] = useState(false);

  //   const handleChange = (e) => {};
  //   const handleSubmit = (e) => {};

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h1>

      
  

      <Form />

   

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        {/* <p className="my-4 ">{CONTACT.address}</p> */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-5 text-2xl"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
