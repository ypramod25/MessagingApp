import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from '@/components/ui/input';
import {useState} from 'react';
import { Label } from "@/components/ui/label";
import { Separator } from '@/components/ui/separator';
import {useNavigate} from 'react-router-dom';

export const SigninCard = () => {
    const [signinForm, setSigninForm] = useState({
        email:'',
        password:''
    });
    const navigate = useNavigate();

    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            disabled={false}
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={signinForm.email}
                            onChange={(e) => setSigninForm({...signinForm, email: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            disabled={false}
                            id="password"
                            type="password"  
                            placeholder="••••••••"
                            value={signinForm.password}
                            onChange={(e) => setSigninForm({...signinForm, password: e.target.value})}
                        />
                    </div>
                    <Button type="submit" className="w-full" disabled={false} size="lg">
                        Sign In
                    </Button>
                </form>

                <Separator className ="my-5"/>
                <p className="text-sm text-muted-foreground text-center">
                    Don't have an account?{' '}
                    <span 
                        className="text-sky-600 hover:underline cursor-pointer " 
                        onClick={() => navigate('/auth/signup')}
                    >
                        Sign Up
                    </span>
                </p>
            </CardContent>
        </Card>
    )
}