import { Button } from "@/components/ui/button"
import { Code, ArrowRight, Zap, Users } from "lucide-react"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { MagicCard } from "@/components/ui/magic-card"
import { useNavigate } from "react-router"


function FeatureCard({ icon, title, description }) {
    return (
        <MagicCard className="shadow-2xl p-7 text-center" gradientColor="#D9D9D955">
            <div className="mb-4 flex justify-center">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </MagicCard>
    )
}

function UseCaseCard({ title, description }) {
    return (
        <div className="rounded-lg bg-gray-50 p-4 text-center transition-all hover:bg-gray-100">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    )
}

export default function LandingPage() {
    const navigate = useNavigate();
    const handleLoginPage = () => {
        navigate('/login');
    }
    return (

        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Code className="h-8 w-8 text-blue-600" />
                            <span className="text-2xl font-bold text-gray-800">CodeCollab</span>
                        </div>
                        <div>
                            <Button>Features</Button>
                            <Button>About</Button>
                            <Button>Contact</Button>
                            <Button variant="outline">Get Started</Button>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-16">
                <section className="text-center">
                    <h1 className="mb-6 text-5xl font-bold text-gray-900">Real-time Collaborative Code Editor</h1>
                    <p className="mb-8 text-xl text-gray-600">
                        Enhance productivity and efficiency for developers working remotely with our unified platform for coding,
                        collaboration, and communication.
                    </p>
                    <RainbowButton onClick={handleLoginPage} className="text-white">
                        Start Collaborating <ArrowRight className="ml-2 h-5 w-5" />
                    </RainbowButton>
                </section>

                <section className="mt-20 grid gap-8 md:grid-cols-3">
                    <FeatureCard
                        icon={<Zap className="h-10 w-10 text-yellow-500" />}
                        title="Real-time Editing"
                        description="Collaborate on code in real-time with live syncing and user presence indicators."
                    />
                    <FeatureCard
                        icon={<Code className="h-10 w-10 text-green-500" />}
                        title="Multi-language Support"
                        description="Syntax highlighting for JavaScript, Python, Java, and more."
                    />
                    <FeatureCard
                        icon={<Users className="h-10 w-10 text-blue-500" />}
                        title="Integrated Communication"
                        description="Built-in text, audio, and video chat for seamless team collaboration."
                    />
                </section>

                {/* <section className="mt-20">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">How It Works</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            {/* <Image
              src="/placeholder.svg?height=400&width=800"
              width={800}
              height={400}
              alt="CodeCollab Interface"
              className="w-full"
            />
          </div>
        </section> */}

                <section className="mt-20">
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Perfect for</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <UseCaseCard title="Remote Teams" description="Collaborate across time zones and locations." />
                        <UseCaseCard title="Pair Programming" description="Enhance code quality with real-time pair programming." />
                        <UseCaseCard title="Education" description="Ideal for coding bootcamps and online learning." />
                        <UseCaseCard title="Code Reviews" description="Streamline the code review process in real-time." />
                    </div>
                </section>
            </main>

            <footer className="mt-20 bg-gray-100 py-8">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    <p>&copy; 2025 CodeCollab. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

