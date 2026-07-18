/* Fetch Project Articles */

fetch('All_projects.json')
      .then(response => response.json())
      .then(data => {
        const list = document.getElementById('articles-list');
        data.forEach(article => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = article.url;
          a.textContent = article.title;
          a.target = '_blank';
          li.appendChild(a);
          list.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error loading articles:', error);
      });