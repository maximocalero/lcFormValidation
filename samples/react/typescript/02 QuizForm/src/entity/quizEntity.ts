export class QuizEntity {
  questionA: Question;
  questionB: Question;
  questionC: Question;

  public constructor() {
    this.questionA = new Question(false);
    this.questionB = new Question(false);
    this.questionC = new Question(false);
  }
}

export class Question {
  isSelected: boolean;

  constructor(isSelected: boolean) {
    this.isSelected = isSelected;
  }
}
