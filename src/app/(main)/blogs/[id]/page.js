import { FaRegCalendar } from "react-icons/fa";
import image from '../../../../../public/assets/Ellipse 147.png'
import Image from "next/image";
import blogImage from '../../../../../public/assets/8342ec237bad177a51a4be8427c2e2fe.jpg';

const page = ({ params }) => {
    console.log(params.id);
    return (
        <div className="pb-20 pt-40 px-10">
            <h2 className="text-5xl inter font-bold text-black text-center">How Our Janitorial Services Help Your Business Attract and Retain Customers</h2>
            <p className="mt-10 text-center flex justify-center items-center gap-2"><FaRegCalendar className="mt-1" size={'1.2rem'} /><span className="inter text-2xl font-semibold">Jan 28, 2023</span></p>
            <Image src={blogImage} className="my-10" alt="" />
            <div className="px-16">
                <div className="flex items-center gap-2 mb-10">
                    <Image src={image} alt="" className="w-[50px] h-auto" />
                    <p className="inter text-xl font-semibold">By Willium Mark</p>
                </div>
                <p>Creating a Sparkling Impression: How Janitorial Leads Can Help Your Company Shine In the competitive world of business, first impressions are crucial. A clean and well-maintained environment not only reflects professionalism but also speaks volumes about a company&apos;s attention to detail and care for its clients and employees. This is where the role of a janitorial lead becomes indispensable.A janitorial lead is not just someone who oversees the cleaning staff; they are the custodians of a company&apos;s public image. They ensure that every corner of your office space is spotless, creating an inviting atmosphere for potential customers. But how can a janitorial lead help attract more customers? Let&apos;s explore.
                    **1. Setting the Standard for Cleanliness**
                    A janitorial lead sets high standards for cleanliness and organization. By maintaining these standards, they help create an environment that is not only pleasant to work in but also one that impresses visitors and potential clients. A clean workspace can significantly enhance a company&apos;s reputation and increase the likelihood of securing business deals.

                    **2. Tailored Cleaning Solutions**
                    Understanding that each business has unique needs, a janitorial lead can offer customized cleaning plans. This tailored approach ensures that the cleaning services provided align perfectly with the company&apos;s schedule and specific requirements, thereby enhancing efficiency and customer satisfaction.

                    **3. Utilizing Advanced Cleaning Technologies**
                    With access to the latest cleaning technologies and practices, a janitorial lead can offer services that are not only effective but also time-saving and eco-friendly. This modern approach to cleaning can be a selling point for businesses looking to attract environmentally conscious customers.

                    **4. Providing a Safe and Healthy Environment**
                    A janitorial lead plays a crucial role in ensuring the health and safety of a workplace. By using the right cleaning agents and methods, they help minimize the spread of germs and bacteria, which is especially important in the post-pandemic world. A safe and healthy environment is a key factor that customers consider when choosing a company to do business with.

                    **5. Enhancing Employee Productivity**
                    A clean and organized workspace boosts employee morale and productivity. When employees feel cared for, their satisfaction reflects in the quality of their work, which in turn attracts customers who appreciate superior service and professionalism.

                    **6. Offering Exceptional Customer Service**
                    Janitorial leads often serve as the point of contact for clients regarding cleaning services. By providing exceptional customer service and addressing any concerns promptly, they contribute to a positive customer experience that can lead to referrals and repeat business.

                    In conclusion, a janitorial lead is much more than a supervisor of cleaning tasks; they are a pivotal part of a company&apos;s success. By ensuring a pristine environment, they help businesses make a lasting impression that can attract and retain customers. Investing in a skilled janitorial lead is investing in your company&apos;s future. Remember, a clean space is the canvas on which your business&apos;s success is painted. Let your janitorial lead help you create a masterpiece.</p>
            </div>
        </div>
    );
};

export default page;