import AccordionContainer from './AccordionContainer'
import faqImg from '../images/faq.png'

function Faq() {
  return (
    <div className="container grid grid-cols-2 py-10">
      <div>
        <img src={faqImg} alt="faq" className="h-5/6" />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-3">Faq's</h2>
        <p className="my-3 text-gray-400">
          we believe in making simple and fair pricing plans. Choose your next
          successful plan and get started today!.
        </p>
        <AccordionContainer />
      </div>
    </div>
  )
}

export default Faq
