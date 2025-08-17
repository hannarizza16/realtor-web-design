import logoDatas from './logo.Data.jsx'
import './logo.css'


export const Logo = () => {
    return (
        <div className="overflow-hidden relative w-full bg-gradient-to-br from-gray-900 via-gray-600 to-black
 py-6">
            <div className="scroll">
                {/* First set of logos */}
                <div className="flex space-x-30 min-w-max ">
                    {logoDatas.map(({ id, imageUrl }) => (
                        <div key={id} className="flex-shrink-0 ">
                            <img src={imageUrl} alt={`logo-${id}`} className="h-20 w-20 transition-all duration-300 " />
                        </div>
                    ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex space-x-30 min-w-max pl-30">
                    {logoDatas.map(({ id, imageUrl }) => (
                        <div key={`duplicate-${id}`} className="flex-shrink-0">
                            <img src={imageUrl} alt={`logo-${id}`} className="h-20 w-20 grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                    ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex space-x-30 min-w-max pl-30">
                    {logoDatas.map(({ id, imageUrl }) => (
                        <div key={`duplicate-${id}`} className="flex-shrink-0">
                            <img src={imageUrl} alt={`logo-${id}`} className="h-20 w-20 grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


