

const ContactPage = () => {

  const handleFormSubmit = (formData) => {
    console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          
          <input type="text" className="form-control" placeholder="Enter your name" name="username" autoComplete="false" required/>

          <input type="email" className="form-control" placeholder="Enter your email" name="username" autoComplete="false" required/>

          <textarea className="form-control" rows="10" placeholder="Enter your message" name="message" autoComplete="false"></textarea>

          <button type="submit" value="send">Send</button>

        </form>
      </div>
    </section>
  )
}

export default ContactPage;