  async function loadArticles() {
    try {
      const response = await fetch('./All_projects.json');
      const articles = await response.json();
      const list = document.getElementById('article-list');

      articles.forEach(article => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = article.url;
        a.textContent = article.title;
        
        li.appendChild(a);
        list.appendChild(li);
      });
    } catch (e) {
      console.error("خطا در بارگذاری مقالات:", e);
    }
  }
  loadArticles();

