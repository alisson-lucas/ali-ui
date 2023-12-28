import { FiPhone, FiMessageCircle } from "react-icons/fi";

export default function Cta4() {
    return (
        <div className="flex flex-col items-start justify-center w-full gap-4 p-4">
            <button type="button" className="bg-[#262626] p-4 rounded-full"><FiPhone size={26} color="#fff" /></button>
            <button type="button" className="bg-[#04CD19] p-4 rounded-full"><FiMessageCircle size={26} color="#fff" /></button>
        </div>
    )
}