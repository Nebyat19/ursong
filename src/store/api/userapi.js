
import { ENV } from '../../config';


export const userapi = {
    login: async (userData) => {

        return   (await fetch(`${ENV.apiBaseUrl}/signupUsersList?username=${userData.username}` + '&password=' + userData.password)).json();
       
    },
    checkUserExistence: async (userData) => {
        // Check if user already exists by username and email
        const usernameCheckResponse = await fetch(`${ENV.apiBaseUrl}/signupUsersList?username=${userData.username}`);
        const emailCheckResponse = await fetch(`${ENV.apiBaseUrl}/signupUsersList?email=${userData.email}`);

        const usernameExists = usernameCheckResponse.ok && (await usernameCheckResponse.json()).length > 0;
        const emailExists = emailCheckResponse.ok && (await emailCheckResponse.json()).length > 0;

        return { usernameExists, emailExists };
    },
    signup: async (userData) => {
        // Assuming you're making a POST request to signup if the user doesn't exist
        return fetch(`${ENV.apiBaseUrl}/signupUsersList`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }).then(response => response.json());
    }
};
