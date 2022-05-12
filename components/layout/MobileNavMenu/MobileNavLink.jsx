import Link from 'next/link';

export default function MobileNavLink({ page, svg, text }) {
  return (
    <Link href={page}>
      <a>
        {svg} {text}
      </a>
    </Link>
  );
}
