class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }


  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage('Nice to you');
    const greeting = this.createChatBotMessage('I am Co-founder & CDO at Admisure');
    const greetnext = this.createChatBotMessage('want to contact me?');

    this.updateChatbotState(greetingMessage);
    this.updateChatbotState(greeting);
    this.updateChatbotState(greetnext);
  }

  vedio = () => {
    const v = this.createChatBotMessage(
      'So nice of you',
    );
    const u = this.createChatBotMessage('type email to get my email id.');
    const address = this.createChatBotMessage('type address to get my address');
    const sociallinks = this.createChatBotMessage('type social to get my social links');
    const phoneno = this.createChatBotMessage('type phone to get my Contact Number');
    this.updateChatbotState(v);
    this.updateChatbotState(u);
    this.updateChatbotState(address);
    this.updateChatbotState(sociallinks);
    this.updateChatbotState(phoneno);
  }

  Face = () => {
    const f = this.createChatBotMessage(
      'My email id is',
    );
    const hu = this.createChatBotMessage('akeel.zama@outlook.com');
    const emailuu = this.createChatBotMessage('& aquil@admisure.com')
    this.updateChatbotState(f);
    this.updateChatbotState(hu);
    this.updateChatbotState(emailuu);
  }

  faceUse = () => {
    const fu = this.createChatBotMessage('I am from');
    const fuuu = this.createChatBotMessage('Kolkata, West Bengal');
    const ff = this.createChatBotMessage(
      'India',
    );
    this.updateChatbotState(fu);
    this.updateChatbotState(fuuu);
    this.updateChatbotState(ff);
  }

  colab = () => {
    const cz = this.createChatBotMessage(
      'I have 4 social accounts',
      );
    const cuf = this.createChatBotMessage('LinkedIn, Instagram, twitter, facebook which one you want to know');
    this.updateChatbotState(cz);
    this.updateChatbotState(cuf);
  }

  colabUse = () => {
    const cuu = this.createChatBotMessage('My LinkedIn id is Md Aquiluzzaman Ansari');
    const ccc = this.createChatBotMessage(
      'https://www.linkedin.com/in/mdaquil/',
    );
    this.updateChatbotState(cuu);
    this.updateChatbotState(ccc);
  }

  codeP = () => {
    const pen = this.createChatBotMessage('My Twitter link is');
    const penu = this.createChatBotMessage(
      'https://twitter.com/Aquiluzzaman',
    );
    this.updateChatbotState(pen);
    this.updateChatbotState(penu);
  }

  instagram = () => {
    const pen = this.createChatBotMessage('My Instagram link is');
    const penu = this.createChatBotMessage(
      'https://www.instagram.com/akeel_zama/',
    );
    this.updateChatbotState(pen);
    this.updateChatbotState(penu);
  }

  facebook = () => {
    const pen = this.createChatBotMessage('My Facebook link is');
    const penu = this.createChatBotMessage(
      'https://www.facebook.com/mdaquiluzzaman/',
    );
    this.updateChatbotState(pen);
    this.updateChatbotState(penu);
  }
  
  phone = () => {
    const penuuu = this.createChatBotMessage('My Phone Number is');
    const penuee = this.createChatBotMessage(
      '7003698620',
    );
    this.updateChatbotState(penuuu);
    this.updateChatbotState(penuee);
  }

  feedback = () => {
    const feedback = this.createChatBotMessage(
      'Thankyou..',
    );
    this.updateChatbotState(feedback);
  }



  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
