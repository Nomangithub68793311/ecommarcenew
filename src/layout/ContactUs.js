import ContactInfo from './../components/ContactInfo'
import ContactForm from '../components/ContactForm'

const ContactUs = () => {
  return (
    <div className="mt-10 container">
      <div className="py-20 grid grid-cols-5 gap-5">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactUs
