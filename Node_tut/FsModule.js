import { error } from 'console';
import fs from 'fs'

fs.writeFile('text.txt', 'Hi this is a text file', (err, data) => {
     console.log('File has been written successfully!');
})

fs.readFile('text.txt', 'utf-8', (error, data) => {
      if(error){
          console.log('error', error);
          return;
      }
      console.log(data);
});

fs.appendFile('text.txt', 'Hi bro', 'utf-8', (error) => {
     if (error) {
          console.error(error);
          return;
        }
        console.log('Data has been appended to the file.');
} )