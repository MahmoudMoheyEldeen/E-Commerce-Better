import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showSmallDescription',
})
export class ShowSmallDescriptionPipe implements PipeTransform {
  transform(description: string) {
    const words = description.split(' '); // Split the string into an array of words
    const firstTwentyWords = words.slice(0, 10); // Extract the first three words
    return firstTwentyWords.join(' '); // Join the first two words back into a string
  }
}
