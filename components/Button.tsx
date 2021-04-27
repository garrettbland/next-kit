import Link from 'next/link'

interface ButtonProps {
    title: string
    href: string
}

const Button = ({ title, href }: ButtonProps) => (
    <Link prefetch={false} href={href}>
        <a
            className="inline-block bg-gray-900 hover:bg-gray-700 rounded-xl py-3 px-6 text-lg transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            style={{ color: 'white', textDecoration: 'none' }}
        >
            {title}
        </a>
    </Link>
)

export default Button
