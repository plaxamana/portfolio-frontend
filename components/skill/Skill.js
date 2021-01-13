
export default function Skill({ skillImg, skillName, skillDesc }) {
    return (
        <div className="rounded-t-xl shadow-lg w-full rounded-b-xl md:max-w-xs lg:max-w-sm">
            <div className="bg-gray-800 text-gray-200 p-4 rounded-t-xl relative flex justify-between items-center space-x-2">
                <div class="flex space-x-1">
                    <div class="w-3 h-3 bg-red-500 rounded"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded"></div>
                    <div class="w-3 h-3 bg-green-500 rounded"></div>
                </div>
            </div>
            <div className="flex flex-col items-center bg-white text-center rounded-b-xl items-stretch">
                <img src={skillImg} alt="" className="pt-8 pb-6"/>
                <div className="p-4 pb-6">
                    <p className="font-bold mb-4">{skillName}</p>
                    <p>{skillDesc}</p>
                </div>
            </div>
        </div>
    )
}