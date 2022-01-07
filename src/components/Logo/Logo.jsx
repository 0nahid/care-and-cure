import logo from './logo.png'
export default function Logo() {
    return (
        <div>
            <img src={logo} className="w-3/4 md:w-4/5 lg:w-full md:h-28 mx-auto " alt="Care & Cure" />
        </div>
    )
}