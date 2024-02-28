const HealthcareCard = ({ title, desc, img }: { title: string; desc: string; img: string }) => {
  return (
    <div className="w-[280px] h-[280px] rounded shadow-md flex flex-col items-center justify-center px-2 py-2 gap-4 z-50 cursor-pointer">
      <img src={img} alt="icon" className="w-[64px] h-[72px] z-50" />
      <h2 className="font-raleway font-bold text-[18px] z-50">{title}</h2>
      <p className="text-center font-raleway font-medium text-[15px] text-[#616161] z-50">{desc}</p>
    </div>
  );
};

export default HealthcareCard;
