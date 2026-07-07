// components/ui/Badge.tsx
type BadgeVariant = 'crimson' | 'charcoal' | 'outline' | 'gray';

const variantClasses: Record<BadgeVariant, string> = {
  crimson:  'bg-crimson text-white',
  charcoal: 'bg-charcoal text-white',
  outline:  'border border-crimson text-crimson bg-transparent',
  gray:     'bg-gray-100 text-gray-600',
};

export default function Badge({
  label,
  variant = 'crimson',
}: {
  label: string;
  variant?: BadgeVariant;
}) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${variantClasses[variant]}`}>
      {label}
    </span>
  );
}
