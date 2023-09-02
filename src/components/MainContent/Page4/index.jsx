import './style.css';

function Page4() {
    return (
    <div className="page4">
        {[...Array(3)].map((_, index) => (
        <div key={index} className="elem">
            <img src="https://d33wubrfki0l68.cloudfront.net/3401770635e95968e300d88f8b9479ecbc008eeb/be2e5/assets/home/home-experience-1.webp" alt="" />
            <div className="text-div">
            <h1>Strategy</h1>
            <h1>Strategy</h1>
            </div>
            <img src="https://d33wubrfki0l68.cloudfront.net/188bb09da2a445d08ac5b4f706711772e50e8a17/e100a/assets/home/home-experience-2.webp" alt="" />
        </div>
        ))}
    </div>
    );
}

export default Page4;
