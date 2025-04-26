export function dataRelease(list) {
    if (!Array.isArray(list)) {
      return [];
    }
    const filtered = list.filter(film => film.release_date)
    const release = filtered.map(film => ({
        ...film,
        release_date: new Date(film.release_date),
      }));
    release.sort((a, b) => b.release_date - a.release_date);
    return release.slice(0, 5);
  }
  export function ranking(list){
    if (!Array.isArray(list)) {
        return [];
      }
      list.sort((a, b) => b.vote_average - a.vote_average);
      return list.slice(0, 5);
  }

  export function revenueList(list){
    if (!Array.isArray(list)) {
        return [];
      }
      const highRevenue = Math.max(...list.map(f => f.revenue));
    const highVote = Math.max(...list.map(f => f.vote_average));

    const filmsScore = list.map(film => {
        const normalizeRevenue = film.revenue / highRevenue; // de 0 a 1
        const normalizeVote = film.vote_average / highVote; // de 0 a 1
        const score = normalizeRevenue* 0.7 + normalizeVote * 0.3; // peso 70% receita, 30% nota
        return { ...film, score };
      });
      filmsScore.sort((a, b) => b.score - a.score);

      return filmsScore.slice(0, 5);
  }