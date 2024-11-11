"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabaseClient"; // Adjust the path to your client file
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import useRouter

export function LoginForm() {
  const router = useRouter(); // Initialize router for navigation

  async function handleGoogleLogin() {
    const redirectToUrl =
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_REDIRECT_URL_DEV
        : process.env.NEXT_PUBLIC_REDIRECT_URL_PROD;
  
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectToUrl,
      },
    });
  
    if (error) {
      console.error('Error logging in with Google:', error.message);
    } else {
      // Wait and check if the session is established
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        console.log("Session established:", data.session);
        router.push('/dashboard'); // Redirect on success
      } else {
        console.error("Session not established on client.");
      }
    }
  }

  return (
    <div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-left min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 gap-6 flex-wrap items-center justify-left">  
        <a
          className="items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          rel="noopener noreferrer"
        >
          ← Back To Home
        </a>
      </header>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Use one of the following methods to log in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button variant="outline" className="w-full flex items-center justify-center space-x-0" onClick={handleGoogleLogin}>
              <FcGoogle size={20} />
              <span>Continue with Google</span>
            </Button>

            <Button variant="outline" className="w-full flex items-center justify-center space-x-0">
              <FaGithub size={20} />
              <span>Continue with GitHub (Coming Soon)</span>
            </Button>

            <Button variant="outline" className="w-full flex items-center justify-center space-x-0">
              <div style={{ position: 'relative', width: '20px', height: '20px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <span
                  style={{
                    backgroundColor: 'white',
                    width: '12px',
                    height: '12px',
                    position: 'absolute',
                    zIndex: 1,
                  }}
                />
                <FaLinkedin size={20} style={{ color: '#0077b5', position: 'relative', zIndex: 2 }} />
              </div>
              <span>Continue with LinkedIn (Coming Soon)</span>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            By signing up you agree to our{" "}
            <Link href="#" className="underline">
              Terms of Service 
            </Link>
            {" "}and{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
