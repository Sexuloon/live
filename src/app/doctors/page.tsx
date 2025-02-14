
const doctors = [
  {
    id: 1,
    name: "Dr. James Smith",
    specialization: "Sexual Health Expert",
    fee: "$50",
    available: true,
    zoomLink: "https://zoom.us/doctor1",
  },
  {
    id: 2,
    name: "Dr. Olivia Green",
    specialization: "Men's Health Specialist",
    fee: "$60",
    available: false,
    zoomLink: "https://zoom.us/doctor2",
  },
  {
    id: 3,
    name: "Dr. Richard Brown",
    specialization: "Endocrinologist",
    fee: "$55",
    available: true,
    zoomLink: "https://zoom.us/doctor3",
  },
];

export default function DoctorsPage() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Available Doctors for Consultation
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-6 rounded-xl shadow-md border">
              <h3 className="text-2xl font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialization}</p>
              <p className="text-gray-800 font-medium mt-2">Consultation Fee: {doctor.fee}</p>

              {/* Availability Indicator */}
              <div className="flex items-center justify-center mt-3">
                <span
                  className={`w-3 h-3 rounded-full ${
                    doctor.available ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <span className="ml-2">
                  {doctor.available ? "Available" : "Unavailable"}
                </span>
              </div>

              {/* Zoom Link */}
              {doctor.available && (
                <a
                  href={doctor.zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-5 py-3 bg-blue-600 text-white font-medium rounded-lg transition 
                  duration-300 hover:bg-blue-700 hover:scale-105"
                >
                  Join Zoom Consultation
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
