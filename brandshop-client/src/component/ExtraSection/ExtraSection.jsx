

const ExtraSection = () => {
    return (
        <div className="bg-slate-100 p-10 grid grid-cols-3 justify-items-center text-slate-900">
            <div className="p-5 ">
                <h3 className="font-bold text-3xl  ">Popular Searches</h3>
                <ol className="font-bold text-lg pt-5">
                    <li>SUVs under $23K</li>
                    <li>Vehicles with AWD/4WD</li>
                    <li>Sedans under $18K</li>
                    <li>SUVs with Third Row Seating</li>
                    <li>Pickup Trucks with Towing Pkg</li>
                </ol>
            </div>
            <div className="p-5">
                <h3 className="font-bold text-3xl  ">Popular Vehicles</h3>
                <ol className="font-bold text-lg pt-5">
                    <li>Nissan Rogue</li>
                    <li>Ford Explorer</li>
                    <li>Ford Escape</li>
                    <li>SUVs with Third Row Seating</li>
                    <li>Honda CR-V</li>
                </ol>
            </div>
            <div className="p-5">
                <h3 className="font-bold text-3xl  ">Top Locations</h3>
                <ol className="font-bold text-lg pt-5">
                    <li>Nissan SUVs <span className="text-xs text-slate-500">near Philadelphia</span></li>
                    <li>Vehicles with AWD/4WD<span className="text-xs text-slate-500"> near Mount Laurel</span></li>
                    <li>Sedans under $18K <span className="text-xs text-slate-500">near Exton</span></li>
                    <li>SUVs with Third Row Seating <span className="text-xs text-slate-500">near Pittsburgh</span></li>
                    <li>Pickup Trucks with Towing Pkg <span className="text-xs text-slate-500">near Philadelphia</span></li>
                </ol>

            </div>

        </div>
    );
};

export default ExtraSection;