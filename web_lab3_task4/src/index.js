// index.js
const vacanciesElement = document.getElementById('vacancies');

async function loadVacancies() {
  try {
    const response = await axios.get('https://api.hh.ru/vacancies', {
      params: {
        text: 'Developer',
        area: 4,
        per_page: 10
      }
    });

    const vacancies = response.data.items;
    vacancies.forEach(vacancy => {
      const vacancyElement = document.createElement('div');
      vacancyElement.classList.add('vacancy');
      vacancyElement.innerHTML = `
        <h2>${vacancy.name}</h2>
        <p>${vacancy.employer.name}</p>
        <p>${vacancy.snippet.requirement}</p>
        <p>${vacancy.snippet.responsibility}</p>
      `;
      vacanciesElement.appendChild(vacancyElement);
    });
  } catch (error) {
    console.error('Error loading vacancies:', error);
  }
}

loadVacancies();