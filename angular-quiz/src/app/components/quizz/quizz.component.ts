import { Component } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

type Result = {
  name: string;
  description: string;
};

type QuizResults = {
  Pirata: Result;
  Marinha: Result;
};

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {

  title: string = '';

  questions: any;
  questionsSelected:any;

  answers:string[] = [];
  // answersSelected:QuizResults = {'Pirata': {'name': '', 'description': ''
  // }, 'Marinha': {'name': '', 'description': ''}};
  answersSelected:any = '';

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionsSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoose(value: string) {
    this.answers.push(value);
    this.nextStep();

  }

  async nextStep() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionsSelected = this.questions[this.questionIndex];
    } else {
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true;
      this.answersSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results]
      console.log(this.answersSelected);

    }
  }

  async checkResult(anwsers:string[]) {
    const result = anwsers.reduce((previus, current, i, arr) => {
      if (arr.filter(item => item === previus).length > arr.filter(item => item === current).length) {
        return previus;
      }else {
        return current;
      }
    })
    return result;
  }

}
