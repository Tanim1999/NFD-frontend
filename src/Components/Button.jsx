/* eslint-disable react/prop-types */


const Button = ({text}) => {
   
    return (
        <div>
            <button className="w-40 h-14 rounded-tr-2xl rounded-bl-2xl relative overflow-hidden flex justify-center items-center">
                <span className="bg-gradient-to-r from-[#848AFF] to-[#7A55F3] absolute w-48 h-[110px] -rotate-[32deg]"></span>
                <span className="text-white z-10">{text}</span>
            </button>






        </div>
    );
};

export default Button;