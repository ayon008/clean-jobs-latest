import Pricing from "@/ui/Pricing";
import SectionTitles from "@/ui/SectionTitles";

const page = () => {
    return (
        <div className="px-10 py-40 bg-[#DDD]">
            <SectionTitles heading={"Start your free 7 days"} subHeading={"No commitments. Cancel anytime"} />

            <div className="mt-8 mb-20">
                <div className="flex items-center gap-20">
                    <div className="md:w-1/2">
                        <h5 className="text-lg font-bold inter mb-4">Select a payment method</h5>
                        <div class="flex items-center">
                            <div class="flex-grow border-t-2 border-black"></div>
                            <span class="px-4 font-bold text-xs inter">or</span>
                            <div class="flex-grow border-t-2 border-black"></div>
                        </div>
                        <form className="mt-8 grid grid-cols-2 gap-y-8 gap-x-4">
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text text-sm font-bold">Card Number</span>
                                </label>
                                <input type="number" placeholder="1234  1234  1234 1234" className="input input-bordered rounded-[3.75px] border-[0.75px] border-[#50565B] bg-inherit" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-sm font-bold">Expiration</span>
                                </label>
                                <input type="date" placeholder="MM/YY" className="input input-bordered rounded-[3.75px] border-[0.75px] border-[#50565B] bg-inherit" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-sm font-bold">CVC</span>
                                </label>
                                <input type="number" placeholder="234" className="input input-bordered rounded-[3.75px] border-[0.75px] border-[#50565B] bg-inherit" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-sm font-bold">ZIP</span>
                                </label>
                                <input type="number" placeholder="12341" className="input input-bordered rounded-[3.75px] border-[0.75px] border-[#50565B] bg-inherit" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-sm font-bold">Country</span>
                                </label>
                                <input type="text" value={'United States'} disabled placeholder="1234  1234  1234 1234" className="input input-bordered rounded-[3.75px] border-[0.75px] border-[#50565B] bg-inherit" required />
                            </div>
                        </form>
                        <p className="mt-8">Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-[#0A2333] py-6 px-8">
                            <div className="text-end text-white">
                                <p className="inter text-sm font-medium">After free trial ends</p>
                                <p className="inter text-sm font-medium">$13.75/month</p>
                                <p className="inter text-sm font-medium">($165.00 billed annually)</p>
                            </div>
                            <hr className="text-white h-[4px] mt-7" />
                            <div>
                                <div className="flex items-center justify-between text-white my-7">
                                    <h3 className="inter text-2xl font-bold">Today’s Total</h3>
                                    <h3 className="inter text-2xl font-bold">$0.00</h3>
                                </div>
                                <button className="bg-[#76FB91] rounded-[3.75px] btn w-full text-sm font-bold">Start Your trial</button>
                                <p className="mt-7 inter font-normal text-white">Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                            </div>
                        </div>
                        <p className="text-sm inter font-normal my-8">How did you first hear about us? (optional)</p>
                        <select>
                            <option>Email</option>
                        </select>
                    </div>
                </div>
            </div>

            <SectionTitles heading={"Find the right plan"} subHeading={"Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals."} />
            <div>
                <Pricing />
            </div>
        </div>
    );
};

export default page;