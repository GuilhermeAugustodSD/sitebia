import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      `http://static.beatrizdantas.adv.br:8080/reviews.json`
    );
    const data = await res.json();

    console.log('data', data);

    let reviews = [];

    // Verifica se os dados recebidos são um array de reviews diretamente
    if (Array.isArray(data)) {
      reviews = data.map((review: any) => ({
        author: review.user?.name || 'Usuário desconhecido',
        rating: review.rating,
        text: review.snippet || '',
        time_ago: review.date,
        profile_photo_url:
          review.user?.thumbnail ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(review.user?.name || 'U')}`,
      }));
    } else if (data.reviews) {
      reviews = data.reviews;
    } else if (data.user_reviews?.most_relevant) {
      reviews = data.user_reviews.most_relevant.map((review: any) => ({
        author: review.username,
        rating: review.rating,
        text: review.description,
        time_ago: review.date,
        profile_photo_url: `https://ui-avatars.com/api/?name=${encodeURIComponent(review.username)}`,
      }));
    }

    if (!reviews.length) {
      return NextResponse.json({ message: 'Nenhuma avaliação encontrada.' }, { status: 404 });
    }

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Erro ao buscar avaliações:', error);
    return NextResponse.json({ message: 'Erro ao buscar avaliações.' }, { status: 500 });
  }
}
