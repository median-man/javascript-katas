/* eslint no-underscore-dangle: off */
module.exports = class Rental {
  constructor(data, movies) {
    this._data = data;
    this._movies = movies;
  }

  get days() { return this._data.days; }
  get movieID() { return this._data.movieID; }
  get movie() { return this._movies[this.movieID]; }
  get frequentRenterPoints() {
    const newReleaseBonusDays = 3;
    const minDaysReached = this.days >= newReleaseBonusDays;
    const isNewMovie = this.movie.code === 'new';
    const qualifiesForNewReleaseBonus = isNewMovie && minDaysReached;
    return qualifiesForNewReleaseBonus ? 2 : 1;
  }
  get amount() {
    const lateFee = 1.5;
    const { code } = this.movie;
    if (code === 'new') {
      return this.days * 3;
    }
    if (code === 'childrens') {
      return 1.5 + overdueAmount(this.days, 3);
    }
    return 2 + overdueAmount(this.days, 2);

    function overdueAmount(days, maxDays) {
      const isOverdue = days > maxDays;
      if (isOverdue) {
        return (days - maxDays) * lateFee;
      }
      return 0;
    }
  }
};
