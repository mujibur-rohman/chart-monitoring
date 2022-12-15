import MyResponsiveGeo from "../charts/MyResponsiveGeo";
import MyResponsiveStream from "../charts/MyResponsiveStream";

const PusdiklatTekfungham = () => {
  return (
    <div>
      <div className="grid h-[55vh] grid-cols-2 py-5 gap-5">
        <div className="bg-white rounded-box">
          <MyResponsiveGeo />
        </div>
        <div className="bg-white rounded-box">
          <MyResponsiveStream />
        </div>
      </div>
    </div>
  );
};

export default PusdiklatTekfungham;
