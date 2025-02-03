// [file name]: VerificationPage.jsx
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { confirmUser } from '@/utils/auth';

export default function VerificationPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get email from navigation state
  const email = location.state?.email || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email) {
      setError('No email associated with this verification');
      setLoading(false);
      return;
    }

    confirmUser(email, code, (err) => {
      setLoading(false);
      if (err) {
        setError(err.message || 'Verification failed');
        return;
      }
      navigate('/login', { state: { verified: true } });
    });
  };

  if (!email) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Verification Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p>No verification email found. Please sign up first.</p>
            <Button 
              className="mt-4 w-full" 
              onClick={() => navigate('/signup')}
            >
              Go to Sign Up
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Verify Email</CardTitle>
          <CardDescription>
            Enter the verification code sent to {email}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="code">Verification Code</Label>
                <Input
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify Account'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}