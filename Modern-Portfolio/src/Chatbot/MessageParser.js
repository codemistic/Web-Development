// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('hi')) {
      this.actionProvider.greet();
    }

    if(lowerCaseMessage.includes('yes')) {
      this.actionProvider.vedio();
    }

    if(lowerCaseMessage.includes('email')) {
      this.actionProvider.Face();
    }

    if(lowerCaseMessage.includes('address')) {
      this.actionProvider.faceUse();
    }

    if(lowerCaseMessage.includes('social')) {
      this.actionProvider.colab();
    }

    if(lowerCaseMessage.includes('linkedin')) {
      this.actionProvider.colabUse();
    }

    if(lowerCaseMessage.includes('twitter')) {
      this.actionProvider.codeP();
    }

    if(lowerCaseMessage.includes('facebook')) {
      this.actionProvider.facebook();
    }

    if(lowerCaseMessage.includes('instagram')) {
      this.actionProvider.instagram();
    }
    
    if(lowerCaseMessage.includes('phone')) {
      this.actionProvider.phone();
    }

    if (lowerCaseMessage.includes('good')) {
      this.actionProvider.feedback();
    }

    if (lowerCaseMessage.includes('bad')) {
      this.actionProvider.feedback();
    }
  }
}

export default MessageParser;
