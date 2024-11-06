import Arrow from "../shared/icons/Arrow";

const Hero: React.FC = () => {
  return (
    <section className="h-[90vh] flex items-center ">
      <div className="">
        <div className="flex items-center gap-6 ">
          <button className="flex items-center gap-3 rounded-full py-2.5 px-6 border">
            <span> About Us</span> <Arrow width={14} height={14} />
          </button>
          <button className="flex items-center gap-3  rounded-full py-2.5 px-6 border">
            <span> How We Operate </span> <Arrow width={14} height={14} />
          </button>
        </div>
        <h1 className="text-9xl font-semibold pt-6">
          To Accelerate Your Digital Business.
        </h1>
        <p className="pt-8 md:w-8/12">
          Boost your digital business with our tailored solutions designed to
          maximize efficiency and propel growth. Harness cutting-edge technology
          and expert guidance for streamlined operations and staying ahead of
          the curve.
        </p>
      </div>
    </section>
  );
};

export default Hero;
