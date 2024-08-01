import { Link } from 'react-router-dom'
import { Button } from '../components'


export default function ErrorPage() {
    return (
        <div className="flex-1 space-y-4  pl-64">
            <div className="flex min-h-[100dvh] flex-col items-center justify-center  bg-cover bg-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md text-center">
                <img src="/Images/404.svg" alt="404 illustration" width={200} height={200} className="mx-auto" />
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">404 - Page Not Found</h1>
                <p className="mt-4 text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
                <div className="mt-6">
                    <Button>
                    <Link
                    href="/"
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                    >
                    Go to Homepage
                    </Link>
                    </Button>
                </div>
                </div>
            </div>
        </div>
    )
}

