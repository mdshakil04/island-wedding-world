import collage from '../../assets/images/collage.png'

const WeddingPlanners = () => {
    return (
        <div className=" bg-gray-100 ">
            <div className=' container mx-auto mt-8 py-8 grid md:grid-cols-2'>
                <div>
                    <img src={collage} alt="" />
                </div>
                <div className='flex flex-col justify-center p-12'>
                    <p className=' font-bold text-xl'>Your Exclusive</p>
                    <h2 className="text-6xl font-bold">WEDDING <br/>PLANNERS</h2>
                    <p>A wedding plan is a comprehensive and organized outline of all the details and arrangements needed to create a memorable and successful wedding ceremony and reception. It includes elements such as choosing a date and venue, creating a budget, selecting a guest list, arranging for catering and decor, deciding on the bridal party, and coordinating various logistics like transportation and accommodations......</p>
                    <div className='mt-4'><button className="btn btn-outline btn-secondary font-bold text-xl px-8 rounded-none">READ MORE</button></div>
                </div>
            </div>
        </div>
    );
};

export default WeddingPlanners;