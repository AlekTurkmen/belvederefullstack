//Where all of the failed authentication redirects go to
//Need to add the login page components to this later

import { login, signup } from './actions'
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm />
    </div>
  )
}