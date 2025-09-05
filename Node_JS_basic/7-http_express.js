const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1);

      const fields = {};
      for (const student of students) {
        const parts = student.split(',');
        const name = parts[0];
        const field = parts[3];

        if (field) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(name);
        }
      }

      let output = `Number of students: ${students.length}`;
      for (const [field, names] of Object.entries(fields)) {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      resolve(output);
    });
  });
}

// Route racine
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route /students
app.get('/students', async (req, res) => {
  const database = process.argv[2];
  try {
    const result = await countStudents(database);
    res.send(`This is the list of our students\n${result}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

// Démarrage du serveur
app.listen(port);

module.exports = app;
