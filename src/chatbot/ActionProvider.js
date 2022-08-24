// Update internal state of the provider
// ActionProvider starter code
class ActionProvider {
  constructor(
   createChatBotMessage,
   setStateFunc,
   createClientMessage,
   stateRef,
   createCustomMessage,
   ...rest
 ) {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
   this.createClientMessage = createClientMessage;
   this.stateRef = stateRef;
   this.createCustomMessage = createCustomMessage;
 }

 greet = () => {
  const message = this.createChatBotMessage("Hello friend.");
  this.addMessageToState(message);
 };
 
 handleJavascriptQuiz = () => {
  const message = this.createChatBotMessage(
    "Fantastic", 
    {
      widget: "javascriptQuiz",
    }
  );

  this.addMessageToState(message);
 };

 addMessageToState = (message) => {
  this.setState(preState => ({
    ...preState,
    messages: [...preState.messages, message],
  }))
 };

}

export default ActionProvider;