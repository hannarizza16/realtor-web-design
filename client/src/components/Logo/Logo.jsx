import logoDatas from './logo.Data.jsx'
import './logo.css'


export const Logo = () => {
    return (
        <div className="overflow-hidden relative w-full bg-green-100 py-6">
            <div className="scroll">
                {/* First set of logos */}
                <div className="flex space-x-8 min-w-max ">
                    {logoDatas.map(({ id, imageUrl }) => (
                        <div key={id} className="flex-shrink-0 ">
                            <img src={imageUrl} alt={`logo-${id}`} className="h-12 w-auto transition-all duration-300 " />
                        </div>
                    ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex space-x-8 min-w-max">
                    {logoDatas.map(({ id, imageUrl }) => (
                        <div key={`duplicate-${id}`} className="flex-shrink-0">
                            <img src={imageUrl} alt={`logo-${id}`} className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


