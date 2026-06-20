import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-900">
            <Card className = "w-full text-center shadow-lg max-w-md">
                <CardHeader>
                    <CardTitle>
                        Home
                    </CardTitle>
                    <p className = 'text-grey-600'>
                        This is home page.
                    </p>
                </CardHeader>
                <CardContent>
                    <img src="https://www.bing.com/th/id/OIP.PWuDz76tsaJsvHmVaFtNxAHaGt?w=193&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="mx-auto rounded-lg shadow-lg" />
                    <Button
                        variant="outline"
                        onClick={()=>navigate(-1)}//goes one page previous
                        className="mt-4"
                    >
                        Account
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};