import { LuArrowRightCircle } from "react-icons/lu";

const About = () => {
    return (
        <div className="text-center grid justify-items-center py-6">
            <h3 className="text-red-700 text-3xl">FEATURED</h3>
            <p className="text-black text-5xl font-extrabold p-1">GLA999</p>
            <p className="px-28 py-5 text-xl">GLA999 is made to feel luxurious experience of more strength, more comfort, more safety and more flexibility.<br />With constantly evolving of technology GLA999 gives you experience of riding a high tech car to make sure your each ride become joyful.</p>
            <button className="border text-xl font-bold rounded-full border-red-700 p-3 flex items-center gap-2">READ MORE<LuArrowRightCircle></LuArrowRightCircle></button>
            <img src="https://i.ibb.co/7KhVZ8k/about.png" />
        </div>
    );
};

export default About;