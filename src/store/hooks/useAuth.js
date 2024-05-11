import { useUser } from "./useUser";



  export function isAuthenticated() {
    const user =useUser();
    return user ? true:false;
  }