import { Component } from '@angular/core';

import { FaqItems } from 'src/app/interfaces/faq-items';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

FaqItem: FaqItems[] = [
  {
    question: 'Is staking safe?',
    answer: 'Yes, staking is safe. Your $ONEs never leave your wallet, so they can\'t be taken away by a validator.',
    showAnswer: false
  },
  {
    question: 'How much is the APR?',
    answer: 'It varies depending on the amount of circulating ONE being staked. Right now it\'s between 8% and 9%.',
    showAnswer: false
  },
  {
    question: 'Why should I stake?',
    answer: 'By staking with a valdiator you\'re helping secure and decentralize the network and, by doing so, you get rewarded.',
    showAnswer: false
  },
  {
    question: 'How long does it take to undelegate?',
    answer: 'The undelegation process takes 7 epochs, which is roughly 5 days.',
    showAnswer: false
  },
  {
    question: 'Do rewards get automatically compounded?',
    answer: 'No, you have to manually claim your rewards and then stake them.',
    showAnswer: false
  }
]


  toggleAnswer(index: number) {
    this.FaqItem[index].showAnswer = !this.FaqItem[index].showAnswer;
  }
}
