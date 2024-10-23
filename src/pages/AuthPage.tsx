import { AuthProvider, SignInPage } from '@toolpad/core'
import { useAuth } from '../hooks/useAuth';

const providers: AuthProvider[] = [
    { id: 'credentials', name: 'Email and password' },
    { id: 'google', name: 'Google' },
    // { id: 'github', name: 'GitHub' },
    // { id: 'facebook', name: 'Facebook' },
    // { id: 'twitter', name: 'Twitter' },
    // { id: 'linkedin', name: 'LinkedIn' },
];

const AuthPage = () => {

    const { signInWithGoogle } = useAuth();

    const signIn: (provider: AuthProvider) => void = async (provider) => {
        const promise = new Promise<void>((resolve) => {
            if (provider.id === 'google') {
                signInWithGoogle()
            }
            else {
                setTimeout(() => {
                    console.log(`Sign in with ${provider.id}`);
                    resolve();
                }, 500);
            }
        });
        return promise;
    };


    return (
        <>
            <SignInPage
                signIn={signIn}
                providers={providers}
            />
        </>
    )
}

export default AuthPage
