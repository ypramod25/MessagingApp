import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-900">
            <Card className = "w-full text-center shadow-lg max-w-md">
                <CardHeader>
                    <CardTitle>
                        404 Not Found
                    </CardTitle>
                    <p className = 'text-grey-600'>
                        The page you are looking for does not exist.
                    </p>
                </CardHeader>
                <CardContent>
                    <img src="https://th.bing.com/th/id/OIP.5F2-u2IJ04ZB6NIytPFAKwHaEc?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" className="mx-auto rounded-lg shadow-lg" />
                    <Button
                        variant="outline"
                        onClick={()=>navigate(-1)}//goes one page previous
                        className="mt-4"
                    >
                        Go Back
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};