import ContactForm from "./ContactForm";
import classes from "./ContactUs.module.css";
import Shopify from "./Shopify/Shopify";

const ContactUs = () => {
  return (
    <div>
      <div className={classes.contactContainer}>
        <h1>GET IN TOUCH</h1>
        <div className={classes.phone}>
          <h2>Give us a Ring</h2>
          <p>+27 21 330 5075</p>
        </div>
        <div className={classes.address}>
          <h2>Our Stores</h2>
          <p>
            6 Roodehek Street, Gardens, CPT (Main Store) 59 Harrington Street,
            Zonnebloem, CPT
          </p>
        </div>
        <ContactForm />
      </div>
      <Shopify />
    </div>
  );
};
export default ContactUs;
