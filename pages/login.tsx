import { Box,CardContent,Card,Button } from '@mui/material'
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import React,{useContext, useEffect} from 'react'
import { AppContext, ContextType } from '../components/ContextProvider';
import { auth } from '../firebase';

export default function Login() {

    const { user, setUser } = useContext(AppContext);
    const router = useRouter()

    useEffect(() => {
    

        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            router.push('/')
          } else {
            console.log("error");
          }
        });
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      const googleProvider = new GoogleAuthProvider();
      const facebookProvider = new FacebookAuthProvider();
    
      const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            console.log(result)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage });
          });
      };

      const facebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
          .then((result) => {
            console.log(result)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({ errorCode, errorMessage });
          });
      };

  return (
    <Box sx={{width:"100%",height:"85vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Card sx={{width:"300px"}}>
            <CardContent>
                <h3>Login</h3>
                <Button variant="contained" onClick={facebookLogin} sx={{width:"100%",my:3}}>Facebook Login</Button>
                <Button variant="contained" onClick={googleLogin} color="error" sx={{width:"100%"}}>Google Login</Button>
            </CardContent>
        </Card>
    </Box>
  )
}
