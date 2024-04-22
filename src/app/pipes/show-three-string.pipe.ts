import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showThreeString',
})
export class ShowThreeStringPipe implements PipeTransform {
  transform(title: string) {
    const words = title.split(' '); // Split the string into an array of words
    const firstTwoWords = words.slice(0, 3); // Extract the first three words
    return firstTwoWords.join(' '); // Join the first two words back into a string
  }
}
