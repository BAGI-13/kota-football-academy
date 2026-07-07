// components/NewsCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import type { NewsArticle } from '@/lib/data/news';
import Badge from '@/components/ui/Badge';

const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function formatDate(iso: string) {
  const [, m, d] = iso.split('-');
  return `${parseInt(d, 10)} ${MONTH_NAMES[parseInt(m, 10) - 1]} ${iso.split('-')[0]}`;
}

type Props = {
  article: NewsArticle;
  variant: 'default' | 'compact';
};

export default function NewsCard({ article, variant }: Props) {
  if (variant === 'compact') {
    return (
      <Link href={`/news/${article.slug}`} className="group flex items-start gap-4">
        <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="96px"
            unoptimized
          />
        </div>
        <div className="flex-1 min-w-0">
          <Badge label={article.category} variant="crimson" />
          <p className="text-charcoal text-sm font-bold mt-1 line-clamp-2 group-hover:text-crimson transition-colors leading-snug">
            {article.title}
          </p>
          <p className="text-gray-400 text-xs mt-1">{formatDate(article.publishedAt)}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/news/${article.slug}`} className="group block">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <Badge label={article.category} variant="crimson" />
          <p className="text-gray-400 text-xs mt-2">{formatDate(article.publishedAt)}</p>
          <h3 className="text-charcoal text-xl font-black mt-2 leading-snug group-hover:text-crimson transition-colors line-clamp-3">
            {article.title}
          </h3>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-3 flex-1">
            {article.excerpt}
          </p>
          <span className="text-crimson font-semibold text-sm mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
            Read More <FaChevronRight className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  );
}
