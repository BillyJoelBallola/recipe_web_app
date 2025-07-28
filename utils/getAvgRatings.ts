export function getAvgRatings(reviews: any[]) {
  let averageRating = 0;

  if (reviews.length === 0) {
    return averageRating;
  }

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  const average = total / reviews.length;
  averageRating = parseFloat(average.toFixed(2));

  return averageRating;
}
