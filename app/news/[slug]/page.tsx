// app/news/[slug]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronLeft, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { newsArticles } from '@/lib/data/news';
import Badge from '@/components/ui/Badge';
import NewsCard from '@/components/NewsCard';

type Props = { params: Promise<{ slug: string }> };

const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function formatDate(iso: string) {
  const [, m, d] = iso.split('-');
  return `${parseInt(d, 10)} ${MONTH_NAMES[parseInt(m, 10) - 1]} ${iso.split('-')[0]}`;
}

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found — Kota FA' };
  return {
    title: `${article.title} — Kota FA`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = newsArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const shareText = encodeURIComponent(article.title);
  const shareUrl = encodeURIComponent(`https://kotafootballacademy.com/news/${article.slug}`);

  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero Image ── */}
      <div className="relative w-full aspect-[21/9] overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="absolute bottom-8 left-8 max-w-3xl">
          <Badge label={article.category} variant="crimson" />
          <h1 className="text-white text-3xl md:text-5xl font-black mt-3 leading-tight drop-shadow-lg">
            {article.title}
          </h1>
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="container mx-auto max-w-5xl px-6 py-12">

        {/* Back link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-crimson font-semibold hover:underline mb-8"
        >
          <FaChevronLeft className="text-sm" />
          Back to News
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── Article body (lg:col-span-2) ── */}
          <article className="lg:col-span-2">

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge label={article.category} variant="crimson" />
              <span className="text-gray-400 text-sm">{formatDate(article.publishedAt)}</span>
              <span className="text-gray-300 text-sm hidden sm:inline">·</span>
              <span className="text-gray-500 text-sm">{article.author}</span>
            </div>

            <hr className="border-gray-200 mb-8" />

            {/* Paragraphs */}
            <div className="space-y-5">
              {article.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-700 text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-10">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share buttons */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-charcoal font-bold text-sm mb-3">Share this article:</p>
              <div className="flex items-center gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson hover:text-crimson-dark text-2xl transition-colors"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson hover:text-crimson-dark text-2xl transition-colors"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson hover:text-crimson-dark text-2xl transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </article>

          {/* ── Sidebar (lg:col-span-1) ── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-1 bg-crimson rounded-full" />
                <h2 className="text-charcoal font-black text-lg">Related Articles</h2>
              </div>

              {related.length > 0 ? (
                <div className="flex flex-col gap-5">
                  {related.map((rel) => (
                    <NewsCard key={rel.slug} article={rel} variant="compact" />
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No related articles yet.</p>
              )}

              {/* CTA */}
              <div className="mt-8 bg-crimson/5 border border-crimson/20 rounded-xl p-5">
                <p className="text-charcoal font-black text-base mb-2">Want to join us?</p>
                <p className="text-gray-500 text-sm mb-4">
                  Trials are open year-round. Apply now to begin your journey.
                </p>
                <Link
                  href="/admissions"
                  className="inline-block bg-crimson text-white px-5 py-2.5 rounded-lg font-bold text-sm
                             hover:bg-crimson-dark transition-colors"
                >
                  Apply for Trials
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
