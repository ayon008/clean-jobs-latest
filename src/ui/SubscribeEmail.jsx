'use client'

const SubscribeEmail = () => {
    const handleEmail = event => {
        event.preventDefault();
        const email = event.target.email.value;
        console.log(email);
        //TO_DO Send email to server
    }
    return (
        <fieldset className="form-control w-80 mt-7">
            <form className="join" onSubmit={handleEmail}>
                <input
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    className="input input-bordered join-item rounded-none border-b-[rgba(29,30,37,0.1)]
                                focus:border-b-black focus:border-b-2 focus:outline-none border-t-0 border-l-0 border-r-0 bg-[#EBF1EC]" />
                <button type="submit" className="btn bg-primary text-white join-item rounded-none">Subscribe</button>
            </form>
        </fieldset>
    );
};

export default SubscribeEmail;