export function	Contact() {
  return (
    <div className="contact">
      <h2>Agende sua Consulta</h2>
      <p>Preencha o formulário abaixo ou entre em contato pelo WhatsApp para agendar sua consulta.</p>
      <form>
        <h2>Envie sua mensagem</h2>
        <label htmlFor="name">Nome Completo:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
}