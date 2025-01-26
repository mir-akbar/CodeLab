import { SignUpForm } from '@/components/signup-form'

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-black">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  )
}

