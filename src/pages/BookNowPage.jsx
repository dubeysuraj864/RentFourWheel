import { useParams } from "react-router-dom";
import Car1 from "../images/car1.png";
function BookNowPage({ data }) {
  const { id } = useParams();
  return (
    <>
      <div className="BookNowPage">
       <h1 className="text-3xl text-yellow-500 text-center font-bold"> Book Now</h1>
        <div>
          {data &&
            data
              // eslint-disable-next-line eqeqeq
              .filter((x) => x.id == id)
              .map((x, index) => {
                return (
                  <div
                    className="flex flex-col md:flex-col justify-center item-center mx-auto w-full"
                    key={index}
                  >
                    
                  <div className="flex flex-col items-center">
                  <img src={Car1} className="w-64"  alt="" />
                   <div className="text-3xl font-bold"> {x.model}</div>
                   <div className="text-3xl font-bold"> {x.number}</div>
                   <div className="text-3xl font-bold"> {x.seats}</div>
                   <div className="text-3xl font-bold"> ${x.vehicleRent}</div>
                  </div>
                    <div
                      key={index}
                      className="left flex md:flex-row flex-col-reverse justify-center m-6 md:mx-6"
                    ></div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default BookNowPage;
