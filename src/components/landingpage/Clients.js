// Importing the client images
import client1 from "../../assets/landingpage/client1.png";
import client2 from "../../assets/landingpage/client2.png";
import client3 from "../../assets/landingpage/client3.png";
import client4 from "../../assets/landingpage/client4.png";


// Defining the Clients component
const Clients = () => {
    return (
        // Creating a section with a gray background
        <section className="py-8 px-8 bg-gray-100">
            {/* Creating a container with centered and wrapped items */}
            <div className="container mx-auto text-center flex flex-wrap items-center justify-center gap-5">
                {/* Displaying the client images */}
                <img src={client1} alt="Client 1" className="w-auto h-6 md:h-9" />
                <img src={client2} alt="Client 2" className="w-auto h-6 md:h-9" />
                <img src={client3} alt="Client 3" className="w-auto h-6 md:h-9" />
                <img src={client4} alt="Client 4" className="w-auto h-6 md:h-9" />
                <img src={client2} alt="Client 5" className="w-auto h-6 md:h-9" />
            </div>
        </section>
    );
};

// Exporting the Clients component
export default Clients;
