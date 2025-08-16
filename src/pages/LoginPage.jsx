import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [credentials, setCredentials] = React.useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log(credentials);
        try {
            const { data } = await axios.post('https://backend-basics-64.vercel.app/api/user/login', credentials)

            if (data.success) {
                localStorage.setItem('token', data.token)
                navigate('/')
            }


        } catch (error) {
            console.log(error.response.data);

        }


    };

    return (
        <div>
            <div className='border rouned shadow w-1/3 mx-auto mt-10 p-5'>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4" action="">
                    <input id='email-field' name='email' className='border p-2' value={credentials?.email} onChange={((e) => setCredentials((prev) => ({ ...prev, email: e.target.value })))} type="email" placeholder="emil" required />
                    <input id='password-field' name='password' className='border p-2' value={credentials?.password} onChange={((e) => setCredentials((prev) => ({ ...prev, password: e.target.value })))} type="password" placeholder="Password" required />
                    <button className='bg-blue-500 text-white p-2 rounded' type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage