import MusclesCard from "../components/MusclesCard";

const getMuscles = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return await res.json()
}

const Muscles = async () => {
    const musclesData = await getMuscles();
    // console.log(musclesData)
    return (
        <div>
            <div>
                {
                    musclesData.map((muscle, idx) => <MusclesCard key={idx} muscle={muscle}></MusclesCard>)
                }
            </div>

        </div>
    );
};

export default Muscles;