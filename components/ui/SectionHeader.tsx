// components/ui/SectionHeader.tsx
type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'}`}>
      <div className={`w-12 h-1 bg-crimson rounded-full mb-4 ${isCenter ? 'mx-auto' : ''}`} />
      <h2 className="text-3xl md:text-4xl font-black text-charcoal">{title}</h2>
      {subtitle && (
        <p className={`text-gray-500 text-lg mt-3 max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
