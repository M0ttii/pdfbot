'use client'


import { getURL } from "next/dist/shared/lib/utils";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

var url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
var anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClientComponentClient()

export async function signInGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            // redirectTo: process.env.BASE_URL + 'auth/callback'
            redirectTo: "https://pdfbot.netlify.app/auth/callback"
        }
        
        
    })
    console.log(process.env.CALLBACK_URL)
}

export function CreateAccount() {
    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Login to PDFbot</CardTitle>
                <CardDescription>
                    Login with Google or GitHub. Email Login is currently disabled.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline" onClick={() => {console.log(getURL)}}>
                        <Icons.gitHub className="mr-2 h-4 w-4" />
                        Github
                    </Button>
                    <Button variant="outline" onClick={() => {
                        signInGoogle()
                    }}>
                        <Icons.google className="mr-2 h-4 w-4" />
                        Google
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input disabled id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input disabled id="password" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" disabled onClick={() => {
                    signInGoogle()
                }}>Create account</Button>
            </CardFooter>
        </Card>
    )
}