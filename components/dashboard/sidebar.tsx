'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"

export function Sidebar() {
  const [email, setEmail] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        setEmail(user.email);
      }
    }
    getUser();
  }, [supabase.auth]);

  return (
    <div className="w-64 bg-white border-r min-h-screen p-6">
      <h2 className="text-xl font-semibold mb-6">Menu</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Dashboard
          </Button>
        </Link>
        <Link href="/services/citoyens/cnib/apply" className="block">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Apply for CNIB
          </Button>
        </Link>
        <form action="/auth/signout" method="post">
          <Button 
            type="submit"
            variant="ghost" 
            className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            Sign Out
          </Button>
        </form>
      </nav>
      {email && (
        <div className="mt-6 pt-6 border-t">
          <p className="text-sm text-gray-500">
            Signed in as:
            <br />
            {email}
          </p>
        </div>
      )}
    </div>
  )
} 