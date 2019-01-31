import mongoose from 'mongoose';

const Schmea = mongoose.Schema;

const salonSchema = new Schmea({
    name: {
        type: String,
        required: "Name is required"
    },
    details: {
        type: String,
        // lowercase: true,
        // match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        required: "description is required"
    },
    image: {
        type: String,
        required: "image is required"
    },
    Address: {
        type: String,
        required: "Address is required"
    },
    lat: {
        type: Number,
        required: "Latitude is required"
    },
    lng: {
        type: Number,
        required: "Longitude is required"

    },
    logo: {
        type: String,
        // required: "Logo is required"
    },
    admin_id: {
        type: String,
    }
});

const Salon = mongoose.model("Salon", salonSchema);

export default Salon;
