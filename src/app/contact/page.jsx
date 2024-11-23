"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

const page = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  const [formStatus, setFormStatus] = useState(null);
  const form = useRef();
  const [user, setUser] = useState({ name: "", email: "", comment: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation check
    if (!user.name || !user.email || !user.comment) {
      alert("Please enter your information");
      return; // Return early to prevent further execution
    }

    emailjs
      .sendForm("service_vgkozvc", "template_sv5btsr", form.current, {
        publicKey: "_ISOAOSTfbmyXLWd5",
      })
      .then(
        () => {
          setFormStatus("Message sent successfully!");
          setUser({ name: "", email: "", comment: "" });
          setTimeout(() => {
            setFormStatus(null);
          }, 5000);
        },
        (error) => {
          setFormStatus(`Failed to send message: ${error.text}`);
        }
      );
  };
  const headerVariants = {
    hidden: { width: "0" },
    visible: {
      width: "100%",
      transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
    },
  };
  const paragraphVariants = {
    hidden: { width: "0" },

    visible: {
      width: "100%",

      transition: { delay: 0.8, duration: 1.5, ease: "easeInOut" },
    },
  };
  const homeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const homeChidren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div style={{ backgroundColor: "#A6896B" }}>
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{ backgroundImage: "url('/contact.jpg')" }}
      >
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        >
          Contactez-nous
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          viewport={{ once: true }}
        >
          Le premier pas vers un objectif est de le partager.{" "}
        </motion.h3>
      </div>
      <motion.div
        variants={homeContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="contactDiv"
      >
        <motion.h2 className="contactHeader" variants={homeChidren}>
          Contactez Restez Jeune
        </motion.h2>
        <motion.p variants={homeChidren}>
          Vous avez des questions sur nos programmes, nos équipements, ou
          souhaitez simplement en savoir plus sur notre philosophie "Restez
          Jeune" ? Notre équipe est à votre disposition pour vous guider et
          répondre à toutes vos demandes. Que ce soit pour découvrir nos
          horaires, nos offres d'abonnement, ou pour des conseils personnalisés,
          contactez-nous et commencez votre parcours vers une vie plus active et
          épanouissante !
        </motion.p>
      </motion.div>

      <div className="loginContainer">
        <motion.form
          variants={homeContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          ref={form}
          onSubmit={sendEmail}
          className="form"
        >
          <motion.label
            variants={homeChidren}
            htmlFor="name"
            className="inputLabel"
          >
            Nom et Prénom:
            <input
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={handleChange}
              className="input"
            />
          </motion.label>
          <br />
          <br />

          <motion.label
            variants={homeChidren}
            htmlFor="email"
            className="inputLabel"
          >
            Votre Email:
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
              className="input"
            />
          </motion.label>
          <br />
          <br />

          <motion.label
            variants={homeChidren}
            htmlFor="comment"
            className="inputLabel"
          >
            votre commentaire:
            <textarea
              name="comment"
              id="comment"
              value={user.comment}
              onChange={handleChange}
              className="input "
              style={{ height: "20rem" }}
            />
          </motion.label>
          <br />
          <br />

          <motion.button
            variants={homeChidren}
            type="submit"
            className="overlayText"
          >
            soumettre
          </motion.button>
        </motion.form>
        {formStatus && (
          <div className="formStatusMessage" style={{ marginTop: "-1rem" }}>
            {formStatus}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
