class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter Your Correct Option Here....");
   this.question=createElement('h3')
   this.option1=createElement('h4')
   this.option2=createElement('h4')
   this.option3=createElement('h4')
   this.option4=createElement('h4')
   this.message=createElement('h4')
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("200*120*320*450*177*321=")
     this.question.position(150,80)
     this.option1.html("don't know")
     this.option1.position(150,100)
     this.option2.html("19,63,59,55,20,00,000")
     this.option2.position(150,120)
     this.option3.html("may be 19,63,59,55,20,00,000")
     this.option3.position(150,140)
     this.message.html("may not be19,63,59,55,20,00,000")
     this.message.position(150,160)
     
     


    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.input2.position(350, 230);
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted");
      this.message.position(350, 350);

    })


  }
}
