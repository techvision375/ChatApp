import React from 'react'


const Login = () => {
    return (
        <div className='flex h-screen w-full justify-center items-center'>
            <form className="border border-white px-6 py-2 rounded-xl space-y-3 w-96" >
                <h1 className='text-2xl text-center'>
                    Text <span className='text-green-500 font-semibold '>Chat</span>
                </h1>
                <h2 className='text-xl text-white font-bold'>Login</h2>
                <br />

                <div>
                    {/* email */}
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        <input type="email" placeholder="mail@site.com" required />
                    </label>
                </div>
                <div>
                    {/* passsword */}
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                        <input type="password" required placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                    </label>
                </div>


                <div className='flex justify-between'>
                    <p>New User? <span className='text-blue-500 underline cursor-pointer ml-1'>Signup</span></p>
                    <input type="submit" className='text-white bg-green-500 px-4 py-2 rounded-lg' />
                </div>
            </form>
        </div>
    )
}

export default Login
